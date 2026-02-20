import React, { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [loading, setloading] = useState(false);

  const fetchData = async () => {
    setloading(true);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setloading(false);
    setPost(data);
    console.log(data);
  };
  // console.log(fetchData)
  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }

  return (
    <div>
      <p>{id}</p>
      <div>
        <button
          onClick={() => {
            setId(id - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setId(id + 1);
          }}
        >
          Next
        </button>
      </div>

      {
        post && post.title!=null ?  (
             <div>
                 <p className="font-bold">{post.title}</p>
                 <p>{post.body}</p>
             </div>
         ): <div>
            Post not found 
         </div>
       }
    </div>
  );
}

export default App;
