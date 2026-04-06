import axios from "axios";

export async function getPosts() {
  const response = await axios.get("http://localhost:3000/api/posts/get", {
    withCredentials: true,
  });
  return response.data;
}

export async function createPost({ media, caption }) {
  const formData = new FormData();
  formData.append("caption", caption);
  media.forEach((file) => {
    formData.append("media", file);
  });
  const response = await axios.post(
    "http://localhost:3000/api/posts",
    formData,
    {
      withCredentials: true,
    },
  );
  return response.data;
}
