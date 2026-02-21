import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [edited, setEdited] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    const res = await fetch(url);
    const data = await res.json();
    console.log;
    setLoading(false);
    setPosts(data.slice(0, 5));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-20 border h-20 flex items-center rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  const changeHandler = async (e) => {
    e.preventDefault();

    if (edited) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${edited}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
        },
      );

      const updatePost = await res.json();
      setPosts(
        posts.map((post) =>
          post.id === edited ? { ...post, ...updatePost } : post,
        ),
      );

      setEdited(null);
    } else {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      });
      const newPost = await res.json();
      setPosts([{ ...newPost, id: Date.now() }, ...posts]);
    }

    setTitle("");
    setBody("");
    setLoading(false);
  };

  const removeHandler = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  const updateHandler = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEdited(post.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      {/* Form Card */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-center">React CRUD App</h1>

        <form className="flex flex-col gap-4" onSubmit={changeHandler}>
          <input
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter your title"
          />

          <textarea
            className="border rounded-lg p-3 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Enter your body"
          />

          <button
            disabled={loading}
            className="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 transition disabled:opacity-50"
            type="submit"
          >
            {loading
              ? edited
                ? "Updating..."
                : "Adding..."
              : edited
                ? "Update Post"
                : "Add Post"}
          </button>
        </form>
      </div>

      {/* Posts Section */}
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => removeHandler(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>

              <button
                onClick={() => updateHandler(post)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
