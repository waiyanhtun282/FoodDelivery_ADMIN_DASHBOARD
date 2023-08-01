import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = "1";
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <div className="">{children}</div>;
};

export default ProtectedRoute;
