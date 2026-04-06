import { useState, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

// Helper function to format Instagram-like time (e.g., "2h", "5d", "3w")
const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + 'y';
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + 'mo';
    interval = seconds / 604800;
    if (interval > 1) return Math.floor(interval) + 'w';
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + 'd';
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + 'h';
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + 'm';
    return Math.floor(seconds) + 's';
};

const PostCard = ({ post }) => {
    // Simple state to track active carousel slide for indicators
    const [ activeSlide, setActiveSlide ] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        if (!scrollRef.current) return;
        const scrollPosition = e.target.scrollLeft;
        const slideWidth = e.target.offsetWidth;
        // Calculate the closest visible slide based on scroll width vs total width
        const currentIndex = Math.round(scrollPosition / slideWidth);
        if (currentIndex !== activeSlide) {
            setActiveSlide(currentIndex);
        }
    };

    return (
        <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0B0B14] border border-white/10 rounded-2xl sm:rounded-xl shadow-lg mb-6 overflow-hidden w-full transition-shadow duration-300 relative"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4">
                <div className="flex items-center space-x-3 cursor-pointer group">
                    {/* Instagram-style Story/Avatar Ring */}
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-[2px] overflow-hidden group-hover:scale-105 transition-transform">
                        <div className="bg-[#0B0B14] w-full h-full rounded-full p-[1px] flex items-center justify-center">
                            <img
                                src={post.author.profilePicture || `https://api.dicebear.com/7.x/initials/svg?seed=${post.author.username}`}
                                alt={post.author.username}
                                className="w-full h-full rounded-full object-cover bg-zinc-800"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src=`https://api.dicebear.com/7.x/initials/svg?seed=${post.author.username}`;
                                }}
                            />
                        </div>
                    </div>
                    {/* Username and Time */}
                    <div className="flex items-center text-[14px]">
                        <span className="text-gray-100 font-semibold leading-tight tracking-tight hover:text-white transition-colors">
                            {post.author.username}
                        </span>
                        {/* <span className="mx-1.5 text-gray-500 text-xs">Hello world</span>
                        <span className="text-gray-400 text-[13px] font-normal tracking-wide">
                            {formatTimeAgo(post.createdAt)}
                        </span> */}
                    </div>
                </div>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                >
                    <MoreHorizontal strokeWidth={2} size={20} />
                </motion.button>
            </div>

            {/* Media Carousel */}
            <div className="w-full relative bg-black flex items-center justify-center">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto w-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
                >
                    {post.media.map((item, index) => (
                        <div key={item._id} className="w-full h-full flex-none snap-center relative break-inside-avoid">
                            {item.media_type === 'video' ? (
                                <VideoPlayer url={item.url} />
                            ) : (
                                <img
                                    src={item.url}
                                    alt={`Post Content ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Bar */}
            <div className="px-4 py-3 pb-2">
                <div className="flex justify-between items-center mb-3 relative">
                    <div className="flex items-center space-x-4">
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="text-gray-100 hover:text-rose-500 transition-colors relative z-10"
                        >
                            <Heart strokeWidth={2} size={25} />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="text-gray-100 hover:text-purple-400 transition-colors relative z-10"
                        >
                            <MessageCircle strokeWidth={2} size={25} />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="text-gray-100 hover:text-blue-400 transition-colors relative z-10"
                        >
                            <Send strokeWidth={2} size={25} />
                        </motion.button>
                    </div>

                    {/* Carousel dots in the center of the action bar */}
                    {post.media.length > 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 flex space-x-1">
                            {post.media.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-4 bg-purple-500' : 'w-1.5 bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    )}

                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="text-gray-100 hover:text-white transition-colors relative z-10"
                    >
                        <Bookmark strokeWidth={2} size={25} />
                    </motion.button>
                </div>

                {/* Likes count (Mocked or pulled from data) */}
                <div className="text-[14px] font-semibold text-gray-100 mb-1">
                    {post.likes?.length ? `${post.likes.length.toLocaleString()} likes` : 'Be the first to like this'}
                </div>

                {/* Caption */}
                <div className="text-[14px] leading-relaxed text-gray-200">
                    <span className="font-semibold text-gray-100 mr-2 cursor-pointer hover:underline">{post.author.username}</span>
                    <span className="opacity-95">{post.caption}</span>
                </div>
                
                {/* View comments placeholder */}
                {post.comments?.length > 0 && (
                    <div className="text-gray-500 text-[14px] mt-1 cursor-pointer hover:text-gray-300 transition-colors">
                        View all {post.comments.length} comments
                    </div>
                )}
            </div>
        </motion.article>
    );
};

export default PostCard;