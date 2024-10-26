"use client"; // Ensure this line is included
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Rating,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ArrowBack as ArrowBackIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Customized rating component with heart icons
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
}));

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? "s" : ""}`;
}

const ViewProductDetails = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <Box className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6">
      {/* Back Button */}
      <IconButton
        aria-label="back"
        sx={{ color: "white" }}
        onClick={() => {
          // Handle back button action here
          console.log("Go back to the previous page");
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Main Product Container */}
      <Box className="flex flex-col md:flex-row mt-6">
        {/* Product Image */}
        <Box className="md:w-1/2">
          <img
            src="https://repfitness.com/cdn/shop/products/Shopify-DB-3000-550-Thumbnail.jpg?v=1635876012"
            alt="Product Image"
            className="rounded-lg shadow-lg object-cover w-full h-96"
          />
        </Box>

        {/* Product Details Section */}
        <Box className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
          <Typography variant="h4" className="font-bold mb-2">
            Dumbbells Set
          </Typography>

          <StyledRating
            name="product-rating"
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            getLabelText={getLabelText}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Typography variant="body2" sx={{ color: "white" }} className="mt-1">
            {rating} ({`150 reviews`})
          </Typography>

          {/* Divider for Visual Separation */}
          <Divider sx={{ backgroundColor: "#2f2f2f", my: 2 }} />

          {/* Product Description */}
          <Typography variant="body1" className="mb-4">
            Upgrade your workouts with our Premium Dumbbells Set, designed for
            optimal grip and balanced weight distribution. Perfect for
            strength-building routines, whether at home or in the gym.
          </Typography>

          {/* Key Features */}
          <Typography variant="h6" className="font-semibold mb-2">
            Key Features:
          </Typography>
          <ul className="list-disc ml-6 mb-4">
            <li>High-quality steel construction with anti-slip grip</li>
            <li>Adjustable weights ranging from 5 to 50 lbs</li>
            <li>Ergonomic design for comfortable use</li>
            <li>Rust-resistant coating for durability</li>
          </ul>

          {/* Pricing Section */}
          <Typography variant="h5" className="font-bold text-yellow-400 mb-4">
            $299.99
          </Typography>

          {/* Availability */}
          <Chip label="In Stock" color="success" className="mb-4" />

          {/* Action Buttons */}
          <Box className="flex space-x-4">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ff6d75", flexGrow: 1 }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#ff6d75", borderColor: "#ff6d75", flexGrow: 1 }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Additional Product Information */}
      <Box className="mt-10">
        <Typography variant="h6" className="font-semibold mb-2">
          Product Details:
        </Typography>
        <Typography variant="body1" className="mb-4">
          Our Premium Dumbbells Set is engineered with athletes in mind, offering a range of adjustable weights to suit all fitness levels. The durable construction and sleek design ensure that these dumbbells will be a staple in your fitness arsenal for years to come. Ideal for strength training, muscle toning, and body sculpting, they are perfect for any workout regimen.
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2">
          Care Instructions:
        </Typography>
        <Typography variant="body1">
          Wipe with a clean, damp cloth after use. Store in a dry, cool place. Avoid contact with moisture to prevent rusting and maintain the integrity of the grip.
        </Typography>
      </Box>
    </Box>
  );
};

export default ViewProductDetails;