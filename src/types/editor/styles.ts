/**
 * 各元素類型的樣式定義
 */
const elementStyles: Record<string, Record<string, string>> = {
    h1: {
        container: "rounded-lg p-4 mb-4 border-l-4 border-blue-500 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none prose-headings:text-blue-300",
        editMode: "bg-gray-700"
    },
    h2: {
        container: "rounded-lg p-4 mb-4 border-l-4 border-green-500 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:text-green-300 [&>h2]:mb-3",
        editMode: "bg-gray-700"
    },
    h3: {
        container: "rounded-lg p-4 mb-4 border-l-4 border-yellow-500 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:text-yellow-300 [&>h3]:mb-2",
        editMode: "bg-gray-700"
    },
    p: {
        container: "rounded-lg p-4 mb-4 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none prose-p:text-gray-300 prose-strong:text-white prose-em:text-gray-400",
        editMode: "bg-gray-700"
    },
    img: {
        container: "rounded-lg p-4 mb-4 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none flex justify-center items-center",
        editMode: "bg-gray-700"
    },
    quote: {
        container: "rounded-lg p-4 mb-4 border-l-4 border-purple-500 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none [&>blockquote]:border-l-4 [&>blockquote]:border-purple-500 [&>blockquote]:pl-4 [&>blockquote]:py-2 [&>blockquote]:my-4 [&>blockquote]:text-gray-300",
        editMode: "bg-gray-700"
    },
    code: {
        container: "rounded-lg p-4 mb-4 border border-gray-700 bg-gray-900 shadow-md",
        content: "prose prose-invert max-w-none prose-code:text-green-300 prose-pre:bg-gray-900 prose-pre:text-gray-300",
        editMode: "bg-gray-800"
    },
    default: {
        container: "rounded-lg p-4 mb-4 bg-gray-800 shadow-md",
        content: "prose prose-invert max-w-none",
        editMode: "bg-gray-700"
    }
};

export default elementStyles;