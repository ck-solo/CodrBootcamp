import { useDispatch } from "react-redux";
import { getChatUsers } from "../service/message.api.js";
import { appendMessage, setChats, setCurrentChatId } from "../chat.slice.js";
export const useChat = () => {

    const dispatch = useDispatch()
    
    async function handleGetChats(){
        const data = await getChatUsers()
        console.log("data",data)
        dispatch(setChats(data.chats))
    }
    function handleSetCurrentChatId(userId){
        dispatch(setCurrentChatId(userId))
    }

     function handleAppendMessage({ message, receiverId, senderId, currentChatId }) {
        dispatch(appendMessage({ message, receiverId, senderId, currentChatId }))
    }
    return {handleGetChats,handleSetCurrentChatId, handleAppendMessage}
}