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
  Avatar 
} from "@mui/material"; 
import { 
  Dashboard as DashboardIcon, 
  Person, 
  FitnessCenter, 
  Settings, 
  Logout, 
  Menu as MenuIcon, 
  Notifications, 
  Search as SearchIcon 
} from "@mui/icons-material"; 

export default function TrainerRatingPage() { 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const toggleDrawer = (open) => (event) => { 
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return; 
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
        PaperProps={{ sx: { background: "#1a1a1a", color: "white" } }} 
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
                <ListItemIcon><DashboardIcon sx={{ color: "white" }} /></ListItemIcon> 
                <ListItemText primary="Dashboard" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon><Person sx={{ color: "white" }} /></ListItemIcon> 
                <ListItemText primary="Profile" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon><FitnessCenter sx={{ color: "white" }} /></ListItemIcon> 
                <ListItemText primary="Trainers" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon><Settings sx={{ color: "white" }} /></ListItemIcon> 
                <ListItemText primary="Settings" sx={{ color: "white" }} /> 
              </ListItem> 
              <ListItem button> 
                <ListItemIcon><Logout sx={{ color: "white" }} /></ListItemIcon> 
                <ListItemText primary="Logout" sx={{ color: "white" }} /> 
              </ListItem> 
            </List> 
          </nav> 
        </aside> 
      </Drawer> 

      {/* Main Content Area */} 
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"> 
        <div className="flex items-center justify-between mb-6"> 
          <IconButton onClick={toggleDrawer(true)} color="inherit"><MenuIcon /></IconButton> 
          <h1 className="text-3xl font-semibold">TRAINER REVIEW</h1> 
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
                  "& fieldset": { borderColor: "white" }, 
                  "&:hover fieldset": { borderColor: "white" }, 
                  "&.Mui-focused fieldset": { borderColor: "white" }, 
                }, 
              }} 
            /> 
            <IconButton color="inherit"> 
              <Badge badgeContent={3} color="secondary"><Notifications /></Badge> 
            </IconButton> 
            <Avatar alt="Admin" src="/admin-avatar.png" /> 
          </div> 
        </div> 

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Trainer Cards */}
          {[
            {
              title: "Personal Training",
              instructor: "SONIA BONGALA",
              image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD.png",
              reviews: 150,
            },
            {
              title: "Yoga Training",
              instructor: "DORIS BENAVIDES",
              image: "https://www.byronyoga.com/wp-content/uploads/2023/08/Web-images-1920-%C3%97-960px-12.jpg",
              reviews: 120,
            },
            {
              title: "Nutrition Coaching",
              instructor: "GEMMA BALEIN",
              image: "https://images.squarespace-cdn.com/content/v1/5ae34e0f12b13f5c9149ad50/1635280142531-DAL8ZR4HV7OC7YGYGZKE/kate+lyman+nutrition+personalized+nutrition+coaching+macro+tracking+for+fat+loss+weight+loss+goals+performance+athlete+nutrition+coach.jpg?format=2500w",
              reviews: 200,
            },
            {
              title: "Group Fitness",
              instructor: "CARL ABELARDO ANTONIO",
              image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg",
              reviews: 80,
            },
            {
              title: "Strength Training",
              instructor: "ROSARIO ALORA",
              image: "https://www.orthovirginia.com/wp-content/uploads/2024/04/Why-Everyone-Should-Hire-A-Fitness_Strength-Trainer-and-How-To-Select-The-Right-One-For-You.jpg",
              reviews: 90,
            },
            {
              title: "Cardio Training",
              instructor: "LIANE PENA-ALAMPAY",
              image: "https://www.verywellfit.com/thmb/Y-pUPTgW0nQOwfBz7ahVRaTMHBg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/everything-you-need-to-know-about-cardio-1229553-8e08847ffcfb4845b29c08fa27e76d32.jpg",
              reviews: 130,
            },
          ].map((trainer, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
              <img 
                src={trainer.image} 
                alt={trainer.title} 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              /> 
              <h3 className="text-xl font-semibold mb-2">{trainer.title}</h3> 
              <h5 className="text-base font-medium mb-2">By: {trainer.instructor}</h5> 
              <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                <span className="text-gray-400">{trainer.reviews} reviews</span> 
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: "#4a90e2", color: "white", "&:hover": { backgroundColor: "#357ab8" } }} 
                >
                  View reviews
                </Button> 
              </div> 
            </div>
          ))}
        </div>
      </main> 
    </div> 
  ); 
}