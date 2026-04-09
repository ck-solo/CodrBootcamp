import axios from "axios";

export async function getStories() {
    const response = await axios.get("http://localhost:3000/api/stories", {
        withCredentials: true,
    });
    return response.data;
}

export async function createStory(mediaFile) {
    const formData = new FormData();
    formData.append("media", mediaFile);
    
    const response = await axios.post("http://localhost:3000/api/stories", formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}
