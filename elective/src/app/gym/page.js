"use client"; 
import React, { useState } from "react"; 
import { Button, List, ListItem, ListItemText, ListItemIcon, Divider, Drawer, IconButton, Box, TextField, InputAdornment, Badge, Avatar } from "@mui/material"; 
import { Dashboard as DashboardIcon, Person, FitnessCenter, Settings, Logout, Menu as MenuIcon, Notifications, Search as SearchIcon } from "@mui/icons-material"; 
import { styled } from "@mui/material/styles"; 

export default function GymCoursesPage() { 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const toggleDrawer = (open) => (event) => { 
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) { 
      return; 
    } 
    setIsDrawerOpen(open); 
  }; 

  const handleSearchChange = (event) => { 
    setSearchQuery(event.target.value); 
  }; 

  const martialArtsCourses = [
    {
      title: "Boxing",
      instructor: "MIKE TYSON",
      image: "https://cdn.britannica.com/76/187976-050-7EF67E13/Floyd-Mayweather-Jr-ducks-Philippines-Manny-Pacquiao-May-2-2015.jpg",
      rating: 4.5,
      reviews: 150,
    },
    {
      title: "Taekwondo",
      instructor: "JACKIE CHAN",
      image: "https://www.paralympic.org/sites/default/files/images/171020105248526_Amy%2BTruesdale.jpg",
      rating: 4.0,
      reviews: 120,
    },
    {
      title: "Arnis",
      instructor: "BRUCE LEE",
      image: "https://cdn.tatlerasia.com/asiatatler/i/ph/2020/10/22144736-thumbnail-20191201-seagames-c-0039_cover_1280x901.jpg",
      rating: 4.8,
      reviews: 200,
    },
    {
      title: "Muay Thai",
      instructor: "BUAKAW BANCHAMEK",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Muay_Thai_Fight_Us_Vs_Burma_%2880668065%29.jpeg",
      rating: 4.7,
      reviews: 180,
    },
    {
      title: "Karate",
      instructor: "KARATE KID",
      image: "https://images.squarespace-cdn.com/content/v1/5689bf3fbfe8732981054f50/1491085755761-29IW30UYT0SEKY2DLXM9/image-asset.jpeg",
      rating: 4.6,
      reviews: 160,
    },
    {
      title: "Judo",
      instructor: "YOSHISADA YONEZAWA",
      image: "https://www.beemat.co.uk/cdn/shop/articles/Judo.jpg?v=1695986886",
      rating: 4.9,
      reviews: 220,
    },
  ];

  return ( 
    <div className="relative min-h-screen flex"> 
      {/* Drawer */} 
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { background: "#2c2c2c", color: "white" } }}> 
        <aside className="w-64 flex flex-col"> 
          <div className="px-6 py-4 flex items-center"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyriDiEdopU1eL6oi-x5tNY-HOENBFb7Z5Eg&s" className="h-8 w-auto mr-4" alt="PeakPulse Logo" /> 
            <h2 className="text-2xl font-bold">PEAKPULSE</h2> 
          </div> 
          <Divider /> 
          <nav className="mt-10 flex-1"> 
            <List> 
              <ListItem button> 
                <ListItemIcon> <DashboardIcon sx={{ color: "white" }} /> </ListItemIcon> 
                <ListItemText primary="Dashboard" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon> <Person sx={{ color: "white" }} /> </ListItemIcon> 
                <ListItemText primary="Profile" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon> <FitnessCenter sx={{ color: "white" }} /> </ListItemIcon> 
                <ListItemText primary="Trainers" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon> <Settings sx={{ color: "white" }} /> </ListItemIcon> 
                <ListItemText primary="Settings" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon> <Logout sx={{ color: "white" }} /> </ListItemIcon> 
                <ListItemText primary="Logout" sx={{ color: "white" }} /> 
              </ListItem> 
            </List> 
          </nav> 
        </aside> 
      </Drawer> 

      {/* Main Content Area */} 
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"> 
        <div className="flex items-center justify-between mb-8"> 
          <IconButton onClick={toggleDrawer(true)} color="inherit"> <MenuIcon /> </IconButton> 
          <h1 className="text-4xl font-bold">GYM COURSES</h1> 
          <div className="flex items-center space-x-4"> 
            <TextField 
              variant="outlined" 
              placeholder="Search courses..." 
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
                  "& fieldset": { borderColor: "white" }, 
                  "&:hover fieldset": { borderColor: "white" }, 
                  "&.Mui-focused fieldset": { borderColor: "white" }, 
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

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {martialArtsCourses.map((course, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <h5 className="text-lg font-medium mb-4 text-gray-300">By: {course.instructor}</h5>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: "#ff6d75", 
                  "&:hover": { backgroundColor: "#ff4c5e" }, 
                  borderRadius: "20px", 
                  padding: "10px 20px" 
                }}
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </main> 
    </div> 
  ); 
}