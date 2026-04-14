import React from 'react'
import { useChat } from '../hooks/useChat'

const ChatUserTile = ({ user, actAs = "tile" }) => {

    const { handleSetCurrentChatId } = useChat()

    function handleClick(userId) {
        if (actAs === "tile") {
            handleSetCurrentChatId(userId)
        }
    }

    return (
        <button onClick={() => { handleClick(user._id) }} className={"flex items-center p-3 rounded-xl transition-all cursor-pointer group text-left" + (actAs == "tile" ? " hover:bg-[#1A1A28]" : " cursor-default")}>
            <div className="relative shrink-0">
                <img
                    src={user.profilePicture || "https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp"}
                    alt={user.username}
                    className="w-12 h-12 rounded-full object-cover shadow-lg border border-white/10"
                />
            </div>
            <div className="ml-4 truncate">
                <p className="text-[15px] font-semibold tracking-tight text-white truncate transition-colors group-hover:text-[#9333EA]">{user.username}</p>
                {actAs == "tile" && <p className="text-sm text-gray-500 mt-0.5 truncate group-hover:text-gray-400 transition-colors">Tap to view chat</p>}
            </div>
        </button>
    )
}

export default ChatUserTile