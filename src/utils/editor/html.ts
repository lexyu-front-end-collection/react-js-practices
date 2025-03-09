import DOMPurify from 'dompurify';
import elementStyles from '@/types/editor/styles';
import { formatSize } from './img';

/**
 * 將 HTML 應用 Tailwind 樣式
 * @param html 原始 HTML 字符串
 * @param elementType 元素類型
 * @param attributes 元素屬性
 * @returns 應用樣式後的 HTML 字符串
 */
export const applyTailwindToHtml = (
    html: string,
    elementType: string,
    attributes?: Record<string, string | number | boolean>
): string => {
    const styles = elementStyles[elementType] || elementStyles.default;

    // 清除不需要的樣式
    const cleanedHtml = html.replace(/margin-[^:]+:[^;]+;/g, '');

    // 圖片元素需要特殊處理
    if (elementType === 'img') {
        const width = attributes?.width ? attributes.width : 'auto';
        const height = attributes?.height ? attributes.height : 'auto';
        const alignment = attributes?.align || 'center';

        const formattedWidth = formatSize(width);
        const formattedHeight = formatSize(height);

        // 根據對齊方式設定容器樣式
        const alignStyle = String(alignment) === 'left' ? 'justify-content: flex-start' :
            String(alignment) === 'right' ? 'justify-content: flex-end' :
                'justify-content: center';

        // 圖片元素需要更嚴格的樣式控制
        const isFixedWidth = formattedWidth !== 'auto' && !formattedWidth.includes('%');

        if (isFixedWidth) {
            // 固定寬度的圖片使用嵌套結構
            return `
                <div class="${styles.content}" style="display: flex; ${alignStyle}">
                    <div style="width: ${formattedWidth}; max-width: 100%;">
                        <img 
                            style="width: 100%; height: ${formattedHeight !== 'auto' ? formattedHeight : 'auto'}; object-fit: contain !important; display: block;"
                            ${cleanedHtml.match(/<img(.*?)>/)?.[1] || ''}
                        />
                    </div>
                </div>
            `;
        } else {
            // 百分比或自動寬度的圖片
            const imgWithAttributes = cleanedHtml.replace(
                /<img(.*?)>/g,
                `<img$1 style="max-width: 100% !important; width: ${formattedWidth} !important; height: ${formattedHeight} !important; object-fit: contain !important; display: block !important;" />`
            );

            return `<div class="${styles.content}" style="display: flex; ${alignStyle}">${imgWithAttributes}</div>`;
        }
    }

    // 其他元素類型的標準處理
    return `<div class="${styles.content}">${cleanedHtml}</div>`;
};

/**
 * 從 HTML 字符串中提取內容
 * @param html HTML 字符串
 * @returns 純文本內容
 */
export const extractTextFromHtml = (html: string): string => {
    // 創建一個臨時 div 元素
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // 獲取純文本內容
    return tempDiv.textContent || tempDiv.innerText || '';
};

/**
 * 安全處理 HTML，防止 XSS 攻擊
 * @param html 原始 HTML 字符串
 * @returns 已清理的安全 HTML
 */
export const sanitizeHtml = (html: string): string => {
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['blockquote',]
    });
};