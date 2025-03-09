import { PageElement, SavePageRequest } from "@/types/editor/elements";
import { applyTailwindToHtml } from "@/utils/editor/html";
import { convertMarkdownToSafeHtml } from "@/utils/editor/markdown";

/**
 * 保存頁面內容
 * @param pageUuid 頁面UUID
 * @param elements 頁面元素陣列
 * @returns Promise<void>
 */
export const savePageContent = async (pageUuid: string, elements: PageElement[]): Promise<void> => {
    try {
        const payload: SavePageRequest = {
            page_uuid: pageUuid,
            elements: elements.map(element => ({
                uuid: element.uuid,
                markdown_content: element.markdown_content,
                element_type: element.element_type,
                order_index: element.order_index,
                attributes: element.attributes,
                html_content: applyTailwindToHtml(
                    convertMarkdownToSafeHtml(element.markdown_content),
                    element.element_type,
                    element.attributes
                )
            }))
        };

        // 實際應用中，解除以下註釋
        /*
        const response = await fetch(`/api/pages/${pageUuid}/contents`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Failed to save page content: ${response.statusText}`);
        }
        */

        // 模擬網絡延遲
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Content saved successfully', payload);
    } catch (error) {
        console.error('Error saving page content:', error);
        throw error;
    }
};

/**
 * 更新元素順序
 * @param pageUuid 頁面UUID
 * @param elements 頁面元素陣列
 * @returns Promise<void>
 */
// @ts-ignore
export const updateElementsOrder = async (pageUuid: string, elements: PageElement[]): Promise<void> => {
    try {
        const orderPayload = elements.map(element => ({
            uuid: element.uuid,
            order_index: element.order_index
        }));

        /*
        const response = await fetch(`/api/pages/${pageUuid}/elements/reorder`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ elements: orderPayload }),
        });

        if (!response.ok) {
            throw new Error(`Failed to update elements order: ${response.statusText}`);
        }
        */

        // 模擬網絡延遲
        await new Promise(resolve => setTimeout(resolve, 500));

        console.log('Elements order updated successfully', orderPayload);
    } catch (error) {
        console.error('Error updating elements order:', error);
        throw error;
    }
};