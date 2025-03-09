/**
 * 頁面元素接口
 */
export interface PageElement {
    id: number;
    uuid: string;
    page_id: number;
    element_type: string;
    order_index: number;
    content_id: number;
    markdown_content: string;
    attributes: Record<string, string | number | boolean>;
}

/**
 * 可排序項目屬性
 */
export interface SortableItemProps {
    id: number;
    uuid: string;
    markdown: string;
    elementType: string;
    isDragging?: boolean;
    attributes?: Record<string, string | number | boolean>;
    onUpdate: (uuid: string, content: string, attributes?: Record<string, string | number | boolean>) => void;
}

/**
 * 圖片渲染器屬性
 */
export interface ImageRendererProps {
    src: string;
    width: string | number | boolean;
    height: string | number | boolean;
    align: string | number | boolean;
}

/**
 * 圖片控制面板屬性
 */
export interface ImageControlPanelProps {
    attributes: Record<string, string | number | boolean>;
    onChange: (newAttributes: Record<string, string | number | boolean>) => void;
}

/**
 * 尺寸預設選項
 */
export interface SizePreset {
    label: string;
    width: string;
    height: string;
}

/**
 * 保存頁面內容的請求負載
 */
export interface SavePageRequest {
    page_uuid: string;
    elements: {
        uuid: string;
        markdown_content: string;
        element_type: string;
        order_index: number;
        attributes: Record<string, string | number | boolean>;
        html_content: string;
    }[];
}