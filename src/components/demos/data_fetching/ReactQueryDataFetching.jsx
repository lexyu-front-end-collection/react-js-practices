import { useState } from "react";
import { useComments } from "@/hooks/custom/useComment";

/**
 * React Query Demo
 */
function ReactQueryDataFetching() {

    const [id, setId] = useState(0);
    const {
        data: comments = [],
        isError,
        error,
        isPending,
        isFetched,
        isLoading,
    } = useComments(id);

    if (isLoading) {
        return <div className="loading-placeholder">Loading...</div>;
    }

    if (isError) {
        return <h1 className="text-red-500">Something went wrong: {error.message}</h1>; // 顯示錯誤訊息
    }


    return (
        <div>
            <div className="header-container">
                <h1 className="text-2xl">React Query Data Fecth Demo</h1>
            </div>
            <div className="mt-5">
                <h1 className="text-lg">id : {id}</h1>
                <button className="mt-4 px-4 py-2 rounded bg-blue-700 text-white"
                    onClick={() => setId(Math.max(0, id - 1))}
                    disabled={id <= 0}>
                    Decrease Id
                </button>
                <button className="ml-6 px-4 py-2 rounded bg-blue-700 text-white"
                    onClick={() => setId(id + 1)}>
                    Increase Id
                </button>
            </div>
            <div className="mt-10">
                {isLoading && <div className="loading-placeholder">Loading...</div>}
                {isPending && <div className="loading-placeholder">Loading more data...</div>}
                {isFetched && <div className="text-green-500">Data fetched successfully!</div>}
                {!isLoading && comments.length > 0 && (
                    <ul className="mt-10 space-y-4">
                        {comments.map(comment => (
                            <li key={comment.id} className="p-4 rounded border shadow">
                                <div>
                                    <h2>#{comment.id}</h2>
                                    <strong>{comment.name}</strong> <span className="text-gray-600">({comment.email})</span>
                                </div>
                                <div className="mt-2">{comment.body}</div>
                            </li>
                        ))}
                    </ul>
                )}
                {!isLoading && comments.length === 0 && <div className="mt-4">No comments</div>}
            </div>
        </div>
    );
}

export default ReactQueryDataFetching