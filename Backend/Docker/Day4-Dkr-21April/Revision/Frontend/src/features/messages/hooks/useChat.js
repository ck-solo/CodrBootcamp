import { useDispatch } from "react-redux";
import { getChatMessages, getChatUsers } from "../service/message.api.js";
import { appendMessage, setChats, setCurrentChatId, setMessages } from "../chat.slice.js";
export const useChat = () => {
  const dispatch = useDispatch();

  async function handleGetChats() {
    const data = await getChatUsers();
    console.log("data", data);
    dispatch(setChats(data.chats));
  }
  async function handleSetCurrentChatId(userId) {
    dispatch(setCurrentChatId(userId));
    localStorage.setItem("currentChatId", userId);

    const data = await getChatMessages(userId);
    console.log(data);

    dispatch(
      setMessages({
        userId,
        messages: data.messages.map((msg) => ({
          ...msg,
          senderId: msg.sender?._id ? String(msg.sender._id) : String(msg.sender),
          receiverId: msg.receiver?._id ? String(msg.receiver._id) : String(msg.receiver),
        })),
      })
    );
  }

  function handleAppendMessage({
    message,
    receiverId,
    senderId,
    currentChatId,
  }) {
    dispatch(
      appendMessage({ message, receiverId, senderId, currentChatId })
    );
  }
  return { handleGetChats, handleSetCurrentChatId, handleAppendMessage };
};
