import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-8">Home Feed</h1>
        
        {/* Placeholder for Home content */}
        <div className="bg-[#0B0B14]/80 backdrop-blur-xl p-8 rounded-[1.5rem] border border-white/5 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
             <svg className="w-8 h-8 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </div>
          <p className="text-gray-400 text-lg">Your feed is empty.</p>
          <p className="text-gray-500 text-sm mt-2">Follow users to see their posts here!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;