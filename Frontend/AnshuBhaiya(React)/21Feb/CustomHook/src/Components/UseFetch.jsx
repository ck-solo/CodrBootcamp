import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      setLoader(true);
      const res = await fetch(url);
      const result = await res.json();

      setLoader(false);
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message || "Something is error");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [url]);

  const addData = async (newPost) => {
    try {
      setLoader(true)

      const res = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(newPost),
      });

      const result = await res.json()

      setData(prev =>[
        {...result, id: Date.now()}, ...prev,
      ]);


    } catch (error) {
      setError(error.message || "Add failed");
    } finally {
      setLoader(false);
    }
  };

  const deleteData = async (id) => {
    try {
      setLoader(true);
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      setData((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message || "Delete failed");
    } finally {
      setLoader(false);
    }
  };

  const updateData = async (id, updatePost) => {
    try {
      setLoader(true);
      const res = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePost),
      });

      const result = await res.json();
      setData((prev) =>
        prev.map((post) => (post.id === id ? { ...post, ...result } : post)),
      );
    } catch (error) {
      setError(error.message || "Update failed");
    } finally {
      setLoader(false);
    }
  };
  

  return { data, loader, error, setData, updateData, deleteData, addData };
};
