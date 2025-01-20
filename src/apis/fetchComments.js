import { Comment } from "@/types/pure_js_types";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchComments = async (id) => {
    const response = await fetch(`${BASE_URL}/comments?postId=${id}`);
    const jsonComments = await response.json();
    return jsonComments.map(commentData => {
        const comment = new Comment();
        comment.postId = commentData.postId;
        comment.id = commentData.id;
        comment.name = commentData.name;
        comment.email = commentData.email;
        comment.body = commentData.body;
        return comment;
    });
}