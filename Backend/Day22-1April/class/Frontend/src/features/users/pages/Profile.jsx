import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector((store)=> store.auth.user)


  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-[#0B0B14]/80 backdrop-blur-xl p-8 sm:p-10 rounded-[1.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-900/40 to-blue-900/40"></div>
          
          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 mt-12">
            <div className="w-32 h-32 rounded-full border-4 border-[#0B0B14] bg-[#151520] flex items-center justify-center flex-shrink-0 z-10 shadow-xl overflow-hidden">
                <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight">{user?.fullname}</h2>
              <p className="text-[#9333EA] font-medium mt-1">{user?.username}</p>
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 text-sm text-gray-400">
                <span><strong className="text-white">0</strong> Posts</span>
                <span><strong className="text-white">0</strong> Followers</span>
                <span><strong className="text-white">0</strong> Following</span>
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
           <p className="text-center text-gray-500">No posts yet.</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;