import React from 'react';

const Search = () => {


  return (
    <div className="min-h-screen bg-[#05050A] text-white pt-10 pb-20 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-8">Search</h1>
        
        {/* Search Input */}
        <div className="relative">
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>
           <input 
              type="text" 
              className="block w-full pl-12 pr-4 py-4 bg-[#0B0B14] border border-white/5 rounded-[1.25rem] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#9333EA] focus:border-[#9333EA] shadow-xl transition-all"
              placeholder="Search users, hashtags, or posts..."
           />
        </div>

        {/* Search Results Area */}
        <div className="border-t border-white/5 pt-8">
           <p className="text-gray-500 text-center">Search for your favorite creators and content.</p>
        </div>
      </div>
    </div>
  );
}

export default Search;