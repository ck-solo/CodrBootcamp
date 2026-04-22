import React from "react";
import { useSelector } from "react-redux";

const LoggedInUserTile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-50 transition-all duration-200 group">
      <img
        src={user.profilePicture}
        alt={user.username}
        className="w-7 h-7 rounded-full"
      />
      <span className="hidden md:block text-base text-purple-900 tracking-wide">
        {user.username}
      </span>
    </div>
  );
};

export default LoggedInUserTile;
