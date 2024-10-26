import React from "react";
import { Container, Box, Typography, TextField, Button, Grid, Paper, Link } from "@mui/material";

export default function Registration() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      {/* Header */}
      <Box
        component="header"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 48,
          bgcolor: "#1a202c",
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <Link href="https://www.freepik.com/free-photos-vectors/mountain-png" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyriDiEdopU1eL6oi-x5tNY-HOENBFb7Z5Eg&s"
            alt="PEAKPULSE"
            style={{ height: 40, width: 'auto', marginRight: 16 }}
          />
        </Link>
        <Typography variant="h4" fontWeight="bold" color="white">
          PEAKPULSE
        </Typography>
      </Box>
      {/* Form Container */}
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: "400px",
          bgcolor: "#2d3748",
          p: 4,
          borderRadius: 2,
          mt: 12,
          zIndex: 10,
        }}
      >
        {/* Form Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            color="white"
          >
            Create Your Account
          </Typography>
        </Box>

        {/* Registration Form */}
        <Box component="form" noValidate>
          <TextField
            fullWidth
            margin="normal"
            id="full-name"
            label="Full Name"
            name="full-name"
            required
            autoComplete="name"
            InputLabelProps={{ style: { color: "white" } }} // Changed color to white
            InputProps={{
              style: { backgroundColor: "#374151", color: "white" },
            }}
            placeholder="Name"
            variant="filled"
          />

          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            required
            autoComplete="email"
            InputLabelProps={{ style: { color: "white" } }} // Changed color to white
            InputProps={{
              style: { backgroundColor: "#374151", color: "white" },
            }}
            placeholder="you@example.com"
            variant="filled"
          />

          <TextField
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            InputLabelProps={{ style: { color: "white" } }} // Changed color to white
            InputProps={{
              style: { backgroundColor: "#374151", color: "white" },
            }}
            placeholder="Create a password"
            variant="filled"
          />

          <TextField
            fullWidth
            margin="normal"
            id="confirm-password"
            label="Confirm Password"
            name="confirm-password"
            type="password"
            required
            autoComplete="new-password"
            InputLabelProps={{ style: { color: "white" } }} // Changed color to white
            InputProps={{
              style: { backgroundColor: "#374151", color: "white" },
            }}
            placeholder="Confirm your password"
            variant="filled"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#6366f1",
              "&:hover": { bgcolor: "#4f46e5" },
              py: 1.5,
            }}
          >
            Register
          </Button>
        </Box>

        {/* Sign in Link */}
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Typography variant="body2" color="white"> {/* Changed color to white */}
            Already have an account?{" "}
            <Link href="#" sx={{ color: "#6366f1" }}>
              Sign in
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </main>
  );
}
