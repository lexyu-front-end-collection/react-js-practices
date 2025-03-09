import React, { useState, useEffect } from 'react';
import { ImageControlPanelProps } from '@/types/editor/elements';
import ImageRenderer from './ImageRender';
import { sizePresets } from '@/utils/editor/img';

/**
 * 圖片控制面板，用於調整圖片尺寸和對齊方式
 */
const ImageControlPanel: React.FC<ImageControlPanelProps> = ({ attributes, onChange }) => {
    // 本地狀態，用於控制輸入框
    const [width, setWidth] = useState(attributes.width?.toString() || 'auto');
    const [height, setHeight] = useState(attributes.height?.toString() || 'auto');
    const [align, setAlign] = useState(attributes.align?.toString() || 'center');

    // 當外部屬性變化時更新本地狀態
    useEffect(() => {
        setWidth(attributes.width?.toString() || 'auto');
        setHeight(attributes.height?.toString() || 'auto');
        setAlign(attributes.align?.toString() || 'center');
    }, [attributes]);

    // 獲取預覽圖片的URL
    const getPreviewUrl = (): string => {
        return 'https://placehold.co/600x400';
    };

    // 處理尺寸預設按鈕點擊
    const handlePresetClick = (presetWidth: string, presetHeight: string) => {
        setWidth(presetWidth);
        setHeight(presetHeight);
        onChange({
            ...attributes,
            width: presetWidth,
            height: presetHeight
        });
    };

    // 處理寬度變更
    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = e.target.value;
        setWidth(newWidth);
        onChange({ ...attributes, width: newWidth });
    };

    // 處理高度變更
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = e.target.value;
        setHeight(newHeight);
        onChange({ ...attributes, height: newHeight });
    };

    // 處理對齊方式變更
    const handleAlignChange = (newAlign: string) => {
        setAlign(newAlign);
        onChange({ ...attributes, align: newAlign });
    };

    return (
        <div className="p-3 mt-3 bg-gray-800 border border-gray-700 rounded">
            <h3 className="mb-2 text-sm text-blue-300">圖片設定</h3>

            {/* 常用尺寸預設 */}
            <div className="mb-3">
                <label className="block mb-1 text-xs text-gray-400">常用尺寸</label>
                <div className="flex flex-wrap gap-2">
                    {sizePresets.map((preset) => (
                        <button
                            key={preset.label}
                            onClick={() => handlePresetClick(preset.width, preset.height)}
                            className={`px-2 py-1 text-xs rounded ${width === preset.width && height === preset.height
                                ? 'bg-blue-600'
                                : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            {preset.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 尺寸和對齊設定 */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block mb-1 text-xs text-gray-400">
                        寬度 <span className="text-gray-500">(例如: 300px, 50%, auto)</span>
                    </label>
                    <input
                        type="text"
                        value={width}
                        onChange={handleWidthChange}
                        className="w-full p-2 text-sm text-white bg-gray-900 rounded"
                        placeholder="auto, 300px, 50%, 等"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-xs text-gray-400">
                        高度 <span className="text-gray-500">(例如: 300px, auto)</span>
                    </label>
                    <input
                        type="text"
                        value={height}
                        onChange={handleHeightChange}
                        className="w-full p-2 text-sm text-white bg-gray-900 rounded"
                        placeholder="auto, 300px, 等"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-1 text-xs text-gray-400">對齊方式</label>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleAlignChange('left')}
                            className={`px-3 py-1 text-xs rounded ${align === 'left' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            靠左
                        </button>
                        <button
                            onClick={() => handleAlignChange('center')}
                            className={`px-3 py-1 text-xs rounded ${align === 'center' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            置中
                        </button>
                        <button
                            onClick={() => handleAlignChange('right')}
                            className={`px-3 py-1 text-xs rounded ${align === 'right' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            靠右
                        </button>
                    </div>
                </div>
            </div>

            {/* 即時預覽 */}
            <div className="p-2 mt-3 bg-gray-900 border border-gray-700 rounded">
                <div className="mb-1 text-xs text-gray-400">預覽效果</div>
                <ImageRenderer
                    src={getPreviewUrl()}
                    width={width}
                    height={height}
                    align={align}
                />
            </div>
        </div>
    );
};

export default ImageControlPanel;