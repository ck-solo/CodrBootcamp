import { useDispatch } from "react-redux"
import { searchUser } from "../service/user.api"



export const  useUser = () => {
    const dispatch = useDispatch()

         async function handleSearchUser({query}) {
            const data = await searchUser({query})
            return data.users
        }

        async function handleFollower({userId}){
            const data = await followUser({userId})
            dispatch(appendRequest(userId))
            return data.follow
        }

        return {
            handleSearchUser,
            handleFollower
        }
}


 