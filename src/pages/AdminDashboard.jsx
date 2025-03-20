import React from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import { useAuth } from '../context/AuthContext';


export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Controls whether the drawer is open
  const [open, setOpen] = React.useState(false);

  // Toggle drawer open/close
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // For clicking on nav items
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* TOP NAVBAR */}
      <AdminNavbar
        open={open}
        onDrawerOpen={handleDrawerOpen}
        user={user}
        logout={logout}
      />
      
      {/* SIDEBAR / DRAWER */}
      <AdminSidebar
        open={open}
        onDrawerClose={handleDrawerClose}
        onNavClick={handleNavClick}
      />

      {/* MAIN CONTENT AREA */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* We offset content by the height of the Navbar Toolbar */}
        <Toolbar />

        <Typography variant="h5" gutterBottom>
          Welcome to the Admin Dashboard
        </Typography>
        <Typography>
          {/* Place your admin content, routing, or child components here */}
          Manage users, courses, events, attendance, and reports here.
        </Typography>
      </Box>
    </Box>
  );
}
