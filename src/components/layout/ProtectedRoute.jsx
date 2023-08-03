import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <div className="">{children}</div>;
};

export default ProtectedRoute;
