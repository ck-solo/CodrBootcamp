import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatUserTile from "../components/ChatUserTile";

const URL = "";

const Messages = () => {
  const { handleGetChats, handleAppendMessage, handleSetCurrentChatId } = useChat();

  const chats = useSelector((store) => store.chat.chats);
  const loggedInUser = useSelector((store) => store.auth.user);
  const currentChatId = useSelector((store) => store.chat.currentChatId);

  const [message, setMessage] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const chatUsers = Object.values(chats || {});
  const currentChat = chats?.[currentChatId];

  // ✅ Send Message
  function handleSendMessage() {
    if (!message.trim()) return;

    socketRef.current.emit("send_message", {
      message,
      receiver: currentChatId,
    });

    handleAppendMessage({
      message,
      receiverId: currentChatId,
      senderId: loggedInUser.id,
      currentChatId,
    });

    setMessage("");
  }

  // ✅ Socket Setup
  useEffect(() => {
    const socket = io(URL, { withCredentials: true });
    socketRef.current = socket;

    socket.on("receive_message", (data) => {
      handleAppendMessage({
        message: data.message,
        receiverId: loggedInUser?.id,
        senderId: data.sender,
        currentChatId: data.sender,
      });
    });

    handleGetChats();

    return () => {
      socket.disconnect();
    };
  }, [loggedInUser]);

  // ✅ Restore selected chat after refresh
  useEffect(() => {
    const storedChatId = localStorage.getItem("currentChatId");

    if (
      storedChatId &&
      chats?.[storedChatId] &&
      currentChatId !== storedChatId
    ) {
      handleSetCurrentChatId(storedChatId);
    }
  }, [chats, currentChatId, handleSetCurrentChatId]);

  // ✅ Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat]);

  return (
    <div className="flex w-full h-screen bg-[#05050A] text-white">
      {/* LEFT SIDEBAR */}
      <div className="w-[340px] bg-[#05050A] border-r border-white/10 overflow-y-auto p-6 custom-scrollbar">
        <h1 className="text-2xl font-semibold mb-6">Messages</h1>

        <h3 className="text-xs font-bold tracking-widest text-[#9333EA] uppercase mb-4">
          Conversations
        </h3>

        <div className="flex flex-col gap-1">
          {chatUsers.length ? (
            chatUsers.map((user) => <ChatUserTile key={user._id} user={user} />)
          ) : (
            <p className="text-gray-500 text-sm text-center mt-4">
              No conversations
            </p>
          )}
        </div>
      </div>

      {/* RIGHT CHAT */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#0B0B14] flex items-center gap-4">
          {currentChat ? (
            <>
              <img
                src={
                  currentChat.profilePicture || "https://via.placeholder.com/40"
                }
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h2 className="text-md font-semibold">
                  {currentChat.username}
                </h2>
                <p className="text-xs text-green-400">online</p>
              </div>
            </>
          ) : (
            <h2 className="text-gray-400">Select a Chat</h2>
          )}
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 custom-scrollbar">
          {!currentChat ? (
            <div className="flex flex-1 items-center justify-center  text-center opacity-70">
              <div>
                <h3 className="text-xl mb-2">Your Messages</h3>
                <p className="text-gray-400 text-sm">
                  Select a user to start chatting
                </p>
              </div>
            </div>
          ) : !loggedInUser ? (
            <div className="flex flex-1 items-center justify-center text-center opacity-70">
              <p className="text-gray-400 text-sm">Loading...</p>
            </div>
          ) : (
            <>
              {currentChat.messages.map((msg, index) => {
                const senderId = msg.senderId || msg.sender;
                const isMine = String(senderId) === String(loggedInUser.id);

                return (
                  <div
                    key={index}
                    className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                        isMine
                          ? "bg-[#9333EA] rounded-tr-sm"
                          : "bg-[#1A1A28] rounded-tl-sm"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                );
              })}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* INPUT */}
        {currentChat && (
          <div className="p-4 border-t border-white/10 bg-[#0B0B14] flex gap-3">
            <input
              type="text"
              placeholder="Message..."
              className="flex-1 bg-[#1A1A28] px-4 py-2 rounded-full outline-none text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />

            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className={`px-5 py-2 rounded-full text-sm ${
                message.trim()
                  ? "bg-[#9333EA] hover:bg-[#7e22ce]"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
