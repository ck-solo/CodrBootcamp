import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chats",

  initialState: {
    chats: {},
    currentChatId: null,
  },

  reducers: {
    setChats: (state, action) => {
      const users = action.payload;

      state.chats = users.reduce((acc, user) => {
        acc[user._id] = {...user, messages:[]};
        return acc;
      }, state.chats);
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
    appendMessage: (state, action) => {
      const { message, receiverId, senderId, currentChatId } = action.payload;
      console.log("this is from slice", action.payload )
      state.chats[currentChatId].messages.push({
        message,
        receiverId,
        senderId,
      });
    },

    setMessages:(state,action)=>{
      const { messages, userId}  = action.payload
      state.chats[userId].messages = messages
    }
  },
});

export const { setChats, setCurrentChatId, appendMessage, setMessages } = chatSlice.actions;

export default chatSlice.reducer;
