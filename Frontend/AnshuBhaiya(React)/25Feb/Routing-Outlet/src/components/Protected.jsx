import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const isAuthenticated = false;
  if(!isAuthenticated){
    return <Navigate to={"/login"} />
  }
  return <Outlet /> 
}

export default Protected