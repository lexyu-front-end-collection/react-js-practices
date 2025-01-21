import { useEffect, useRef, useState } from "react";
import { Comment } from "@/types/pure_js_types";

const BASE_URL = "https://jsonplaceholder.typicode.com"

function DataFetchOwnHandle() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [id, setId] = useState(0)
    const abortControllerRef = useRef(null)

    useEffect(() => {
        const fetchComments = async () => {
            abortControllerRef.current?.abort()
            abortControllerRef.current = new AbortController()

            setIsLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/comments?postId=${id}`, {
                    signal: abortControllerRef.current?.signal
                })
                const jsonComments = await response.json()
                const comments = jsonComments.map(commentData => {
                    const comment = new Comment();
                    comment.postId = commentData.postId;
                    comment.id = commentData.id;
                    comment.name = commentData.name;
                    comment.email = commentData.email;
                    comment.body = commentData.body;
                    return comment;
                });
                setComments(comments)
            } catch (e) {
                if (e.name === "AbortError") {
                    console.log("Aborted");
                    return
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchComments()
    }, [id])

    if (error) {
        return <h1>Something went wrong:{error}</h1>
    }

    return (
        <div>
            <div className="header-container">
                <h1 className="m-6 text-2xl">Data Fetch Own Handle Demo</h1>
            </div>
            <div className="m-8">
                <button onClick={() => setId(id + 1)}
                    className="px-4 py-2 rounded bg-blue-700 text-white">
                    Increase Id ({id})
                </button>
                {isLoading && <div className="loading-placeholder">Loading...</div>}
                {!isLoading && comments.length > 0 && (
                    <ul className="m-8 space-y-4">
                        {comments.map(comment => (
                            <li key={comment.id} className="p-4 rounded border shadow">
                                <div>
                                    <h2>#{comment.id}</h2>
                                    <strong>{comment.name}</strong> <span className="text-gray-600">({comment.email})</span>
                                </div>
                                <div className="mt-4">{comment.body}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {!isLoading && comments.length === 0 && <div>No comments</div>}
        </div>
    );
}

export default DataFetchOwnHandle