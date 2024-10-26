import React from "react";
import { Button, Checkbox, List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import { Dashboard, Person, FitnessCenter, Settings, Logout } from "@mui/icons-material";

export default function TrainerInfo() {
    return (
        <div className="relative min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white flex flex-col">
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

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Trainer Information</h1>
        </div>

        <div className="mt-8 mx-auto bg-gray-900 p-6 rounded-lg shadow-lg" style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Trainer Image */}
          <img
            src="https://t4.ftcdn.net/jpg/06/37/47/93/360_F_637479333_qpP3LSOIoWKGklqpeH3ijYUNZsyv2XBi.jpg"
            alt="Trainer John Smith"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-4"
          />
          {/* Trainer Name */}
          <h3 className="text-2xl font-semibold mb-4">John Smith</h3>

          {/* Trainer Rating */}
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-yellow-400 text-3xl">&#9733;</span>
                <span className="text-yellow-400 text-3xl">&#9733;</span>
                <span className="text-yellow-400 text-3xl">&#9733;</span>
                <span className="text-yellow-400 text-3xl">&#9733;</span>
                <span className="text-gray-500 text-3xl">&#9733;</span>
                <span className="ml-2 text-lg text-gray-300">(4.0/5.0)</span>
              </div>
            </div>
            <p className="text-gray-400 mt-2">120 reviews</p>
          </div>

          {/* Trainer Details */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Professional Background</h4>
            <p className="text-gray-400">
              John Smith brings over a decade of experience in the fitness industry, focusing on strength training, cardiovascular health, and holistic wellness. His commitment to helping clients achieve their fitness objectives and lead a healthier lifestyle is unwavering.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
            <p className="text-gray-400">Email: johnsmith@pogi.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Book Trainer
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
