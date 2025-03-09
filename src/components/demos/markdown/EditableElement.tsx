import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface EditableElementProps {
    initialValue: string;
    onUpdate?: (value: string) => void;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    toolbar?: string[];
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    buttonColor?: string;
}

const EditableElement: React.FC<EditableElementProps> = ({
    initialValue = '',
    onUpdate,
    className = '',
    placeholder = '點擊編輯...',
    disabled = false,
    toolbar = ['bold', 'italic', 'link', 'list', 'code'],
    bgColor = 'bg-white',
    textColor = 'text-gray-800',
    borderColor = 'border-gray-300',
    buttonColor = 'bg-blue-500',
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>(initialValue);
    const [previousValue, setPreviousValue] = useState<string>(initialValue);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    const startEditing = () => {
        if (disabled) return;
        setPreviousValue(value);
        setIsEditing(true);
    };

    const saveEdit = () => {
        setIsEditing(false);
        if (value !== previousValue && onUpdate) {
            onUpdate(value);
        }
    };

    const cancelEdit = () => {
        setValue(previousValue);
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            cancelEdit();
        } else if (e.key === 'Enter' && e.ctrlKey) {
            saveEdit();
        }
    };

    useEffect(() => {
        if (isEditing) {
            textareaRef.current?.focus();

            const handleOutsideClick = (e: MouseEvent) => {
                if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
                    saveEdit();
                }
            };

            document.addEventListener('mousedown', handleOutsideClick);

            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        }
    }, [isEditing]);

    const insertMarkdown = (format: string) => {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = value.substring(start, end);
        let formatted = '';

        switch (format) {
            case 'bold':
                formatted = `**${selectedText || '粗體文字'}**`;
                break;
            case 'italic':
                formatted = `*${selectedText || '斜體文字'}*`;
                break;
            case 'link':
                formatted = `[${selectedText || '連結文字'}](https://example.com)`;
                break;
            case 'list':
                formatted = `- ${selectedText || '列表項目'}`;
                break;
            case 'code':
                formatted = `\`${selectedText || '程式碼'}\``;
                break;
            default:
                return;
        }

        const newValue = value.substring(0, start) + formatted + value.substring(end);
        setValue(newValue);

        setTimeout(() => {
            textarea.focus();
            const newCursorPos = start + formatted.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };

    const renderToolbar = () => {
        const buttons: { [key: string]: { icon: string; title: string; format: string } } = {
            bold: { icon: 'B', title: '粗體', format: 'bold' },
            italic: { icon: 'I', title: '斜體', format: 'italic' },
            link: { icon: '🔗', title: '連結', format: 'link' },
            list: { icon: '📋', title: '列表', format: 'list' },
            code: { icon: 'C', title: '程式碼', format: 'code' },
        };

        return (
            <div className="flex gap-1 mb-2">
                {toolbar.map((btn) => {
                    const button = buttons[btn];
                    if (!button) return null;

                    return (
                        <button
                            key={btn}
                            onClick={() => insertMarkdown(button.format)}
                            className={`text-black text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded`}
                            title={button.title}
                            type="button"
                        >
                            {button.icon}
                        </button>
                    );
                })}
            </div>
        );
    };

    if (isEditing) {
        return (
            <div ref={elementRef} className={`rounded p-3 ${bgColor} ${borderColor} border shadow-sm ${className}`}>
                {renderToolbar()}

                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={`w-full outline-none resize-vertical min-h-[100px] ${bgColor} ${textColor}`}
                    placeholder={placeholder}
                    autoFocus
                />

                <div className="flex justify-between mt-2">
                    <div className="text-xs text-gray-500">
                        使用 Markdown 格式編輯 • 按 Ctrl+Enter 儲存
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={cancelEdit}
                            className="px-2 py-1 text-xs text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            取消
                        </button>
                        <button
                            onClick={saveEdit}
                            className={`text-xs ${buttonColor} hover:bg-blue-600 text-white px-2 py-1 rounded`}
                        >
                            儲存
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={elementRef}
            className={`p-3 rounded cursor-pointer ${bgColor} ${borderColor} border ${className}`}
            onClick={startEditing}
        >
            <div className={value ? `prose ${textColor}` : 'text-gray-400'}>
                {value ? (
                    <div className="prose max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {value}
                        </ReactMarkdown>
                    </div>
                ) : (
                    placeholder
                )}
            </div>
        </div>
    );
};

export default EditableElement;