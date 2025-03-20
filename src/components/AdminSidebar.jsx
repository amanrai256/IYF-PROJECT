import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Drawer as MuiDrawer,
  Box,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Collapse
} from '@mui/material';

// Icons for drawer open/close
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Icons for expand/collapse sub-menus
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Icons for each main menu item
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 240;

/** Mixin for the drawer "opened" state */
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/** Mixin for the drawer "closed" state */
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

/** Styled Drawer */
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

/** Drawer header style */
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

/** 
 * NAVIGATION DATA 
 * Each item can have:
 *  - text: string (visible label)
 *  - icon: JSX icon
 *  - path: direct route (if no subItems)
 *  - subItems: array of { text, path } for collapsible sub-menu
 */
const mainNavItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/admin',
  },
  {
    text: 'Users',
    icon: <PeopleIcon />,
    subItems: [
      { text: 'All Users', path: '/admin/users' },
      { text: 'Add User', path: '/admin/users/add' },
    ],
  },
  {
    text: 'Students',
    icon: <SchoolIcon />,
    subItems: [
      { text: 'All Students', path: '/admin/students' },
      { text: 'Add Student', path: '/admin/students/add' },
    ],
  },
  {
    text: 'Facilitators',
    icon: <GroupIcon />,
    subItems: [
      { text: 'All Facilitators', path: '/admin/facilitators' },
      { text: 'Add Facilitator', path: '/admin/facilitators/add' },
    ],
  },
  {
    text: 'Courses',
    icon: <SchoolIcon />,
    subItems: [
      { text: 'All Courses', path: '/admin/courses' },
      { text: 'Add Course', path: '/admin/courses/add' },
      { text: 'Manage Sessions', path: '/admin/courses/sessions' },
    ],
  },
  {
    text: 'Events & Fests',
    icon: <EventIcon />,
    subItems: [
      { text: 'All Events', path: '/admin/events' },
      { text: 'Add Event', path: '/admin/events/add' },
      { text: 'Festival Attendance', path: '/admin/events/festival-attendance' },
    ],
  },
  {
    text: 'Attendance',
    icon: <CheckCircleIcon />,
    subItems: [
      { text: 'Mark Attendance', path: '/admin/attendance/mark' },
      { text: 'Attendance Reports', path: '/admin/attendance/reports' },
    ],
  },
  {
    text: 'Volunteering',
    icon: <VolunteerActivismIcon />,
    subItems: [
      { text: 'All Volunteers', path: '/admin/volunteering' },
      { text: 'Add Volunteer', path: '/admin/volunteering/add' },
    ],
  },
  {
    text: 'Reports',
    icon: <AssessmentIcon />,
    subItems: [
      { text: 'Overall Reports', path: '/admin/reports' },
      { text: 'Student Reports', path: '/admin/reports/students' },
      { text: 'Course Reports', path: '/admin/reports/courses' },
    ],
  },
];

/**
 * AdminSidebar Component
 *
 * Props:
 *  - open: boolean (drawer open/close)
 *  - onDrawerClose: function to close the drawer
 *  - onNavClick: function(path) -> handle route navigation
 *  - user: object with user?.profilePhoto, user?.name, etc.
 */
export default function AdminSidebar({ open, onDrawerClose, onNavClick, user }) {
  const theme = useTheme();

  // track which parent item is expanded
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  // toggle collapse for a parent item
  const handleParentClick = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Drawer variant="permanent" open={open}>
      {/* Drawer Header with close icon */}
      <DrawerHeader>
        <IconButton onClick={onDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      {/* Admin Profile Box */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: open ? 'row' : 'column',
          justifyContent: open ? 'start' : 'center',
          p: 2,
        }}
      >
        <Avatar
          src={user?.profilePhoto}
          alt={user?.name || 'Admin'}
          sx={{ width: 56, height: 56 }}
        />
        {open && (
          <Typography variant="subtitle1" sx={{ ml: 2 }}>
            {user?.name || 'Admin'}
          </Typography>
        )}
      </Box>

      <Divider />

      {/* Main Nav List */}
      <List>
        {mainNavItems.map((item, index) => {
          // If no subItems, render as a direct link
          if (!item.subItems) {
            return (
              <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => onNavClick(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            );
          }

          // If subItems exist, render a collapsible parent
          const isExpanded = expandedIndex === index;
          return (
            <React.Fragment key={item.text}>
              {/* Parent item */}
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => handleParentClick(index)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />

                  {/* Expand/Collapse icon (only visible if drawer is open) */}
                  {open && (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>

              {/* Sub-items (collapsible) */}
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((sub) => (
                    <ListItemButton
                      key={sub.text}
                      onClick={() => onNavClick(sub.path)}
                      sx={{
                        pl: open ? 4 : 2, // indentation
                        justifyContent: open ? 'initial' : 'center',
                      }}
                    >
                      <ListItemText
                        primary={sub.text}
                        sx={{ opacity: open ? 1 : 0, ml: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
}
