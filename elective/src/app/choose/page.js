"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
} from "@mui/material";

const options = [
    {
      title: "GYM PRODUCT",
      image: "https://www.homefitnesscode.com/cdn/shop/articles/various_fitness_equipment_2000x.jpg?v=1622715620", 
      action: () => console.log("Navigating to GYM PRODUCT"),
    },
    {
      title: "TRAINER",
      image: "https://www.verywellfit.com/thmb/5BmWCs3muNUIJOz_kTsWnmF58sQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dotdash-VWFit-reasons-to-hire-a-personal-trainer-1231372-v1-c822137213bb460ab973a5d651c31fe7.jpg", // Replace with your image URL
      action: () => console.log("Navigating to TRAINER"),
    },
    {
      title: "RATING",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYv4v0kwdVnZPzPNHXpA9diFH5WERBTVRQw&s", 
      action: () => console.log("Navigating to RATING"),
    },
  ];

export default function ChoosePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
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
            <Typography variant="h6" color="white" mt={2}>
              Your ultimate solution for efficient gym management and personal fitness tracking.
            </Typography>
            <Typography variant="h3" component="h2" fontWeight="bold" color="white">
              choose
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {options.map((option) => (
              <Grid item xs={12} sm={6} md={4} key={option.title}>
                <Paper
                  elevation={3}
                  sx={{
                    bgcolor: "#374151",
                    textAlign: "center",
                    borderRadius: 2,
                    padding: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s',
                    },
                  }}
                  onClick={option.action}
                >
                  <img
                    src={option.image}
                    alt={option.title}
                    style={{ height: 140, width: '100%', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" fontWeight="bold" color="white" mt={2}>
                    {option.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </main>
  );
}