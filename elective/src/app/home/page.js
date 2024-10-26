"use client"; 
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Simulate a login process
    setTimeout(() => {
      setLoading(false);
      setSnackbarMessage("Login successful!");
      setSnackbarOpen(true);
    }, 2000);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center px-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyriDiEdopU1eL6oi-x5tNY-HOENBFb7Z5Eg&s"
          className="h-8 w-auto mr-4"
          alt="Logo"
        />
        <span className="text-3xl font-bold text-white">PEAKPULSE</span>
      </div>

      <Paper
        elevation={8}
        className="flex w-full max-w-md p-8 rounded-lg shadow-lg z-10 mt-16 bg-gray-900"
      >
        <Box component="form" onSubmit={handleSubmit} className="w-full">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: 'white' }}>
            SIGN IN
          </Typography>

          <div className="mt-8 w-full">
            <TextField
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              label="Email"
              variant="outlined"
              className="w-full mb-4"
              InputProps={{
                className: "text-white",
                style: { backgroundColor: "#1e293b" },
                startAdornment: (
                  <EmailIcon sx={{ color: "white" }} />
                ),
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Set label color to white
              }}
              placeholder="UserName:"
            />

            <TextField
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              label="Password"
              variant="outlined"
              className="w-full mb-4"
              InputProps={{
                className: "text-white",
                style: { backgroundColor: "#1e293b" },
                startAdornment: (
                  <LockOpenIcon sx={{ color: "white" }} />
                ),
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Set label color to white
              }}
              placeholder="Enter your password"
            />

            <Box className="flex justify-between mb-4">
              <Typography variant="body2" className="text-gray-300">
                <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                  Forgot password?
                </a>
              </Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full"
              sx={{
                backgroundColor: "#3f51b5",
                '&:hover': {
                  backgroundColor: "#303f9f",
                },
              }}
              disabled={loading} // Disable button while loading
            >
              {loading ? <CircularProgress size={24} /> : "Sign in"}
            </Button>

            <Typography variant="body2" align="center" className="mt-6 text-gray-400">
              Not a member?{" "}
              <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                Start the free 14-day trial
              </a>
            </Typography>
          </div>
        </Box>
      </Paper>
      {/* Snackbar for notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
}