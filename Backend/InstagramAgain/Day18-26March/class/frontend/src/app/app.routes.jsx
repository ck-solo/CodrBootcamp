import { createBrowserRouter } from "react-router";
import Register from "../features/auth/pages/Register";
import Home from "../features/posts/pages/Home";
import Profile from "../features/posts/pages/Profile";
import Login from "../features/auth/pages/Login";

export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path:"/profile",
        element:<Profile />
    }
])