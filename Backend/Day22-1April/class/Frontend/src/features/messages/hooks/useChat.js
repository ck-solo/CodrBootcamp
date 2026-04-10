import { useDispatch } from "react-redux";
import { getChatUsers } from "../service/message.api.js";
import { setChats } from "../state/chat.slice.js";

export const useChat = () => {
    const dispatch = useDispatch()
    
    async function handleGetChats(){
        const data = await getChatUsers()
        dispatch(setChats(data.chats))
    }
    return {handleGetChats}
}