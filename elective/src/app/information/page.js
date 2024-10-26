"use client"; // Make sure this line is at the top
import React, { useState } from "react";
import { Button, Divider, List, ListItem, ListItemText, ListItemIcon, Paper, Typography, Drawer, IconButton } from "@mui/material";
import { Dashboard, Person, FitnessCenter, Settings, Logout, Menu } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material"; // Heart icon

export default function TrainerInfo() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
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
            <Typography variant="h5" fontWeight="bold">PEAKPULSE</Typography>
          </div>
          <Divider />
          <nav className="mt-10 flex-1">
            <List>
              {["Dashboard", "Profile", "Trainer", "Settings", "Logout"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index === 0 && <Dashboard sx={{ color: "white" }} />}
                    {index === 1 && <Person sx={{ color: "white" }} />}
                    {index === 2 && <FitnessCenter sx={{ color: "white" }} />}
                    {index === 3 && <Settings sx={{ color: "white" }} />}
                    {index === 4 && <Logout sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "white" }} />
                </ListItem>
              ))}
            </List>
          </nav>
        </aside>
      </Drawer>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h4" fontWeight="bold">Trainer Information</Typography>
          <IconButton onClick={toggleDrawer(true)} className="text-white" aria-label="menu">
            <Menu />
          </IconButton>
        </div>

        <Paper className="mx-auto p-6 bg-gray-900 rounded-lg shadow-lg" style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Trainer Image */}
          <img
            src="https://t4.ftcdn.net/jpg/06/37/47/93/360_F_637479333_qpP3LSOIoWKGklqpeH3ijYUNZsyv2XBi.jpg"
            alt="Trainer John Smith"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-4"
          />
          {/* Trainer Name */}
          <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
            John Smith
          </Typography>

          {/* Trainer Rating */}
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Favorite key={index} sx={{ color: index < 4 ? "red" : "gray", fontSize: "2rem" }} />
                ))}
                <span className="ml-2 text-lg text-gray-300">(4.0/5.0)</span>
              </div>
            </div>
            <Typography variant="body2" color="white">120 reviews</Typography>
          </div>

          {/* Trainer Details */}
          <div className="mt-4">
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>Professional Background</Typography>
            <Typography variant="body1" color="white">
              John Smith brings over a decade of experience in the fitness industry, specializing in strength training, cardiovascular health, and holistic wellness. His commitment to helping clients achieve their fitness objectives and lead healthier lifestyles is unwavering. John has successfully coached clients from diverse backgrounds, tailoring programs to meet individual needs.
            </Typography>
          </div>

          {/* Specializations */}
          <div className="mt-4">
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>Specializations</Typography>
            <Typography variant="body1" color="white">
              - Strength Training<br />
              - Weight Loss Coaching<br />
              - Nutritional Guidance<br />
              - Group Fitness Classes<br />
              - Personal Training<br />
              - Injury Rehabilitation<br />
              - Athletic Conditioning
            </Typography>
          </div>

          {/* Certifications */}
          <div className="mt-4">
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>Certifications</Typography>
            <Typography variant="body1" color="white">
              - Certified Personal Trainer (CPT)<br />
              - Nutrition and Wellness Consultant<br />
              - Group Fitness Instructor (GFI)<br />
              - CPR and First Aid Certified
            </Typography>
          </div>

           {/* Contact Information */}
           <div className="mt-4">
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>Contact Information</Typography>
            <Typography variant="body1" color="white">Email: johnsmith@pogi.com</Typography>
            <Typography variant="body1" color="white">Phone: +1 234 567 890</Typography>
          </div>

          {/* Success Stories */}
          <div className="mt-4">
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              Success Stories
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Success Story 1 */}
              <Paper className="bg-gray-800 p-4 rounded-lg shadow-md">
                <Typography variant="body1" color="white" gutterBottom>
                  "With John's guidance, I lost 30 pounds and gained the confidence to participate in my first marathon. His support was invaluable!"
                </Typography>
                <Typography variant="body2" color="white" align="right">
                  - Sarah J.
                </Typography>
              </Paper>
              {/* Success Story 2 */}
              <Paper className="bg-gray-800 p-4 rounded-lg shadow-md">
                <Typography variant="body1" color="white" gutterBottom>
                  "John helped me recover from my knee injury, and I am now stronger than ever. Highly recommend!"
                </Typography>
                <Typography variant="body2" color="white" align="right">
                  - Mark T.
                </Typography>
              </Paper>
              {/* Additional Success Stories can be added here */}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-6">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#3f51b5",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Book Trainer
            </Button>
          </div>
        </Paper>
      </main>
    </div>
  );
}
