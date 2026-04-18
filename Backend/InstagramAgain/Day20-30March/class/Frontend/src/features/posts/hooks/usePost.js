import { useDispatch } from "react-redux";
import { getPosts } from "../service/posts.api";
import { setPosts } from "../post.slice";




export const usePost = () =>{
    const dispatch = useDispatch()

    async function handleGetPosts(){
        const data  = await getPosts()
        dispatch(setPosts(data.posts))
    }

    return {
        handleGetPosts
    }
}