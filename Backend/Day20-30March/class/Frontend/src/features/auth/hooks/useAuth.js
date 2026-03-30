import { useDispatch } from "react-redux"
import { setUser } from "../auth.slice"
import Login from "../pages/Login"

export const useAuth = () =>{
    const dispatch = useDispatch()

    async function handleRegister({
        username,
        email,
        fullname,
        password
    }) {
        const data = await register({
            username,
            email,
            fullname,
            password
        })

        dispatch(setUser(data.user))
        
    }

    async function handleLogin({usernameOrEmail, password}) {
        const data = await Login({ usernameOrEmail, password })
    dispatch(setUser(data.user))

    return data
    }

    return {
        handleRegister,
        handleLogin

    }
}