//private route
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateElement = ({ children }) => {
  return localStorage.getItem("user") ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateElement;
