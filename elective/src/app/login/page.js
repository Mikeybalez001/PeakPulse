import React from "react";
import { Box, Typography, Button, Container, Paper, TextField, Link } from "@mui/material";

export default function LoginPage() {
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

      {/* Login Form */}
      <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            bgcolor: "#1f2937",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography variant="h5" component="h1" fontWeight="bold" color="white">
              Sign In
            </Typography>
          </Box>

          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mb: 2 }}
              InputProps={{
                sx: {
                  bgcolor: '#374151',
                  color: 'white',
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white', // Changed color to white
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 2 }}
              InputProps={{
                sx: {
                  bgcolor: '#374151',
                  color: 'white',
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white', // Changed color to white
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Sign In
            </Button>
            <Box textAlign="center" mt={2}>
              <Typography variant="body2" color="white"> {/* Changed color to white */}
                Don't have an account?{' '}
                <Link href="/registration" color="secondary">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </main>
  );
}
