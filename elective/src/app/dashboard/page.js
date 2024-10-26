"use client"; 
import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Drawer,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person,
  FitnessCenter,
  Settings,
  Logout,
  Menu as MenuIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const labels = {
  0.5: "",
  1: "",
  1.5: "",
  2: "",
  2.5: "",
  3: "",
  3.5: "",
  4: "",
  4.5: "",
  5: "",
};

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
}));

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
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
                  <DashboardIcon sx={{ color: "white" }} />
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
          <h1 className="text-3xl font-semibold">DASHBOARD</h1>
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
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Gym Service 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD.png"
              alt="Personal Training"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Personal Training</h3>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledRating
                  name="customized-color"
                  defaultValue={4}
                  precision={0.5}
                  getLabelText={getLabelText}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <span className="text-gray-400 ml-2">120 reviews</span>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff6d75", marginLeft: 2 }}
              >
                Check
              </Button>
            </div>
          </div>

          {/* Gym Service 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://www.polar.com/blog/wp-content/uploads/2017/01/What-is-group-fitness_hero.jpg"
              alt="Group Classes"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Group Classes</h3>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledRating
                  name="customized-color"
                  defaultValue={3}
                  precision={0.5}
                  getLabelText={getLabelText}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <span className="text-gray-400 ml-2">85 reviews</span>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff6d75", marginLeft: 2 }}
              >
                Check
              </Button>
            </div>
          </div>

          {/* Gym Service 3 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://i.insider.com/633dad9db3e94d001977bb48?width=800&format=jpeg&auto=webp"
              alt="Nutrition Coaching"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Nutrition Coaching</h3>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledRating
                  name="customized-color"
                  defaultValue={5}
                  precision={0.5}
                  getLabelText={getLabelText}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <span className="text-gray-400 ml-2">200 reviews</span>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff6d75", marginLeft: 2 }}
              >
                Check
              </Button>
            </div>
          </div>

          {/* Gym Service 4 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://www.nutritioned.org/wp-content/uploads/2022/11/online-nutrition-counseling.jpg"
              alt="Wellness Programs"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Wellness Programs</h3>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledRating
                  name="customized-color"
                  defaultValue={4.5}
                  precision={0.5}
                  getLabelText={getLabelText}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                <span className="text-gray-400 ml-2">150 reviews</span>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff6d75", marginLeft: 2 }}
              >
                Check
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}