import React, { useState } from 'react';
import EditableElement from './EditableElement';

const EditableElementDemo: React.FC = () => {
    const [content1, setContent1] = useState<string>('## 這是預設樣式的編輯器\n\n點擊此區域可以編輯內容，支援 **Markdown** 格式。');
    const [content2, setContent2] = useState<string>('## 這是藍色主題的編輯器\n\n使用 Tailwind 的 `bg-blue-50` 和 `border-blue-200` 類別來設定顏色。');
    const [content3, setContent3] = useState<string>('## 這是粉色主題的編輯器\n\n使用 Tailwind 的 `bg-pink-50` 和 `border-pink-200` 類別來設定顏色。');
    const [content4, setContent4] = useState<string>('## 這是綠色主題的編輯器\n\n使用 Tailwind 的 `bg-green-50` 和 `border-green-200` 類別來設定顏色。');
    const [content5, setContent5] = useState<string>('## 這是暗色主題的編輯器\n\n使用 Tailwind 的 `bg-gray-800` 和 `text-gray-100` 類別來設定顏色。');

    return (
        <div className="max-w-4xl p-6 mx-auto">
            <h1 className="mb-6 text-2xl font-bold text-center">使用 Tailwind 自訂顏色的編輯器</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h2 className="mb-2 text-lg font-medium">預設樣式</h2>
                    <EditableElement
                        initialValue={content1}
                        onUpdate={setContent1}
                        className="w-full"
                    />
                </div>

                <div>
                    <h2 className="mb-2 text-lg font-medium text-blue-600">藍色主題</h2>
                    <EditableElement
                        initialValue={content2}
                        onUpdate={setContent2}
                        className="w-full"
                        bgColor="bg-blue-50"
                        borderColor="border-blue-200"
                        textColor="text-blue-800"
                        buttonColor="bg-blue-600"
                    />
                </div>

                <div>
                    <h2 className="mb-2 text-lg font-medium text-pink-600">粉色主題</h2>
                    <EditableElement
                        initialValue={content3}
                        onUpdate={setContent3}
                        className="w-full"
                        bgColor="bg-pink-50"
                        borderColor="border-pink-200"
                        textColor="text-pink-800"
                        buttonColor="bg-pink-500"
                    />
                </div>

                <div>
                    <h2 className="mb-2 text-lg font-medium text-green-600">綠色主題</h2>
                    <EditableElement
                        initialValue={content4}
                        onUpdate={setContent4}
                        className="w-full"
                        bgColor="bg-green-50"
                        borderColor="border-green-200"
                        textColor="text-green-800"
                        buttonColor="bg-green-600"
                    />
                </div>

                <div className="md:col-span-2">
                    <h2 className="mb-2 text-lg font-medium text-gray-600">暗色主題</h2>
                    <EditableElement
                        initialValue={content5}
                        onUpdate={setContent5}
                        className="w-full"
                        bgColor="bg-gray-800"
                        borderColor="border-gray-600"
                        textColor="text-gray-100"
                        buttonColor="bg-gray-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditableElementDemo;