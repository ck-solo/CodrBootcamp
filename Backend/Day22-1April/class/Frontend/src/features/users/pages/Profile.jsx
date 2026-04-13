import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUser } from "../hooks/useUser";
import { X } from "lucide-react";

const Profile = () => {
  const { handleGetProfileData } = useUser();
  const user = useSelector((store) => store.auth.user);
  const profile = useSelector((store) => store.user.profile);
  
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'followers' or 'following'

  useEffect(() => {
    handleGetProfileData();
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getModalList = () => {
    if (modalType === "followers") return profile?.followers || [];
    if (modalType === "following") return profile?.following || [];
    return [];
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="bg-[#0B0B14]/80 backdrop-blur-xl p-8 sm:p-10 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-r from-purple-900/40 to-blue-900/40"></div>

          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 mt-12">
            <div className="w-32 h-32 rounded-full border-4 border-[#0B0B14] bg-[#151520] flex items-center justify-center shrink-0 z-10 shadow-xl overflow-hidden">
                <img
                  src={user?.profilePicture || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
                  alt={user?.username}
                  className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {user?.fullname || user?.username}
              </h2>
              <p className="text-[#9333EA] font-medium mt-1">
                {user?.username}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-6 mt-4 text-sm text-gray-400">
                <div className="flex flex-col sm:flex-row sm:gap-1 items-center">
                  <strong className="text-white">
                    {profile?.postsCount || 0}
                  </strong>{" "}
                  <span>Posts</span>
                </div>
                <div 
                  className="flex flex-col sm:flex-row sm:gap-1 items-center cursor-pointer hover:text-white transition-colors"
                  onClick={() => openModal("followers")}
                >
                  <strong className="text-white">
                    {profile?.followerCount || 0}
                  </strong>{" "}
                  <span>Followers</span>
                </div>
                <div 
                  className="flex flex-col sm:flex-row sm:gap-1 items-center cursor-pointer hover:text-white transition-colors"
                  onClick={() => openModal("following")}
                >
                  <strong className="text-white">
                    {profile?.followingCount || 0}
                  </strong>{" "}
                  <span>Following</span>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <button className="px-6 py-2.5 rounded-[1.25rem] bg-[#151520] hover:bg-[#1A1A28] border border-white/10 transition-all text-sm font-medium text-white">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="border-t border-white/10 pt-8">
            {profile?.posts?.length > 0 ? (
              <div className="grid grid-cols-3 gap-[4px]">
                {profile.posts.map((post) => {
                  const media = post.media?.[0];
                  const isVideo = media?.url?.match(/\.(mp4|webm|ogg)$/i);

                  return (
                    <div
                      key={post._id}
                      className="relative w-full aspect-square group cursor-pointer overflow-hidden bg-black"
                    >
                      {/* Media */}
                      {isVideo ? (
                        <video
                          src={media.url}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={media?.url}
                          alt="post"
                          className="w-full h-full object-cover"
                        />
                      )}

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <div className="flex gap-4 text-white text-sm font-semibold">
                          <span>❤️ {post.likes?.length || 0}</span>
                          <span>💬 {post.comments?.length || 0}</span>
                        </div>
                      </div>

                      {/* Video icon */}
                      {isVideo && (
                        <div className="absolute top-2 right-2 text-white text-xs">
                          🎥
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                 <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 </div>
                 <p className="text-center text-gray-400 font-medium">No posts shared yet</p>
              </div>
            )}
        </div>
      </div>

      {/* Followers/Following Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B14] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-bold capitalize">{modalType}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getModalList().length > 0 ? (
                getModalList().map((item) => {
                  const userItem = modalType === "followers" ? item.follower : item.followee;
                  return (
                    <div key={userItem?._id} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-zinc-800">
                          <img 
                            src={userItem?.profilePicture || `https://api.dicebear.com/7.x/initials/svg?seed=${userItem?.username}`} 
                            alt={userItem?.username} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-[15px]">{userItem?.username}</span>
                          <span className="text-[13px] text-gray-500">{userItem?.fullname}</span>
                        </div>
                      </div>
                      <button className="px-4 py-1.5 rounded-lg bg-[#151520] hover:bg-[#1A1A28] border border-white/10 text-xs font-semibold">
                        View
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 text-gray-500">
                  No {modalType} found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
