import { PageElement } from "@/types/editor/elements";

/**
 * Editor Fake Data
 * @param pageUuid 頁面UUID
 * @returns Promise<PageElement[]> 頁面元素陣列
 */
// @ts-ignore 
export const editorMockData = async (pageUuid: string): Promise<PageElement[]> => {
    try {
        // 實際應用中，解除以下註釋並刪除模擬數據
        /*
        const response = await fetch(`/api/pages/${pageUuid}/elements`);
        if (!response.ok) {
            throw new Error(`Failed to fetch page elements: ${response.statusText}`);
        }
        return await response.json();
        */

        // 模擬數據
        const fakeData: PageElement[] = [
            {
                id: 1,
                uuid: "elem-uuid-1",
                page_id: 1,
                element_type: "h1",
                order_index: 0,
                content_id: 101,
                markdown_content: "# 這是標題一",
                attributes: { color: "black" }
            },
            {
                id: 2,
                uuid: "elem-uuid-2",
                page_id: 1,
                element_type: "p",
                order_index: 1,
                content_id: 102,
                markdown_content: "這是一段**粗體**和*斜體*的混合文字。",
                attributes: { fontSize: "16px" }
            },
            {
                id: 3,
                uuid: "elem-uuid-3",
                page_id: 1,
                element_type: "img",
                order_index: 2,
                content_id: 103,
                markdown_content: "![image](https://cdn-icons-png.flaticon.com/512/1169/1169608.png)",
                attributes: {
                    width: "300px",
                    height: "300px",
                    align: "center"
                }
            },
            {
                id: 4,
                uuid: "elem-uuid-4",
                page_id: 1,
                element_type: "quote",
                order_index: 3,
                content_id: 104,
                markdown_content: "> 這是一段引用文字，展示區塊引用的樣式。",
                attributes: { style: "classic" }
            },
            {
                id: 5,
                uuid: "elem-uuid-5",
                page_id: 1,
                element_type: "code",
                order_index: 4,
                content_id: 105,
                markdown_content: "```javascript\nconst greeting = 'Hello, World!';\nconsole.log(greeting);\n```",
                attributes: { language: "javascript" }
            }
        ];

        await new Promise(resolve => setTimeout(resolve, 500));

        return fakeData.sort((a, b) => a.order_index - b.order_index);
    } catch (error) {
        console.error('Error fetching page elements:', error);
        throw error;
    }
};
