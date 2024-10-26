"use client";
import React, { useState } from "react";
import {Button,Divider,List,ListItem,ListItemText,ListItemIcon,Box,IconButton,Drawer,Avatar,Badge,TextField,InputAdornment,
} from "@mui/material";
import {Dashboard as DashboardIcon,People,FitnessCenter,Settings,Logout,ManageAccounts,Menu, Notifications,Search as SearchIcon,Assessment,EventNote,ContactSupport,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"; // Importing Desktop Date Picker
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"; // Importing Pie Chart components
import { LinearProgress } from "@mui/material"; // For the rating bar
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Date Adapter for date handling

export default function AdminManagementPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState(new Date()); // State for Calendar

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Data for the pie chart
  const trainerData = [
    { name: "Active", value: 40 },
    { name: "Inactive", value: 10 },
    { name: "Pending", value: 5 },
  ];

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

  return (
    <div className="relative min-h-screen flex">
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "#1a1a1a",
            color: "white",
            width: 240,
          },
        }}
      >
        <aside className="flex flex-col">
          <div className="px-6 py-4 flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyriDiEdopU1eL6oi-x5tNY-HOENBFb7Z5Eg&s"
              className="h-8 w-auto mr-4"
              alt="PeakPulse Logo"
            />
            <h2 className="text-2xl font-bold">PEAKPULSE</h2>
          </div>
          <Divider />
          <nav className="mt-10 flex-1">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Admin Dashboard"
                  sx={{ color: "white" }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ManageAccounts sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Manage Users" sx={{ color: "white" }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <People sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Trainers"
                  sx={{ color: "white" }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FitnessCenter sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Services"
                  sx={{ color: "white" }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Logout sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </nav>
        </aside>
      </Drawer>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="flex items-center justify-between mb-6">
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <Menu />
          </IconButton>
          <h1 className="text-3xl font-semibold">ADMIN DASHBOARD</h1>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                style: { color: "white" },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar alt="Admin" src="/admin-avatar.png" />
          </div>
        </div>

        {/* Analytics Overview Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Users Registered</h3>
            <LinearProgress variant="determinate" value={75} sx={{ height: 10, borderRadius: 5, backgroundColor: "#444" }} />
            <p className="text-4xl font-bold mt-2">234,232</p>
          </Box>

          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Active Trainers</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={trainerData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8" paddingAngle={5}>
                  {trainerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>

          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Total Services</h3>
            <p className="text-4xl font-bold">123</p>
          </Box>
        </div>

        {/* Calendar and Task Management Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Calendar Section */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Calendar</h3>
        <DesktopDatePicker
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday sx={{ color: "white" }} /> {/* Ensure this is white */}
                  </InputAdornment>
                ),
                style: { color: "white" }, // Set text color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                  },
                  color: "white", // Text color
                },
              }}
            />
          )}
        />
      </Box>
    </LocalizationProvider>
          {/* Task Management Section */}
          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Task Management</h3>
            <p className="text-gray-400">
              Track tasks assigned to users, trainers, or administrators. Manage deadlines and completion status.
            </p>
            <Button variant="contained" color="primary" className="mt-4">
              View Tasks
            </Button>
          </Box>

          {/* Notifications Section */}
          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <p className="text-gray-400">
              Stay up-to-date with real-time notifications about gym activities, user feedback, and system updates.
            </p>
            <Button variant="contained" color="primary" className="mt-4">
              View Notifications
            </Button>
          </Box>

          {/* Analytics Section */}
          <Box className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Platform Analytics</h3>
            <p className="text-gray-400">
              View comprehensive analytics for users, trainers, and services. Get insights into platform performance.
            </p>
            <Button variant="contained" color="primary" className="mt-4">
              Go to Analytics
            </Button>
          </Box>
        </div>
      </main>
    </div>
  );
}