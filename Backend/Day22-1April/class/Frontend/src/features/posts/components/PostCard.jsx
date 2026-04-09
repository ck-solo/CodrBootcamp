import { useState, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePost } from "../hooks/usePost";
import { useSelector } from "react-redux";

// Helper function to format Instagram-like time
const formatTimeAgo = (dateString) => {
    if (!dateString) return '';
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
    const [ activeSlide, setActiveSlide ] = useState(0);
    const [ commentText, setCommentText ] = useState("");
    const [ showComments, setShowComments ] = useState(false);
    const [ showHeartAnim, setShowHeartAnim ] = useState(false);
    const scrollRef = useRef(null);
    const { handleLikePost, handleAddComment, handleDeleteComment } = usePost();
    const user = useSelector(state => state.auth.user);

    const isLiked = post.likes?.includes(user?.id);

    const handleScroll = (e) => {
        if (!scrollRef.current) return;
        const scrollPosition = e.target.scrollLeft;
        const slideWidth = e.target.offsetWidth;
        const currentIndex = Math.round(scrollPosition / slideWidth);
        if (currentIndex !== activeSlide) {
            setActiveSlide(currentIndex);
        }
    };

    const onLike = async () => {
        await handleLikePost(post._id);
    };

    const onDoubleClick = async () => {
        if (!isLiked) {
            await handleLikePost(post._id);
        }
        setShowHeartAnim(true);
        setTimeout(() => setShowHeartAnim(false), 1000);
    };

    const onComment = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        await handleAddComment(post._id, commentText);
        setCommentText("");
    };

    const onDeleteComment = async (commentId) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            await handleDeleteComment(post._id, commentId);
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
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-[2px] overflow-hidden group-hover:scale-105 transition-transform">
                        <div className="bg-[#0B0B14] w-full h-full rounded-full p-[1px] flex items-center justify-center">
                            <img
                                src={post.author.profilePicture || `https://api.dicebear.com/7.x/initials/svg?seed=${post.author.username}`}
                                alt={post.author.username}
                                className="w-full h-full rounded-full object-cover bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-100 font-semibold text-[14px] leading-tight hover:text-white transition-colors">
                            {post.author.username}
                        </span>
                        <span className="text-gray-500 text-[11px] font-normal leading-tight">
                            {formatTimeAgo(post.createdAt)}
                        </span>
                    </div>
                </div>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                >
                    < MoreHorizontal strokeWidth={2} size={20} />
                </motion.button>
            </div>

            {/* Media Carousel */}
            <div 
                onDoubleClick={onDoubleClick}
                className="w-full relative bg-black flex items-center justify-center cursor-pointer select-none"
            >
                {/* Double-click Heart Animation */}
                <AnimatePresence>
                    {showHeartAnim && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            className="absolute z-20 text-white drop-shadow-2xl"
                        >
                            <Heart size={100} fill="currentColor" className="text-rose-500" />
                        </motion.div>
                    )}
                </AnimatePresence>

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
                            onClick={onLike}
                            className={`${isLiked ? 'text-rose-500' : 'text-gray-100'} hover:text-rose-500 transition-colors relative z-10`}
                        >
                            <Heart strokeWidth={2} size={25} fill={isLiked ? "currentColor" : "none"} />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setShowComments(!showComments)}
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

                {/* Likes count */}
                <div className="text-[14px] font-semibold text-gray-100 mb-1">
                    {post.likes?.length ? `${post.likes.length.toLocaleString()} likes` : 'Be the first to like this'}
                </div>

                {/* Caption */}
                <div className="text-[14px] leading-relaxed text-gray-200">
                    <span className="font-semibold text-gray-100 mr-2 cursor-pointer hover:underline">{post.author.username}</span>
                    <span className="opacity-95">{post.caption}</span>
                </div>
                
                {/* View comments toggle */}
                {post.comments?.length > 0 && (
                    <div 
                        onClick={() => setShowComments(!showComments)}
                        className="text-gray-500 text-[14px] mt-1 cursor-pointer hover:text-gray-300 transition-colors"
                    >
                        {showComments ? 'Hide comments' : `View all ${post.comments.length} comments`}
                    </div>
                )}

                {/* Comments List */}
                <AnimatePresence>
                    {showComments && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 space-y-3 overflow-hidden"
                        >
                            {post.comments.map((comment, idx) => (
                                <div key={comment._id || idx} className="text-[13px] flex items-start justify-between group/comment">
                                    <div className="flex items-start space-x-2">
                                        <span className="font-semibold text-gray-100">{comment.user?.username || 'user'}</span>
                                        <span className="text-gray-300">{comment.text}</span>
                                    </div>
                                    {(comment.user?._id === user?.id || post.author?._id === user?.id) && (
                                        <button 
                                            onClick={() => onDeleteComment(comment._id)}
                                            className="text-gray-600 hover:text-rose-500 opacity-0 group-hover/comment:opacity-100 transition-opacity"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Add Comment Input */}
                <form onSubmit={onComment} className="mt-3 pt-3 border-t border-white/5 flex items-center">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="bg-transparent border-none outline-none text-[14px] text-gray-200 w-full placeholder:text-gray-600 focus:ring-0"
                    />
                    <button 
                        type="submit"
                        disabled={!commentText.trim()}
                        className={`text-purple-500 font-semibold text-[14px] transition-opacity ml-2 ${!commentText.trim() ? 'opacity-0' : 'opacity-100'}`}
                    >
                        Post
                    </button>
                </form>
            </div>
        </motion.article>
    );
};

export default PostCard;
