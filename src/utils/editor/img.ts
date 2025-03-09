/**
 * 格式化尺寸，確保有單位
 * @param size 原始尺寸值
 * @returns 格式化後的尺寸字符串
 */
export const formatSize = (size: string | number | boolean): string => {
    if (size === 'auto' || (typeof size !== 'string' && typeof size !== 'number')) return 'auto';
    if (typeof size === 'number' || /^\d+$/.test(size.toString())) return `${size}px`;
    return size.toString();
};

/**
 * 從 Markdown 內容中提取圖片 URL
 * @param markdown Markdown 字符串
 * @returns 圖片 URL 或默認占位圖 URL
 */
export const extractImageUrl = (markdown: string): string => {
    const mdImageRegex = /!\[(.*?)\]\((.*?)\)/;
    const match = markdown.match(mdImageRegex);
    return match ? match[2] : 'https://placehold.co/600x400';
};

/**
 * 獲取對齊方式的類名
 * @param align 對齊方式字符串
 * @returns Tailwind 對齊類名
 */
export const getAlignClass = (align: string | number | boolean): string => {
    const alignValue = String(align || 'center');
    return alignValue === 'left' ? 'justify-start' :
        alignValue === 'right' ? 'justify-end' :
            'justify-center';
};

/**
 * 判斷是否為固定像素寬度
 * @param width 寬度值
 * @returns 是否為固定像素寬度的布爾值
 */
export const isFixedPixelWidth = (width: string): boolean => {
    return width !== 'auto' &&
        !width.includes('%') &&
        width.includes('px');
};

/**
 * 常用尺寸預設選項
 */
export const sizePresets = [
    { label: '自動', width: 'auto', height: 'auto' },
    { label: '小', width: '200px', height: 'auto' },
    { label: '中', width: '400px', height: 'auto' },
    { label: '大', width: '600px', height: 'auto' },
    { label: '全寬', width: '100%', height: 'auto' },
];

/**
 * 獲取默認内容
 * @param type 元素類型
 * @returns 默認 Markdown 内容
 */
export const getDefaultContent = (type: string): string => {
    switch (type) {
        case 'h1':
            return '# 新標題';
        case 'h2':
            return '## 新次標題';
        case 'h3':
            return '### 新子標題';
        case 'p':
            return '新段落文字';
        case 'img':
            return '![圖片描述](https://placehold.co/600x400)';
        case 'quote':
            return '> 新引用文字';
        case 'code':
            return '```javascript\n\n```';
        default:
            return '新內容';
    }
};

/**
 * 獲取默認属性
 * @param type 元素類型
 * @returns 默認屬性對象
 */
export const getDefaultAttributes = (type: string): Record<string, string | number | boolean> => {
    if (type === 'img') {
        return {
            width: 'auto',
            height: 'auto',
            align: 'center'
        };
    }

    return {};
};