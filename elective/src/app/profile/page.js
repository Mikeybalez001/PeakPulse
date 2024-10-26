"use client"; 
import React, { useState } from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  TextField,
  Drawer,
  IconButton,
  Avatar,
  InputAdornment,
  Badge,
} from "@mui/material";
import { Dashboard, Person, FitnessCenter, Settings, Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";

export default function ProfilePage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "#1a1a1a", // Changed drawer color to a darker shade
            color: "white",
          },
        }}
      >
        <aside className="w-64 flex flex-col">
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
                  <Dashboard sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: "white" }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Person sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{ color: "white" }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FitnessCenter sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Trainer" sx={{ color: "white" }} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Settings sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ color: "white" }} />
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
            <MenuIcon />
          </IconButton>
          <h1 className="text-3xl font-semibold">DASHBOARD PROFILE</h1>
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
            <Avatar alt="Admin" src="/admin-avatar.png" /> {/* Ensure a proper avatar image source */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://image.cdn2.seaart.ai/2023-10-31/21396636324345861/ad9161103a69d565db9c9db3dfced3c41dfb02c9_high.webp"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <Button variant="contained" color="primary" className="mb-4">
              Update Profile Picture
            </Button>
            <h2 className="text-xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-400 mb-4">Username</p>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </div>

          {/* Profile Details */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <form className="flex flex-col gap-4">
              <TextField
                label="Email"
                variant="outlined"
                defaultValue="johndoe@example.com"
                className="bg-gray-800"
                InputProps={{ className: "text-white" }}
                InputLabelProps={{ className: "text-gray-400" }}
              />
              <TextField
                label="Phone"
                variant="outlined"
                defaultValue="(123) 456-7890"
                className="bg-gray-800"
                InputProps={{ className: "text-white" }}
                InputLabelProps={{ className: "text-gray-400" }}
              />
              <TextField
                label="Bio"
                variant="outlined"
                defaultValue="I want to achieve my health and wellness goals."
                multiline
                rows={4}
                className="bg-gray-800"
                InputProps={{ className: "text-white" }}
                InputLabelProps={{ className: "text-gray-400" }}
              />
            </form>
          </div>
        </div>

        {/* Recent Activities */}
        <section className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400 mb-2">Completed a workout session on 09/10/2024</li>
            <li className="text-gray-400 mb-2">Updated profile picture on 09/09/2024</li>
            <li className="text-gray-400 mb-2">Scheduled a new class on 09/08/2024</li>
          </ul>
        </section>

        {/* Social Links */}
        <section className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-400">
              Facebook
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
              Twitter
            </a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400">
              Instagram
            </a>
          </div>
        </section>

        {/* Notifications Preferences */}
        <section className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <form className="flex flex-col gap-4">
            <TextField
              label="Email Notifications"
              variant="outlined"
              select
              className="bg-gray-800"
              InputProps={{ className: "text-white" }}
              InputLabelProps={{ className: "text-gray-400" }}
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </TextField>
            <TextField
              label="SMS Notifications"
              variant="outlined"
              select
              className="bg-gray-800"
              InputProps={{ className: "text-white" }}
              InputLabelProps={{ className: "text-gray-400" }}
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </TextField>
          </form>
        </section>
      </main>
    </div>
  );
}