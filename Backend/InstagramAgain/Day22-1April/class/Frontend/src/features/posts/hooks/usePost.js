import { useDispatch } from "react-redux";
import { createPost, getPosts, likePost, addComment, deleteComment } from "../service/post.api";
import { setPosts, updatePost } from "../posts.slice";


export const usePost = () =>{

    const dispatch = useDispatch()

    async function handleGetPosts() {
        const data = await getPosts()
         
        dispatch(setPosts(data.posts))
    }


    async function handleCreatePost({media, caption}){
        console.log(media)
        const data = await createPost({media, caption})
        return data
    }

    async function handleLikePost(postId) {
        try {
            const data = await likePost(postId);
            dispatch(updatePost(data.post));
            return data;
        } catch (error) {
            console.error("Error liking post:", error);
        }
    }

    async function handleAddComment(postId, text) {
        try {
            const data = await addComment(postId, text);
            dispatch(updatePost(data.post));
            return data;
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    async function handleDeleteComment(postId, commentId) {
        try {
            const data = await deleteComment(postId, commentId);
            dispatch(updatePost(data.post));
            return data;
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    }

    return {
        handleGetPosts,
        handleCreatePost,
        handleLikePost,
        handleAddComment,
        handleDeleteComment
    }
}