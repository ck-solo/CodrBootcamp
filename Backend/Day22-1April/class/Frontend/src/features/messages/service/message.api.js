import axios from "axios";

export const getChatUsers = async () => {
    const response = await axios.get("http://localhost:3000/api/chats", {
        withCredentials: true
    })
    console.log("helo",response.data)
    return response.data
} 
