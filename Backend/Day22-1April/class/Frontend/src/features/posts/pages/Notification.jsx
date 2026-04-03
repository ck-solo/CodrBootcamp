import React from 'react';

const Notification = () => {
  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-8">Notifications</h1>
        
        <div className="bg-[#0B0B14]/80 backdrop-blur-xl p-8 rounded-[1.5rem] border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#151520] flex items-center justify-center mb-4">
               <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <p className="text-lg text-gray-300 font-medium">No Notifications Yet</p>
            <p className="text-gray-500 mt-2">When someone likes or comments on your posts, it'll show up here.</p>
        </div>
      </div>
    </div>
  );
}

export default Notification;