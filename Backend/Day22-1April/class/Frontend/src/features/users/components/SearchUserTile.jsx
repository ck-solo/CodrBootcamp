import React from "react";
import { useUser } from "../hooks/useUser";
import { useSelector } from "react-redux";

const SearchUserTile = ({user} ) => {
  const { handleFollower } = useUser();
  const requested = useSelector(state => state.user.requested);
 const {user:{username:LoggedInUser}} = useSelector(state=>state.auth) 

  const handleClick = async (userId) => {
      console.log(userId)
      await handleFollower( userId );
};

  return (
    <div
      key={user._id}
      className="flex items-center justify-between p-3 rounded-xl hover:bg-[#1A1A28] transition-colors cursor-pointer border border-transparent hover:border-white/5"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#151520] border-[1.5px] border-white/10 shrink-0 shadow-sm shadow-purple-900/10">
          <img
            src={
              user.profilePicture ||
              `https://ui-avatars.com/api/?name=${user.username || "User"}&background=151520&color=9ca3af`
            }
            alt={user.username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[15px] text-white leading-tight hover:underline">
            {user.username}
          </span>
          {user.fullname && (
            <span className="text-[13px] text-gray-400 mt-0.5">
              {user.fullname}
            </span>
          )}
        </div>
      </div>

      {LoggedInUser !== user.username && <button
        onClick={() => {
          handleClick(user._id);
        }}
        className={
          requested?.includes(user._id)
            ? "bg-[#151520] border border-white/10 hover:bg-[#1A1A28] text-white px-5 py-1.5 cursor-pointer rounded-lg text-[14px] font-medium transition-colors"
            : "bg-[#9333EA] hover:bg-[#A855F7] text-white px-5 py-1.5 cursor-pointer rounded-lg text-[14px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] active:scale-95"
        }
      >
        {requested?.includes(user._id) ? "Requested" : "Follow"}
      </button>}
    </div>
  );
};

export default SearchUserTile;
