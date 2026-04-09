import { useDispatch } from "react-redux"
import { searchUser, followUser, getFollowRequests, acceptFollowRequest } from "../service/user.api"
import { acceptFollowRequestState, appendRequest, setFollowRequests }from "../user.slice"


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

        async function handleAcceptRequest({ requestId }) {
        await acceptFollowRequest({requestId} )
        console.log(requestId)
        dispatch(acceptFollowRequestState(requestId))
    }

        return {
            handleSearchUser,
            handleFollower,
            handleGetFollowRequests,
            handleAcceptRequest
        }
}


 