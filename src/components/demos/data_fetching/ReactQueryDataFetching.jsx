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
    return (
        <div>
            <div className="header-container">
                <h1 className="text-2xl">React Query Data Fetch Demo</h1>
            </div>

            {isError && (
                <h1 className="text-red-500">Something went wrong: {error.message}</h1>
            )}

            <div className="mt-5">
                <h1 className="text-lg">id : {id}</h1>
                <button className="px-4 py-2 mt-4 text-white bg-blue-700 rounded"
                    onClick={() => setId(Math.max(0, id - 1))}
                    disabled={id <= 0}>
                    Decrease Id
                </button>
                <button className="px-4 py-2 ml-6 text-white bg-blue-700 rounded"
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
                            <li key={comment.id} className="p-4 border rounded shadow">
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