import axios from "axios";

export async function registerUser([email, password, userType]){
    const response = await axios.post("http://localhost/api/auth/register",{
            email,
            password,
            userType
    },{withCredentials:true})
    return response.data
}

export async function login(email,password){
    const response = await axios.post("http://localhost/api/auth/login",{
        email,
        password,
    },{withCredentials:true})
    return response.data
}

export async function getMeUser(){
    const response = await axios.get("http://localhost/api/auth/getme",{withCredentials:true})
    return response.data
    
}