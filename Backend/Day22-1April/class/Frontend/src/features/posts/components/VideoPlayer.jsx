import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="bg-[#0B0B14] rounded-xl overflow-hidden border border-white/5 relative group">
       <div className="w-full aspect-video bg-[#05050A] flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
       </div>
       
       {/* Pseudo Controls */}
       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-full h-1 bg-white/20 rounded-full mb-3">
             <div className="w-1/3 h-full bg-[#9333EA] rounded-full"></div>
          </div>
          <div className="flex items-center justify-between text-white">
             <button className="hover:text-[#9333EA] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </button>
             <span className="text-xs">0:00 / 3:14</span>
          </div>
       </div>
    </div>
  );
}

export default VideoPlayer;