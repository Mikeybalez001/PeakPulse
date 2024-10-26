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
  Typography,
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

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
}));

export default function TrainerRatingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [reviews, setReviews] = useState({});

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

  const handleReviewChange = (trainerId, event) => {
    setReviews({ ...reviews, [trainerId]: event.target.value });
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
            background: "#1a1a1a",
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
            <Typography variant="h5" component="h2" className="font-bold">
              PEAKPULSE
            </Typography>
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
                <ListItemText primary="Trainers" sx={{ color: "white" }} />
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
          <Typography variant="h4" component="h1" className="font-semibold">
            Trainer Ratings
          </Typography>
          <div className="flex items-center space-x-4">
            <TextField
              variant="outlined"
              placeholder="Search trainers..."
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

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Trainer Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://yt3.googleusercontent.com/FRjBsMRbq_xZ_ELRbhV2dQ57fJX2sacAPusL8y7sZv4wMJ6IkLv47h03f6xT-cTA2Rylnhf4Hg=s900-c-k-c0x00ffffff-no-rj"
              alt="Trainer James"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <Typography variant="h6" component="h3" className="font-semibold mb-2">James Smith</Typography>
            <Typography variant="body1" className="mb-2">
              Specialization: Weight Training
            </Typography>
            <Box className="flex flex-col mb-4">
              <StyledRating
                name="trainer1-rating"
                defaultValue={4.5}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <TextField
                variant="outlined"
                placeholder="Write your review..."
                size="small"
                value={reviews.trainer1 || ""}
                onChange={(e) => handleReviewChange("trainer1", e)}
                sx={{ marginTop: 1, background: "white" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6d75",
                "&:hover": { backgroundColor: "#ff4c5b" },
              }}
            >
              Submit Review
            </Button>
          </div>

          {/* Trainer Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://eghcszbxego.exactdn.com/wp-content/uploads/2020/02/Emma-Williams.jpg?strip=all&lossy=1&ssl=1"
              alt="Trainer Emma"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <Typography variant="h6" component="h3" className="font-semibold mb-2">Emma Williams</Typography>
            <Typography variant="body1" className="mb-2">
              Specialization: Yoga Instructor
            </Typography>
            <Box className="flex flex-col mb-4">
              <StyledRating
                name="trainer2-rating"
                defaultValue={4.0}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <TextField
                variant="outlined"
                placeholder="Write your review..."
                size="small"
                value={reviews.trainer2 || ""}
                onChange={(e) => handleReviewChange("trainer2", e)}
                sx={{ marginTop: 1, background: "white" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6d75",
                "&:hover": { backgroundColor: "#ff4c5b" },
              }}
            >
              Submit Review
            </Button>
          </div>

          {/* Trainer Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <img
              src="https://gbwr.org.uk/wp-content/uploads/2019/04/Harry-Langley.jpeg"
              alt="Trainer Harry"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <Typography variant="h6" component="h3" className="font-semibold mb-2">Harry Langley</Typography>
            <Typography variant="body1" className="mb-2">
              Specialization: Cardio Fitness
            </Typography>
            <Box className="flex flex-col mb-4">
              <StyledRating
                name="trainer3-rating"
                defaultValue={4.8}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <TextField
                variant="outlined"
                placeholder="Write your review..."
                size="small"
                value={reviews.trainer3 || ""}
                onChange={(e) => handleReviewChange("trainer3", e)}
                sx={{ marginTop: 1, background: "white" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6d75",
                "&:hover": { backgroundColor: "#ff4c5b" },
              }}
            >
              Submit Review
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}