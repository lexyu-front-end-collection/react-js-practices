import React, { useState, useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'dompurify';


import { SortableItemProps } from '@/types/editor/elements';
import elementStyles from '@/types/editor/styles';
import ImageControlPanel from './ImageControlPanel';
import ImageRenderer from './ImageRender';
import { extractImageUrl } from '@/utils/editor/img';
import { applyTailwindToHtml } from '@/utils/editor/html';
import mdParser from '@/utils/editor/markdown';

/**
 * 可排序的元素項組件，用於頁面編輯器中的拖拽功能
 */
const SortableItem: React.FC<SortableItemProps> = ({
    id,
    markdown,
    uuid,
    elementType,
    isDragging,
    attributes = {},
    onUpdate
}) => {
    // 使用 DND Kit 的 useSortable 鉤子
    const {
        attributes: dndAttributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    // 本地狀態管理
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [content, setContent] = useState<string>(markdown);
    const [imgAttributes, setImgAttributes] = useState<Record<string, string | number | boolean>>({
        width: attributes.width || 'auto',
        height: attributes.height || 'auto',
        align: attributes.align || 'center'
    });

    // 當外部屬性變更時更新本地狀態
    useEffect(() => {
        setImgAttributes({
            width: attributes.width || 'auto',
            height: attributes.height || 'auto',
            align: attributes.align || 'center'
        });
    }, [attributes]);

    // 獲取元素樣式
    const containerStyle = elementStyles[elementType]?.container || elementStyles.default.container;
    const editModeStyle = elementStyles[elementType]?.editMode || elementStyles.default.editMode;
    const contentStyle = elementStyles[elementType]?.content || elementStyles.default.content;

    // 動態類名
    const draggingClass = isDragging ? "border-2 border-blue-500 shadow-lg" : "";
    const editingClass = isEditing ? editModeStyle : "";

    // 處理開始編輯
    const handleStartEditing = (e: React.MouseEvent) => {
        if (!isDragging) {
            e.stopPropagation();
            setIsEditing(true);
        }
    };

    // 處理保存
    const handleSave = () => {
        setIsEditing(false);
        onUpdate(uuid, content, elementType === 'img' ? imgAttributes : undefined);
    };

    // 處理取消編輯
    const handleCancel = () => {
        setContent(markdown);
        setImgAttributes({
            width: attributes.width || 'auto',
            height: attributes.height || 'auto',
            align: attributes.align || 'center'
        });
        setIsEditing(false);
    };

    // 處理圖片屬性變更
    const handleImageAttributesChange = (newAttributes: Record<string, string | number | boolean>) => {
        setImgAttributes(newAttributes);
    };

    // 處理鍵盤事件，新增 Ctrl+Enter 快捷鍵儲存功能
    const handleKeyDown = (e: React.KeyboardEvent) => {
        // 當按下 Ctrl+Enter 或 Cmd+Enter (Mac) 時儲存內容
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault(); // 防止換行
            handleSave();
        }
        // 當按下 Esc 時取消編輯
        else if (e.key === 'Escape') {
            e.preventDefault();
            handleCancel();
        }
    };

    // 編輯模式渲染
    if (isEditing) {
        return (
            <div
                ref={setNodeRef}
                className={`${containerStyle} ${editingClass} border border-blue-400`}
                style={{
                    transform: CSS.Transform.toString(transform),
                    transition,
                }}
                data-element-uuid={uuid}
                data-element-type={elementType}
            >
                {/* 文本編輯區域 */}
                <textarea
                    value={content}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 text-white bg-gray-800 rounded min-h-[100px] font-mono"
                    autoFocus
                />

                {/* 圖片特殊設置控制項 */}
                {elementType === 'img' && (
                    <ImageControlPanel
                        attributes={imgAttributes}
                        onChange={handleImageAttributesChange}
                    />
                )}

                {/* 預覽區域 */}
                <div className="flex flex-col mt-2 space-y-2">
                    <div className="p-2 text-gray-300 bg-gray-800 border border-gray-700 rounded">
                        <strong className="text-blue-300">預覽:</strong>
                        <div className={contentStyle}>
                            {elementType === 'img' ? (
                                <ImageRenderer
                                    src={extractImageUrl(content)}
                                    width={imgAttributes.width}
                                    height={imgAttributes.height}
                                    align={imgAttributes.align}
                                />
                            ) : (
                                <ReactMarkdown remarkPlugins={[remarkGfm]}
                                    components={{
                                        // @ts-ignore 
                                        p: ({ node, children }) => {
                                            return <p style={{ whiteSpace: 'pre-line' }}>{children}</p>
                                        }
                                    }}>
                                    {content}
                                </ReactMarkdown>
                            )}
                        </div>
                    </div>

                    {/* 按鈕區域 */}
                    <div className="flex justify-between mt-2">
                        <div className="text-xs text-gray-400">
                            使用 Markdown 格式編輯 (CTRL + Enter)
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleCancel}
                                className="px-3 py-1 text-xs bg-gray-600 rounded hover:bg-gray-500"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-3 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-500"
                            >
                                儲存
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 預覽模式渲染
    return (
        <div
            ref={setNodeRef}
            {...dndAttributes}
            {...listeners}
            className={`${containerStyle} ${draggingClass} cursor-grab hover:border-blue-400 hover:border`}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            data-element-uuid={uuid}
            data-element-type={elementType}
            onDoubleClick={handleStartEditing}
        >
            <div className="relative">
                {elementType === 'img' ? (
                    <ImageRenderer
                        src={extractImageUrl(content)}
                        width={imgAttributes.width}
                        height={imgAttributes.height}
                        align={imgAttributes.align}
                    />
                ) : (
                    <div dangerouslySetInnerHTML={{
                        __html: applyTailwindToHtml(
                            DOMPurify.sanitize(mdParser.render(content)),
                            elementType,
                            attributes
                        )
                    }} />
                )}
                <div className="absolute p-1 text-xs text-gray-400 bg-gray-800 rounded opacity-0 top-2 right-2 hover:opacity-100">
                    雙擊編輯 (Ctrl+Enter 快速儲存)
                </div>
            </div>
        </div>
    );
};

export default SortableItem;