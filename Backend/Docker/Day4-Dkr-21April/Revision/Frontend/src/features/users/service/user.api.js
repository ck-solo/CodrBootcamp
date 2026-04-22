import axios from "axios";

export async function searchUser({ query }) {
  const response = await axios.get(
    "/api/users/search?q=" + query,
    {
      withCredentials: true,
    },
  );
  return response.data;
}

export async function followUser(userId) {
  console.log(userId);
  const response = await axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      withCredentials: true,
    },
  );
  return response.data;
}

export async function getFollowRequests() {
  const response = await axios.get(
    "/api/users/follow-requests",
    {
      withCredentials: true,
    },
  );
  return response.data;
}

export async function acceptFollowRequest({ requestId }) {
  const response = await axios.patch(
    "/api/users/follow-requests/" + requestId,
    {},
    {
      withCredentials: true,
    },
  );

  return response.data;
}



export async function getprofileData(){
    const response = await axios.get("/api/users/profile",{
        withCredentials:true
    })

    return response.data
}

export async function updateProfile(formData) {
  const response = await axios.patch(
    "/api/users/profile",
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
}
