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
  Modal,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person,
  FitnessCenter,
  Settings,
  Logout,
  Menu as MenuIcon,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";

const trainerData = [
  {
    image: "https://rwfitness.com/wp-content/uploads/2022/03/Best-Personal-Trainers-in-Edgewater-MD.png",
    title: "Personal Training",
    trainer: "SONIA BONGALA",
    description: "Expert in personalized fitness plans and one-on-one coaching.",
  },
  {
    image: "https://www.byronyoga.com/wp-content/uploads/2023/08/Web-images-1920-%C3%97-960px-12.jpg",
    title: "Yoga Training",
    trainer: "DORIS BENAVIDES",
    description: "Focused on mindfulness and physical alignment through yoga.",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5ae34e0f12b13f5c9149ad50/1635280142531-DAL8ZR4HV7OC7YGYGZKE/kate+lyman+nutrition+personalized+nutrition+coaching+macro+tracking+for+fat+loss+weight+loss+goals+performance+athlete+nutrition+coach.jpg?format=2500w",
    title: "Nutrition Coaching",
    trainer: "GEMMA BALEIN",
    description: "Specializing in nutrition plans tailored to individual needs.",
  },
  {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg",
    title: "Group Fitness",
    trainer: "CARL ABELARDO ANTONIO",
    description: "Dynamic group sessions to boost motivation and results.",
  },
  {
    image: "https://www.orthovirginia.com/wp-content/uploads/2024/04/Why-Everyone-Should-Hire-A-Fitness_Strength-Trainer-and-How-To-Select-The-Right-One-For-You.jpg",
    title: "Strength Training",
    trainer: "BRIAN LIKAY",
    description: "Building strength through personalized weight training.",
  },
  {
    image: "https://www.verywellfit.com/thmb/Y-pUPTgW0nQOwfBz7ahVRaTMHBg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/everything-you-need-to-know-about-cardio-1229553-8e08847ffcfb4845b29c08fa27e76d32.jpg",
    title: "Cardio Training",
    trainer: "JENNY RIVERA",
    description: "High-energy cardio sessions to improve endurance.",
  },
];

export default function TrainerPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

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

  const handleCardClick = (trainer) => {
    setSelectedTrainer(trainer);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTrainer(null);
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
             TRAINERS
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
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleCardClick(trainer)}
            >
              <img
                src={trainer.image}
                alt={trainer.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="h6" className="font-semibold mb-2">{trainer.title}</Typography>
              <Typography variant="body2" className="text-base font-semibold mb-4">By: {trainer.trainer}</Typography>
              <Button variant="contained" sx={{ backgroundColor: "#ff6d75", marginLeft: 2 }}>
                View Details
              </Button>
            </div>
          ))}
        </div>

        {/* Modal for Trainer Details */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="trainer-modal-title"
          aria-describedby="trainer-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: 2,
              padding: 4,
              width: '90%',
              maxWidth: 600,
              margin: 'auto',
              marginTop: '10%',
            }}
          >
            {selectedTrainer && (
              <>
                <Typography id="trainer-modal-title" variant="h6" component="h2">
                  {selectedTrainer.title} - {selectedTrainer.trainer}
                </Typography>
                <Typography id="trainer-modal-description" sx={{ mt: 2 }}>
                  {selectedTrainer.description}
                </Typography>
                <Box sx={{ marginTop: 3 }}>
                  <Button onClick={handleCloseModal} variant="contained" color="primary">
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </main>
    </div>
  );
}
