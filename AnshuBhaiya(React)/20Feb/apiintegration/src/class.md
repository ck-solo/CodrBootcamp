 import React, { useEffect, useState } from 'react'

function App() {
  const [post, setPost] = useState([])

  const fetchData = async () =>{
    const url =   `https://jsonplaceholder.typicode.com/posts`
    const res = await fetch(url)
    const data = await res.json()
    setPost(data)
  }

  // console.log(fetchData)
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      {
        post.map((data)=>{
          return (
            <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App


post find by api 

import React, { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState({});
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(url);
    const data = await res.json();
    setPost(data);
  };

  // console.log(fetchData)
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <p>{post[count]?.title}</p>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minu</button>
    </div>
  );
}

export default App;

