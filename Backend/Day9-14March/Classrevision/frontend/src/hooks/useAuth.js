import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { registerUser } from "../service/auth.api";

export const useAuth = () => {
    const {user, setUser, loading , setLoading} =  useContext(AuthContext);

    async function handleRegister(email , password, userType){
        const data = await registerUser({email, password, userType})
        setUser(data.user)
        
    }

    return {
        user,
        loading,
        handleRegister
    }
};
