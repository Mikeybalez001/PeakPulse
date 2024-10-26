import React from "react";
import { Box, Typography, Button, Container, Paper, Grid, Link } from "@mui/material";

export default function LandingPage() {
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

      {/* Main Content */}
      <Container component="main" maxWidth="md" sx={{ mt: 10 }}>
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
            <Typography variant="h3" component="h2" fontWeight="bold" color="white">
              Welcome to PEAKPULSE
            </Typography>
            <Typography variant="h6" color="white" mt={2}> {/* Changed color to white */}
              Your ultimate solution for efficient gym management and personal fitness tracking.
            </Typography>
          </Box>

          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              href="/registration"
              variant="contained"
              color="primary"
              sx={{
                mb: 2,
                px: 4,
                py: 2,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Get Started
            </Button>
            <Button
              href="/learn-more"
              variant="outlined"
              color="secondary"
              sx={{
                px: 4,
                py: 2,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Benefits Section */}
          <Box mt={8} textAlign="center">
            <Typography variant="h4" fontWeight="bold" color="white" mb={4}>
              Why Choose PEAKPULSE?
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    bgcolor: "#374151",
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="white" mb={2}> {/* Changed color to white */}
                    Efficient Management
                  </Typography>
                  <Typography color="white"> {/* Changed color to white */}
                    Streamline your gym operations with our comprehensive management tools.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    bgcolor: "#374151",
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="white" mb={2}> {/* Changed color to white */}
                    Personalized Experience
                  </Typography>
                  <Typography color="white"> {/* Changed color to white */}
                    Customize your fitness journey with tailored programs and progress tracking.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    bgcolor: "#374151",
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="white" mb={2}> {/* Changed color to white */}
                    Real-Time Insights & Place
                  </Typography>
                  <Typography color="white"> {/* Changed color to white */}
                    Access real-time data and reports to make informed decisions and improve results.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </main>
  );
}   
