import { ImageRendererProps } from '@/types/editor/elements';
import { formatSize, getAlignClass, isFixedPixelWidth } from '@/utils/editor/img';
import React, { useRef, useEffect } from 'react';

/**
 * 渲染圖片元素的組件，處理不同尺寸和對齊方式
 */
const ImageRenderer: React.FC<ImageRendererProps> = ({ src, width, height, align }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 格式化設定值
    const formattedWidth = formatSize(width);
    const formattedHeight = formatSize(height);
    const alignClass = getAlignClass(align);

    // 固定像素寬度的情況需要特殊處理
    const isFixed = isFixedPixelWidth(formattedWidth);

    // 使用 useEffect 確保樣式被正確應用，特別是在圖片加載後
    useEffect(() => {
        if (!imgRef.current) return;

        // 為圖片元素設置尺寸
        const img = imgRef.current;

        // 使用 onload 事件確保圖片加載後應用正確尺寸
        const handleImageLoad = () => {
            if (isFixed && containerRef.current) {
                // 固定寬度情況：容器設置固定寬度，圖片設為100%
                containerRef.current.style.width = formattedWidth;
                containerRef.current.style.maxWidth = '100%';
                img.style.width = '100%';

                if (formattedHeight !== 'auto') {
                    img.style.height = formattedHeight;
                } else {
                    img.style.height = 'auto';
                }
            } else {
                // 其他情況：直接設置圖片寬度
                img.style.width = formattedWidth;
                img.style.maxWidth = '100%';

                if (formattedHeight !== 'auto') {
                    img.style.height = formattedHeight;
                } else {
                    img.style.height = 'auto';
                }
            }

            // 共用樣式
            img.style.objectFit = 'contain';
            img.style.display = 'block';
        };

        // 無論圖片是否已經加載完成，都確保應用樣式
        if (img.complete) {
            handleImageLoad();
        } else {
            img.addEventListener('load', handleImageLoad);
            return () => {
                img.removeEventListener('load', handleImageLoad);
            };
        }
    }, [formattedWidth, formattedHeight, isFixed, src]);

    // 根據是否為固定寬度使用不同的渲染方式
    if (isFixed) {
        return (
            <div className={`w-full flex ${alignClass}`} data-type="fixed-width">
                <div
                    ref={containerRef}
                    style={{
                        width: formattedWidth,
                        maxWidth: '100%',
                        border: '1px solid transparent' // 幫助視覺化容器
                    }}
                >
                    <img
                        ref={imgRef}
                        src={src}
                        alt="圖片"
                        style={{
                            width: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className={`w-full flex ${alignClass}`} data-type="fluid-width">
                <img
                    ref={imgRef}
                    src={src}
                    alt="圖片"
                    style={{
                        maxWidth: '100%',
                        objectFit: 'contain'
                    }}
                />
            </div>
        );
    }
};

export default ImageRenderer;