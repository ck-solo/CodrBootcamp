import { useDispatch } from "react-redux"
import { searchUser, followUser } from "../service/user.api"
import { appendRequest, setFollowRequests }from "../user.slice"


export const  useUser = () => {
    const dispatch = useDispatch()

         async function handleSearchUser({query}) {
            const data = await searchUser({query})
            return data.users
        }

        async function handleFollower(userId){
            console.log(userId)
            const data = await followUser(userId)
            dispatch(appendRequest(userId))
            return data.follow
        }


        async function handleGetFollowRequests(){
            const data = await getFollowRequests()
            dispatch(setFollowRequests(data.requests))
        }

        return {
            handleSearchUser,
            handleFollower,
            handleGetFollowRequests
        }
}


 