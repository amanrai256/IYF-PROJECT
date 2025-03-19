import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  // Check if the user's role is allowed
  if (!allowedRoles.includes(user.role)) {
    // If not authorized, redirect or show an error page
    return <Navigate to="*" replace />;
  }

  // If everything is fine, render children
  return children;
}
