import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user ? user.name : 'Admin'}!</p>
      {/* Here you can add links to manage users, courses, etc. */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
