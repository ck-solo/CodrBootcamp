import React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

function Protected() {
  const { user } = useOutletContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default Protected;