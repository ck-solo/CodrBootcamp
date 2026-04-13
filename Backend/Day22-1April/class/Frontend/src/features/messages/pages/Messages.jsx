import { useEffect } from "react";
import { useChat } from "../hooks/usechat";
import { useSelector } from "react-redux";

const Messages = () => {
  const chats = useSelector((store) => store.chat.chats);

  const { handleGetChats } = useChat();

  useEffect(() => {
    handleGetChats();
  }, []);

  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto h-[80vh] bg-[#0B0B14]/80 backdrop-blur-xl rounded-[1.5rem] border border-white/5 shadow-2xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-1/3 border-r border-white/5 flex-col">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <div>
            {chats &&
              Object.keys(chats).map((key) => {
                const chat = chats[key];

                return (
                  <div
                    key={key}
                    onClick={() => navigate("/messages/" + chat.username)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer"
                  >
                    <img
                      src={chat.profilePicture}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{chat.username}</p>
                    </div>
                  </div>
                );
              })}

          <div className="flex-1 flex items-center justify-center p-6 text-gray-500 text-sm">
            No recent conversations
          </div>
        </div>
        </div>
        {/* Chat Area */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8 text-center bg-[#05050A]/50">
          <div className="w-20 h-20 rounded-full border-2 border-white/10 border-dashed flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
          <p className="text-gray-400 mb-6">
            Send private photos and messages to a friend or group.
          </p>
          <button className="px-6 py-2.5 bg-[#9333EA] hover:bg-[#A855F7] text-white font-medium rounded-[1.25rem] transition-all shadow-lg shadow-purple-500/20">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
