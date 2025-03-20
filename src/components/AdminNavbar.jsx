// src/pages/AdminDashboard/AdminNavbar.jsx
import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Avatar, 
  Tooltip, 
  TextField,
  Badge,
  Chip
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#ffffff',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}));

export default function AdminNavbar({ open, onDrawerOpen, user, onLogout }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Left Section - Brand & Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {!open && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onDrawerOpen}
            >
              <MenuIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              src="/logo.png" 
              variant="square"
              sx={{ 
                width: 40, 
                height: 40, 
                bgcolor: 'primary.main',
                borderRadius: '8px'
              }}
            />
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: 700,
                color: 'primary.main',
                letterSpacing: '-0.5px'
              }}
            >
              IYF Academy
            </Typography>
          </Box>

          {/* Quick Stats */}
          <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
            <Chip 
              label="1,245 Active Students"
              size="small"
              color="secondary"
              variant="outlined"
            />
            <Chip 
              label="15 Ongoing Courses"
              size="small"
              color="success"
              variant="outlined"
            />
          </Box>
        </Box>

        {/* Middle Section - Search */}
        <Box sx={{ 
          flexGrow: 1, 
          maxWidth: 500, 
          mx: 4,
          display: { xs: 'none', md: 'block' } 
        }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search students, courses, events..."
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            }}
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
        </Box>

        {/* Right Section - User & Notifications */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Notifications">
            <IconButton sx={{ color: 'text.primary' }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              src={user?.profilePhoto}
              alt={user?.name}
              sx={{ 
                width: 38, 
                height: 38, 
                bgcolor: 'primary.main',
                fontSize: '1rem'
              }}
            />
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body1" fontWeight="500">
                {user?.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Super Admin
              </Typography>
            </Box>
          </Box>

          <Tooltip title="Logout">
            <IconButton 
              onClick={onLogout}
              sx={{ 
                color: 'error.main',
                '&:hover': { backgroundColor: 'error.light' }
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>

      {/* Secondary Navigation */}
      {/* <Box sx={{ 
        bgcolor: 'background.paper',
        px: 3,
        py: 1,
        display: 'flex',
        gap: 3,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="subtitle2" color="text.secondary">
          Dashboard / <span style={{ color: 'primary.main' }}>Student Management</span>
        </Typography>
        <Chip 
          label="Today's Attendance: 92.4%"
          size="small"
          color="success"
          variant="outlined"
        />
        <Chip 
          label="Upcoming Event: Janmashtami Festival"
          size="small"
          color="info"
          variant="outlined"
        />
      </Box> */}
    </AppBar>
  );
}


// src/pages/AdminDashboard/AdminNavbar.jsx
// import React from 'react';
// import { styled } from '@mui/material/styles';
// import {
//   AppBar as MuiAppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Tooltip
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import LogoutIcon from '@mui/icons-material/Logout';

// // Example icons for the middle toolbar
// import LanguageIcon from '@mui/icons-material/Language';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';

// const drawerWidth = 240;

/** Styled MUI AppBar with custom background, boxShadow, etc. */
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   backgroundColor: '#fff',      // White background
//   color: theme.palette.text.primary,
//   boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// export default function AdminNavbar({ open, onDrawerOpen, user, onLogout }) {
//   return (
//     <AppBar position="fixed" open={open}>
//       <Toolbar sx={{ minHeight: 64, display: 'flex', alignItems: 'center' }}>
        
//         {/* HAMBURGER MENU (only if drawer is closed) */}
//         {!open && (
//           <IconButton
//             onClick={onDrawerOpen}
//             edge="start"
//             sx={{ color: 'inherit', mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
        
//         {/* BRAND / LOGO */}
//         <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//           {/* If you have a logo image, you could do:
//               <Box component="img" src="/logo.png" sx={{ width: 40, height: 40, mr: 1 }} />
//           */}
//           <Typography
//             variant="h6"
//             noWrap
//             sx={{ fontWeight: 'bold', color: 'primary.main' }}
//           >
//             PreSkool
//           </Typography>
//         </Box>
        
//         {/* SEARCH BAR (grow: 1) */}
//         <Box sx={{ flexGrow: 1, maxWidth: 400, mr: 2 }}>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Search"
//             sx={{
//               backgroundColor: '#f5f5f5',
//               borderRadius: 1,
//               '& .MuiOutlinedInput-notchedOutline': {
//                 border: 'none',
//               },
//             }}
//           />
//         </Box>
        
//         {/* ACADEMIC YEAR BUTTON */}
//         <Button
//           variant="outlined"
//           size="small"
//           sx={{ mr: 2, textTransform: 'none' }}
//           startIcon={<LanguageIcon />} // or a calendar icon
//         >
//           Academic Year : 2024 / 2025
//         </Button>
        
//         {/* ICON BUTTONS */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {/* Language switch or Country flag */}
//           <Tooltip title="Change Language">
//             <IconButton sx={{ color: 'inherit' }}>
//               <LanguageIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Add something */}
//           <Tooltip title="Add New">
//             <IconButton sx={{ color: 'inherit' }}>
//               <AddCircleIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Dark/Light Mode Toggle */}
//           <Tooltip title="Toggle Dark Mode">
//             <IconButton sx={{ color: 'inherit' }}>
//               <DarkModeIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Notifications */}
//           <Tooltip title="Notifications">
//             <IconButton sx={{ color: 'inherit' }}>
//               <NotificationsIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Chat/Messages */}
//           <Tooltip title="Chat / Messages">
//             <IconButton sx={{ color: 'inherit' }}>
//               <ChatBubbleIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Analytics */}
//           <Tooltip title="Analytics">
//             <IconButton sx={{ color: 'inherit' }}>
//               <AnalyticsIcon />
//             </IconButton>
//           </Tooltip>
          
//           {/* Fullscreen */}
//           <Tooltip title="Fullscreen">
//             <IconButton sx={{ color: 'inherit' }}>
//               <FullscreenIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
        
//         {/* SPACER */}
//         <Box sx={{ width: 16 }} />
        
//         {/* USER AVATAR & NAME */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Avatar
//             src={user?.profilePhoto}
//             alt={user?.name || 'Admin'}
//             sx={{ width: 36, height: 36, mr: 1 }}
//           />
//           <Typography variant="body1" sx={{ mr: 2 }}>
//             {user?.name || 'Admin'}
//           </Typography>
          
//           {/* LOGOUT BUTTON */}
//           <Tooltip title="Logout">
//             <IconButton color="inherit" onClick={onLogout}>
//               <LogoutIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
