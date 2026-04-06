import { useDispatch } from "react-redux";
import { createPost, getPosts } from "../service/post.api";
import { setPosts } from "../posts.slice";


export const usePost = () =>{

    const dispatch = useDispatch()

    async function handleGetPosts() {
        const data = await getPosts()
        console.log(data)
        dispatch(setPosts(data.posts))
    }


    async function handleCreatePost({media, caption}){
        console.log(media)
        const data = await createPost({media, caption})
        return data
    }

    return {
        handleGetPosts,
        handleCreatePost
    }
}