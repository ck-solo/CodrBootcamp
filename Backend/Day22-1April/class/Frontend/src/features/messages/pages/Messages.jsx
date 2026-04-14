import React, { useEffect, useRef, useState } from 'react'
import { useChat } from '../hooks/useChat'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client';
import ChatUserTile from '../components/ChatUserTile'


const URL = 'http://localhost:3000';


const Messages = () => {
    const { handleGetChats, handleAppendMessage } = useChat()
    const chats = useSelector(store => store.chat.chats)
    const loggedInUser = useSelector(store => store.auth.user)
    const currentChatId = useSelector(store => store.chat.currentChatId)
   
    const [ message, setMessage ] = useState("")
    const socketRef = useRef(null)


    function handleSendMessage() {
        if (!message.trim()) return;
        socketRef.current.emit("send_message", {
            message,
            receiver: currentChatId
        })
        handleAppendMessage({
            message,
            receiverId: currentChatId,
            senderId: loggedInUser.id,
            currentChatId: currentChatId
        })
        setMessage("");
    }



    useEffect(() => {
        const socket = io(URL, {
            withCredentials: true
        })
        socketRef.current = socket

        socket.once("connect", () => {
            console.log("Connected to socket")
        })

        socket.on("connect_error", (data) => {
            console.log(data)
        })

        socket.on("receive_message", data => {
            handleAppendMessage({
                message: data.message,  
                receiverId: data.receiver, 
                senderId: data.sender,  
                currentChatId: data.sender 
            })
        })

        handleGetChats()

        return () => {
            socket.disconnect()
            socketRef.current = null
        }

    }, [ loggedInUser ])

    const chatUsers = Object.values(chats)



    return (
        <div className="flex flex-col w-full md:flex-row h-screen bg-[#05050A] text-white font-[Inter,sans-serif]">
            {/* Users List - Left */}
            <div className="w-full md:w-[320px] lg:w-[380px] bg-[#05050A] shrink-0 h-[35vh] md:h-full overflow-y-auto p-6 md:p-8 border-r border-white/10">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Messages</h1>
                </div>
                <div className="mb-4">
                    <h3 className="text-xs font-bold tracking-widest text-[#9333EA] uppercase">Conversations</h3>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    {chatUsers.length > 0 ? chatUsers.map(user => (
                        <ChatUserTile key={user._id} user={user} />
                    )) : (
                        <p className="text-gray-500 text-sm mt-4 text-center">No conversations</p>
                    )}
                </div>
            </div>

            {/* Chat Interface - Right */}
            <div className="flex-1 flex flex-col h-[65vh] md:h-full overflow-hidden">
                <div className="flex-1 bg-[#05050A] flex flex-col overflow-hidden relative">
                    {/* Header */}
                    <div className="px-8 py-5 border-b border-white/10 bg-[#0B0B14] sticky top-0 z-10 shadow-xl">
                        {!currentChatId && <h2 className="text-xl tracking-tight font-medium text-gray-400">Select a Chat</h2>}
                        {currentChatId && chats[currentChatId] && <ChatUserTile actAs={"header"} user={chats[ currentChatId ]} />}
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-3">
                        {!currentChatId && (
                            <div className="text-center h-full flex flex-col items-center justify-center opacity-70">
                                <div className="w-20 h-20 rounded-full border-2 border-[#9333EA] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9333EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl text-white font-medium mb-2">Your Messages</h3>
                                <p className="text-gray-400 text-sm tracking-wide">Select a user from the left to start a conversation</p>
                            </div>
                        )}
                        {currentChatId && chats[currentChatId] && (
                            chats[ currentChatId ].messages.map((message, index) => {
                                return (
                                    <div key={index} className={"flex flex-col h-fit w-fit max-w-[75%] px-5 py-3 rounded-2xl " + (message.receiver == loggedInUser.id ? "bg-[#1A1A28] text-white rounded-tl-sm self-start" : "bg-[#9333EA] text-white rounded-tr-sm self-end")}>
                                        <p className="text-[15px] leading-relaxed break-words">{message.message}</p>
                                    </div>
                                )
                            })
                        )}
                    </div>

                    {/* Input Area */}
                    {currentChatId && (
                        <div className="p-5 bg-[#0B0B14] flex gap-3 border-t border-white/10 items-end">
                            <div className="bg-[#1A1A28] rounded-[1.5rem] px-6 py-3.5 border border-white/5 flex grow items-center transition-all focus-within:bg-[#1A1A28] focus-within:ring-1 focus-within:ring-[#9333EA] hover:border-white/10 shadow-lg">
                                <input
                                    type="text"
                                    placeholder="Message..."
                                    className="w-full text-[15px] outline-none bg-transparent placeholder-gray-500 text-white"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage() }}
                                />
                            </div>

                            <button
                                onClick={handleSendMessage}
                                disabled={!message.trim()}
                                className={"px-6 py-3.5 rounded-full font-medium text-sm transition-colors flex items-center justify-center " + (message.trim() ? "bg-[#9333EA] text-white hover:bg-[#7e22ce] shadow-[0_0_20px_rgba(147,51,234,0.3)]" : "bg-white/5 text-gray-500 cursor-not-allowed")}
                            >
                                Send
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Messages