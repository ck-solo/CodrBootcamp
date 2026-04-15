import React from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";

const ChatUserTile = ({ user }) => {
  const { handleSetCurrentChatId } = useChat();
  const currentChatId = useSelector((store) => store.chat.currentChatId);

  const isActive = currentChatId === user._id;

  return (
    <button
      onClick={() => handleSetCurrentChatId(user._id)}
      className={`flex items-center w-full p-3 rounded-xl transition-all text-left group ${
        isActive
          ? "bg-[#9333EA]/20"
          : "hover:bg-[#1A1A28]"
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <img
          src={
            user.profilePicture ||
            "https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp"
          }
          alt={user.username}
          className="w-11 h-11 rounded-full object-cover border border-white/10"
        />

        {/* Online dot */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black"></span>
      </div>

      {/* Info */}
      <div className="ml-3 truncate">
        <p className="text-[14.5px] font-medium text-white truncate group-hover:text-[#9333EA]">
          {user.username}
        </p>
        <p className="text-xs text-gray-400 truncate">
          Tap to view chat
        </p>
      </div>
    </button>
  );
};

export default ChatUserTile;