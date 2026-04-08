import React from 'react';
import { useUser } from '../hooks/useUser';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Notification = () => {

  const { handleGetFollowRequests } = useUser();
  const followRequests = useSelector(state => state.user.followRequests);

  useEffect(() => {
    handleGetFollowRequests();
  }, []);

  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>

        {/* ✅ CONDITION CHECK */}
        {followRequests && followRequests.length > 0 ? (

          <div className="flex flex-col gap-4">
            {followRequests.map((request) => (
              
              <div
                key={request._id}
                className="flex items-center justify-between p-4 bg-[#0B0B14] rounded-xl"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">
                  <img
                    src={request.follower.profilePicture}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold">
                      {request.follower.username}
                    </p>
                    <p className="text-sm text-gray-400">
                      requested to follow you
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-500 rounded-md">
                    Confirm
                  </button>
                  <button className="px-3 py-1 bg-red-500 rounded-md">
                    Delete
                  </button>
                </div>
              </div>

            ))}
          </div>

        ) : (

          // ✅ fallback UI
          <div className="text-center text-gray-400">
            No follow requests
          </div>

        )}  

      </div>
    </div>
  );
};

export default Notification;