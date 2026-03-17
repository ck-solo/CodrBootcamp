import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"home",
    element:<Home />

  },
  {
    path:"signUp",
    element:<SignUp />
  },
  {
    path:"login",
    element:<Login />
  },
  {
    path:"dashboard",
    element:<Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
