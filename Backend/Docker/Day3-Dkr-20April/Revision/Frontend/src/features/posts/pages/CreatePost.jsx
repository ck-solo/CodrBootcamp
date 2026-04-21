import React, { useState } from 'react';
import { usePost } from '../hooks/usePost';
import { useNavigate } from 'react-router';

const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [caption, setCaption] = useState('');
  const { handleCreatePost } = usePost();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles(selectedFiles);

    const previewArray = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setPreviews(previewArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await handleCreatePost({ media:files, caption });

    if (data.success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05050A] text-white relative overflow-hidden font-sans py-12 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-xl w-full space-y-8 bg-[#0B0B14]/80 backdrop-blur-xl p-8 sm:p-10 rounded-[1.5rem] border border-white/5 z-10 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Create a New Post
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-400">
            Share photos/videos and add a caption to post on your feed.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Upload Area */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Upload Media
            </label>

            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#151520] border-dashed rounded-[1.25rem] hover:border-purple-500/50 transition-colors bg-[#151520]/50 relative group">
              <div className="space-y-1 text-center w-full">

                {previews.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {previews.map((item, index) => (
                      <div key={index} className="relative">

                        {item.type.startsWith("image") ? (
                          <img
                            src={item.url}
                            alt="preview"
                            className="max-h-40 w-full object-cover rounded-lg"
                          />
                        ) : (
                          <video
                            src={item.url}
                            className="max-h-40 w-full object-cover rounded-lg"
                            controls
                          />
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            const newFiles = files.filter((_, i) => i !== index);
                            const newPreviews = previews.filter((_, i) => i !== index);
                            setFiles(newFiles);
                            setPreviews(newPreviews);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          ✕
                        </button>

                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-4">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 group-hover:text-purple-400 transition-colors"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="flex text-sm text-gray-400 justify-center mt-4">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-[#9333EA] hover:text-[#A855F7]"
                      >
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      Images & Videos supported
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Write a caption
            </label>
            <textarea
              rows={4}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-[#151520] rounded-[1.25rem] text-white"
              placeholder="What's on your mind?"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={files.length === 0}
            className="w-full py-3 bg-[#9333EA] rounded-[1.25rem] disabled:opacity-50"
          >
            Post to Feed
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;