import React, { useState, useEffect } from "react";
import { DndContext, pointerWithin, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { PageElement } from "@/types/editor/elements";
import { savePageContent } from "@/apis/editor/apis";
import { getDefaultAttributes, getDefaultContent } from "@/utils/editor/img";
import { editorMockData } from "@/data/editor";

/**
 * 頁面編輯器主組件
 */
const Copywriting: React.FC = () => {
    // 狀態管理 
    // @ts-ignore 
    const [pageUuid, setPageUuid] = useState<string>("page-uuid-123");
    const [elements, setElements] = useState<PageElement[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [hasPendingChanges, setHasPendingChanges] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // 載入頁面元素
    useEffect(() => {
        const loadPageElements = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // 從 API 獲取頁面元素
                const data = await editorMockData(pageUuid);
                setElements(data);
                setHasPendingChanges(false);
            } catch (err) {
                setError(`載入頁面元素時發生錯誤: ${err instanceof Error ? err.message : String(err)}`);
                console.error("Error loading page elements:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadPageElements();
    }, [pageUuid]);

    // 處理拖拽開始
    const handleDragStart = (event: DragStartEvent): void => {
        setActiveId(event.active.id as number);
    };

    // 處理拖拽結束
    const handleDragEnd = (event: DragEndEvent): void => {
        const { active, over } = event;
        setActiveId(null);

        // 如果沒有目標或是拖動到自己，則不進行處理
        if (!over || active.id === over.id) return;

        // 找到被拖動和目標元素在陣列中的索引
        const activeIndex = elements.findIndex(el => el.id === active.id);
        const targetIndex = elements.findIndex(el => el.id === over.id);

        if (activeIndex === -1 || targetIndex === -1) return;

        // 重新排序元素
        const newElements = [...elements];
        const [movedElement] = newElements.splice(activeIndex, 1);
        newElements.splice(targetIndex, 0, movedElement);

        // 更新所有元素的順序索引
        const updatedElements = newElements.map((element, index) => ({
            ...element,
            order_index: index
        }));

        setElements(updatedElements);
        setHasPendingChanges(true);
    };

    // 處理元素內容更新
    const handleElementUpdate = (
        uuid: string,
        newContent: string,
        newAttributes?: Record<string, string | number | boolean>
    ): void => {
        const updatedElements = elements.map(element => {
            if (element.uuid === uuid) {
                return {
                    ...element,
                    markdown_content: newContent,
                    // 如果有新的屬性，則合併它們，否則保留原有屬性
                    attributes: newAttributes ? { ...element.attributes, ...newAttributes } : element.attributes
                };
            }
            return element;
        });

        setElements(updatedElements);
        setHasPendingChanges(true);
    };

    // 新增元素
    const addNewElement = (type: string): void => {
        // 生成新的 ID 和 UUID
        const newId = Math.max(...elements.map(el => el.id), 0) + 1;
        const newUuid = `elem-uuid-${Date.now()}`;
        const newOrderIndex = elements.length;

        // 創建新元素
        const newElement: PageElement = {
            id: newId,
            uuid: newUuid,
            page_id: 1, // 假設固定頁面 ID
            element_type: type,
            order_index: newOrderIndex,
            content_id: Date.now(), // 臨時內容 ID
            markdown_content: getDefaultContent(type),
            attributes: getDefaultAttributes(type)
        };

        // 添加新元素到陣列
        setElements([...elements, newElement]);
        setHasPendingChanges(true);
    };

    // 刪除元素
    const deleteElement = (id: number): void => {
        // 過濾掉要刪除的元素並重新計算順序
        const filteredElements = elements
            .filter(el => el.id !== id)
            .map((element, index) => ({
                ...element,
                order_index: index
            }));

        setElements(filteredElements);
        setHasPendingChanges(true);
    };

    // 保存頁面內容
    const handleSaveContent = async (): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);

            // 調用 API 保存內容
            await savePageContent(pageUuid, elements);

            setHasPendingChanges(false);
            alert("頁面內容儲存成功！");
        } catch (err) {
            setError(`儲存頁面內容時發生錯誤: ${err instanceof Error ? err.message : String(err)}`);
            console.error("Error saving page content:", err);
            alert(`儲存失敗: ${err instanceof Error ? err.message : '未知錯誤'}`);
        } finally {
            setIsLoading(false);
        }
    };

    // 載入中狀態
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                    <p>載入中...</p>
                </div>
            </div>
        );
    }

    // 錯誤狀態
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
                <div className="max-w-md p-6 text-center bg-gray-800 rounded-lg">
                    <div className="mb-4 text-red-500">
                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold">發生錯誤</h2>
                    <p className="mb-4 text-gray-300">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        重新載入頁面
                    </button>
                </div>
            </div>
        );
    }

    // 主要編輯器界面
    return (
        <div className="min-h-screen pb-20 text-white bg-gray-900 page-editor">
            {/* 頂部固定標題欄 */}
            <header className="sticky top-0 z-10 p-4 mb-6 bg-gray-900 shadow-md">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-blue-300">頁面編輯器</h1>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm">
                            {hasPendingChanges ? (
                                <span className="text-yellow-400">● 有未儲存的變更</span>
                            ) : (
                                <span className="text-green-400">● 已儲存</span>
                            )}
                        </div>
                        <button
                            onClick={handleSaveContent}
                            disabled={!hasPendingChanges}
                            className={`px-4 py-2 font-bold text-white transition-colors duration-200 rounded-md shadow-lg ${hasPendingChanges
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-600 cursor-not-allowed'
                                }`}
                        >
                            儲存頁面
                        </button>
                    </div>
                </div>
            </header>

            {/* 主要內容區 */}
            <div className="max-w-6xl mx-auto">
                {/* 添加元素按鈕組 */}
                <div className="flex mb-8 space-x-4">
                    <button
                        onClick={() => addNewElement('h1')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增 H1 標題
                    </button>
                    <button
                        onClick={() => addNewElement('h2')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增 H2 標題
                    </button>
                    <button
                        onClick={() => addNewElement('h3')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增 H3 標題
                    </button>
                    <button
                        onClick={() => addNewElement('p')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增段落
                    </button>
                    <button
                        onClick={() => addNewElement('img')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增圖片
                    </button>
                    <button
                        onClick={() => addNewElement('quote')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增引用
                    </button>
                    <button
                        onClick={() => addNewElement('code')}
                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                    >
                        新增程式碼
                    </button>
                </div>

                {/* 可排序元素容器 */}
                <DndContext
                    collisionDetection={pointerWithin}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                >
                    <SortableContext
                        items={elements.map(el => el.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="max-w-4xl mx-auto mb-20">
                            {/* 渲染元素列表 */}
                            {elements.map((element) => (
                                <div key={element.id} className="relative group">
                                    <SortableItem
                                        id={element.id}
                                        uuid={element.uuid}
                                        markdown={element.markdown_content}
                                        elementType={element.element_type}
                                        attributes={element.attributes}
                                        isDragging={activeId === element.id}
                                        onUpdate={handleElementUpdate}
                                    />
                                    {/* 刪除按鈕 */}
                                    <button
                                        onClick={() => deleteElement(element.id)}
                                        className="absolute z-10 p-1 text-white transition-opacity duration-200 bg-red-600 rounded opacity-0 -right-4 -top-4 hover:bg-red-700 group-hover:opacity-100"
                                        title="刪除元素"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            {/* 空狀態提示 */}
                            {elements.length === 0 && (
                                <div className="p-8 text-center text-gray-500 border border-gray-700 border-dashed rounded-lg">
                                    頁面目前沒有元素，請使用上方按鈕新增內容
                                </div>
                            )}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};

export default Copywriting;