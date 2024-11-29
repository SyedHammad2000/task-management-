import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated == true) {
    return <Navigate to="" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
