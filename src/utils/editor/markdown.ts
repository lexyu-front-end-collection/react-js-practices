import markdownToHtml from 'markdown-it';
import { sanitizeHtml } from '@/utils/editor/html';

// 創建 Markdown 解析器實例
const mdParser = new markdownToHtml({
    breaks: true,  // 啟用換行轉換為 <br>
    html: true,    // 允許 HTML 標籤
    linkify: true, // 自動轉換 URL 為連結
});

/**
 * 將 Markdown 轉換為 HTML
 * @param markdown Markdown 字符串
 * @returns 轉換後的 HTML 字符串
 */
export const convertMarkdownToHtml = (markdown: string): string => {
    return mdParser.render(markdown);
};

/**
 * 安全地將 Markdown 轉換為 HTML（包含 XSS 防護）
 * @param markdown Markdown 字符串
 * @returns 安全的 HTML 字符串
 */
export const convertMarkdownToSafeHtml = (markdown: string): string => {
    const html = convertMarkdownToHtml(markdown);
    return sanitizeHtml(html);
};

/**
 * 從 Markdown 提取純文本，移除所有標記
 * @param markdown Markdown 字符串
 * @returns 純文本內容
 */
export const extractTextFromMarkdown = (markdown: string): string => {
    // 移除 Markdown 語法
    return markdown
        .replace(/#+\s(.*)/g, '$1') // 標題
        .replace(/\*\*(.*)\*\*/g, '$1') // 粗體
        .replace(/\*(.*)\*/g, '$1') // 斜體
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 鏈接
        .replace(/!\[([^\]]+)\]\([^)]+\)/g, '$1') // 圖片
        .replace(/`([^`]+)`/g, '$1') // 行內代碼
        .replace(/```[\s\S]*?```/g, '') // 代碼塊
        .replace(/>(.*)/g, '$1') // 引用
        .replace(/- (.*)/g, '$1') // 無序列表
        .replace(/\d+\. (.*)/g, '$1') // 有序列表
        .trim();
};

/**
 * 提取 Markdown 中的標題
 * @param markdown Markdown 字符串
 * @returns 標題字符串或 undefined
 */
export const extractTitleFromMarkdown = (markdown: string): string | undefined => {
    const titleMatch = markdown.match(/^#+\s(.*)$/m);
    return titleMatch ? titleMatch[1].trim() : undefined;
};

export default mdParser;