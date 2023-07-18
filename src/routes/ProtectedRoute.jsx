import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
/* import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth () {
    return useContext( AuthContext);
} */