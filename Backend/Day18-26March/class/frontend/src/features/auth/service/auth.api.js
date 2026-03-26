import axios from "axios"

export default async function register({
    username, email, fullname, password
}) {
    const response = await axios.post("https://localhost:3000/api/auth/register",{
        username,
        email,
        password,
        fullname
    },{withCredentials : true})

    return response.data
}