import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove } from '@dnd-kit/sortable';

// 定義區塊類型
interface Block {
    id: string;
    content: string;
    index: number;
}

// 可拖曳的編輯器區塊組件
const SortableEditorBlock = ({ block, onContentChange }: { block: Block; onContentChange: (id: string, content: string) => void }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });
    const editorRef = useRef<any>(null);

    // 處理控制鍵 + Enter 保存內容
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'Enter' && editorRef.current) {
            const content = editorRef.current.getInstance().getMarkdown();
            onContentChange(block.id, content);
            alert(`Block ${block.id} content saved!`);
        }
    };

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        background: 'white',
        color: 'black'
    };

    return (
        <div ref={setNodeRef} style={style} onKeyDown={handleKeyDown}>
            <div className="flex items-center p-2 bg-gray-100">
                <div {...attributes} {...listeners} className="p-2 mr-2 cursor-move">
                    ⋮⋮
                </div>
                <div className="text-sm">Block {block.index + 1}</div>
            </div>
            <Editor
                ref={editorRef}
                initialValue={block.content}
                previewStyle="tab"
                height="200px"
                initialEditType="markdown"
                useCommandShortcut={true}
                toolbarItems={[
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task'],
                    ['table', 'link'],
                    ['code', 'codeblock']
                ]}
            />
        </div>
    );
};

// 主應用組件
const BlockEditorApp = () => {
    const [blocks, setBlocks] = useState<Block[]>([
        { id: '1', content: '# Hello World', index: 0 },
        { id: '2', content: 'This is the second block.', index: 1 },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor)
    );

    // 處理拖曳結束時的重新排序
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setBlocks((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                const newBlocks = arrayMove(items, oldIndex, newIndex);

                // 更新索引以反映新順序
                return newBlocks.map((block, index) => ({
                    ...block,
                    index
                }));
            });
        }
    };

    // 處理區塊內容變更
    const handleContentChange = (id: string, content: string) => {
        setBlocks((prevBlocks) =>
            prevBlocks.map((block) =>
                block.id === id ? { ...block, content } : block
            )
        );
    };

    // 新增區塊
    const addBlock = () => {
        const newId = String(blocks.length + 1);
        const newBlock = {
            id: newId,
            content: '# New Block',
            index: blocks.length
        };

        setBlocks([...blocks, newBlock]);
    };

    // 提交所有區塊
    const submitAllBlocks = () => {
        // 按照索引排序並創建預期的格式
        const sortedBlocks = [...blocks].sort((a, b) => a.index - b.index);
        const result = sortedBlocks.reduce((acc, block, index) => {
            acc[index + 1] = block.content;
            return acc;
        }, {} as Record<number, string>);

        console.log('Final result:', result);
        alert('Data submitted! Check console for the result.');
    };

    return (
        <div className="max-w-4xl p-4 mx-auto">
            <style>
                {`
          /* 確保編輯器內的文字顏色為深色 */
          .toastui-editor-contents,
          .toastui-editor-contents *,
          .toastui-editor-defaultUI .ProseMirror,
          .toastui-editor-defaultUI .ProseMirror * {
            color: #333 !important;
          }
          
          /* 確保編輯區域背景為淺色 */
          .toastui-editor-defaultUI .ProseMirror {
            background-color: #fff !important;
          }
          
          /* 調整標題顏色 */
          .toastui-editor-contents h1,
          .toastui-editor-contents h2,
          .toastui-editor-contents h3,
          .toastui-editor-contents h4,
          .toastui-editor-contents h5,
          .toastui-editor-contents h6 {
            color: #111 !important;
            font-weight: 600 !important;
          }
          
          /* 調整引用塊樣式 */
          .toastui-editor-contents blockquote {
            border-left: 4px solid #4b5563 !important;
            background-color: #f3f4f6 !important;
            padding: 0.5em 1em !important;
          }
          
          /* 調整代碼塊樣式 */
          .toastui-editor-contents pre,
          .toastui-editor-contents code {
            background-color: #f1f5f9 !important;
            color: #334155 !important;
          }
          
          /* 調整工具欄按鈕顏色，確保可見 */
          .toastui-editor-toolbar-icons {
            color: #4b5563 !important;
          }
          
          /* 調整下拉選單選項文字顏色 */
          .toastui-editor .toastui-editor-dropdown-menu .dropdown-item {
            color: #333 !important;
          }
          
          /* 調整所有下拉選單內容 */
          .toastui-editor-dropdown-menu,
          .toastui-editor-dropdown-menu *,
          .toastui-editor-dropdown-toolbar,
          .toastui-editor-dropdown-toolbar * {
            color: #333 !important;
          }
          
          /* 下拉選單背景確保為白色 */
          .toastui-editor-dropdown-menu {
            background-color: white !important;
            border: 1px solid #ddd !important;
          }
          
          /* 懸停效果 */
          .toastui-editor-dropdown-menu .toastui-editor-dropdown-item:hover {
            background-color: #f3f4f6 !important;
          }
          
          /* 確保預覽模式中的文字顏色 */
          .toastui-editor-md-preview * {
            color: #333 !important;
          }
          
          /* 調整鏈接顏色 */
          .toastui-editor-contents a {
            color: #3b82f6 !important;
          }
          
          /* 調整列表項目標記顏色 */
          .toastui-editor-contents ul > li::before,
          .toastui-editor-contents ol > li::before {
            color: #4b5563 !important;
          }
          
          /* 調整表格樣式 */
          .toastui-editor-contents table {
            border-collapse: collapse !important;
          }
          
          .toastui-editor-contents th, 
          .toastui-editor-contents td {
            border: 1px solid #d1d5db !important;
            color: #333 !important;
          }
          
          .toastui-editor-contents th {
            background-color: #f9fafb !important;
          }
        `}
            </style>

            <h1 className="mb-4 text-2xl font-bold">Block Editor Demo</h1>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={blocks.map(block => block.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {blocks.map((block) => (
                        <SortableEditorBlock
                            key={block.id}
                            block={block}
                            onContentChange={handleContentChange}
                        />
                    ))}
                </SortableContext>
            </DndContext>

            <div className="mt-4 space-x-2">
                <button
                    onClick={addBlock}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Add Block
                </button>

                <button
                    onClick={submitAllBlocks}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                >
                    Submit All
                </button>
            </div>

            <div className="mt-4 text-sm text-gray-500">
                <p>提示: 使用 Ctrl+Enter 儲存各區塊內容</p>
            </div>
        </div>
    );
};

export default BlockEditorApp;