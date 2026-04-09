import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { getStories, createStory } from "../service/story.api";

const StorySection = ({ currentUser }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const fetchStories = async () => {
    try {
      const data = await getStories();
      setStories(data.stories);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleAddStoryClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      await createStory(file);
      await fetchStories();
    } catch (error) {
      console.error("Error creating story:", error);
      alert("Failed to upload story");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0B0B14] border border-white/10 rounded-2xl p-4 mb-8 overflow-hidden">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,video/*"
      />

      <div className="flex space-x-4 overflow-x-auto pb-1 scrollbar-none snap-x pointer-events-auto">
        {/* Current User Story (Add Story) */}
        <div
          onClick={handleAddStoryClick}
          className="flex flex-col items-center space-y-1 flex-shrink-0 cursor-pointer group snap-start"
        >
          <div className="relative">
            <div
              className={`w-16 h-16 rounded-full p-[2px] bg-zinc-800 border-2 border-dashed border-zinc-600 group-hover:border-purple-500 transition-colors ${loading ? "animate-pulse" : ""}`}
            >
              <img
                src={
                  currentUser?.profilePicture ||
                  `https://api.dicebear.com/7.x/initials/svg?seed=${currentUser?.username}`
                }
                alt="Your story"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-[#0B0B14]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <span className="text-xs text-gray-400 font-medium">
            {loading ? "Uploading..." : "Your Story"}
          </span>
        </div>

        {/* Real Stories from Backend */}
        {stories.map((story) => (
          <motion.div
            key={story._id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-1 flex-shrink-0 cursor-pointer snap-start"
            onClick={() => {
              // Logic to view story could go here
              window.open(story.media.url, "_blank");
            }}
          >
            <div className="w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600">
              <div className="w-full h-full rounded-full p-[2px] bg-[#0B0B14]">
                <img
                  src={
                    story.user?.profilePicture ||
                    `https://api.dicebear.com/7.x/initials/svg?seed=${story.user?.username}`
                  }
                  alt={story.user?.username}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-gray-400 font-medium max-w-[64px] truncate">
              {story.user?.username}
            </span>
          </motion.div>
        ))}

        {/* Placeholder if no other stories */}
        {stories.length === 0 && (
          <div className="flex items-center space-x-4 opacity-30">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-1 flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800" />
                <div className="w-8 h-2 bg-zinc-800 rounded" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inline CSS to hide scrollbar (Remove slider feel) */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default StorySection;
