"use client"; // Ensure this line is included
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Box,
  Fab,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  Badge,
  Modal,
  Container,
} from "@mui/material";
import {
  FitnessCenter,
  Dashboard as DashboardIcon,
  Settings,
  Logout,
  Menu as MenuIcon,
  Add as AddIcon,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";

// Sample gym equipment data
const productsData = [
  {
    id: 1,
    name: "Dumbbells Set",
    description: "Adjustable dumbbells ranging from 5-50 lbs.",
    price: "$120",
    imgSrc: "https://repfitness.com/cdn/shop/products/Shopify-DB-3000-550-Thumbnail.jpg?v=1635876012",
  },
  {
    id: 2,
    name: "Treadmill",
    description: "High-performance treadmill with multiple incline levels.",
    price: "$950",
    imgSrc: "https://contents.mediadecathlon.com/p1875469/k$b8423895dfe14e718213aba0d0213b81/smart-compact-treadmill-run100e-14-km-h-45-120-cm-domyos-8607158.jpg?f=1920x0&format=auto",
  },
  {
    id: 3,
    name: "Exercise Bike",
    description: "Stationary bike with adjustable resistance.",
    price: "$300",
    imgSrc: "https://contents.mediadecathlon.com/p1798185/k$0fbfde70f857d4ad786bc323f4290ce0/training-exercise-bike-500-domyos-8491912.jpg?f=1920x0&format=auto",
  },
];

export default function ProductPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", imgSrc: "" });
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNewProductChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleAddProduct = () => {
    // Logic for adding a new product (you could push this to a state array)
    productsData.push({ ...newProduct, id: productsData.length + 1 }); // Update productsData
    setNewProduct({ name: "", description: "", price: "", imgSrc: "" }); // Reset form
    setIsAddModalOpen(false);
  };

  const handleViewProductDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex">
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
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
      </Drawer>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="flex items-center justify-between mb-6">
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <h1 className="text-3xl font-semibold">GYM EQUIPMENT</h1>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <TextField
              variant="outlined"
              placeholder="Search..."
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

        {/* Product List */}
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={3}>
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                backgroundColor: "#2e2e2e",
                borderRadius: 2,
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleViewProductDetail(product)}
            >
              <CardMedia component="img" height="140" image={product.imgSrc} alt={product.name} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: "white" }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                  {product.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#8e44ad" }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 1,
                    backgroundColor: "#8e44ad",
                    "&:hover": { backgroundColor: "#732d91" },
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Add Product Button */}
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setIsAddModalOpen(true)}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>

        {/* Modal for Adding New Product */}
        <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
          <Container sx={{ bgcolor: "#2e2e2e", borderRadius: 2, padding: 4, marginTop: 8 }}>
            <Typography variant="h6" component="h2" sx={{ color: "white" }}>
              Add New Product
            </Typography>
            <TextField
              label="Product Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.name}
              onChange={handleNewProductChange}
              sx={{
                input: { color: "white" },
                "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" } },
              }}
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.description}
              onChange={handleNewProductChange}
              sx={{
                input: { color: "white" },
                "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" } },
              }}
            />
            <TextField
              label="Price"
              name="price"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.price}
              onChange={handleNewProductChange}
              sx={{
                input: { color: "white" },
                "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" } },
              }}
            />
            <TextField
              label="Image URL"
              name="imgSrc"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.imgSrc}
              onChange={handleNewProductChange}
              sx={{
                input: { color: "white" },
                "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" } },
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: "#8e44ad",
                "&:hover": { backgroundColor: "#732d91" },
              }}
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </Container>
        </Modal>

        {/* Modal for Detailed Product View */}
        <Modal open={isDetailModalOpen} onClose={handleCloseDetailModal}>
          <Container sx={{ bgcolor: "#2e2e2e", borderRadius: 2, padding: 4, marginTop: 8 }}>
            {selectedProduct && (
              <>
                <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                  {selectedProduct.name}
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={selectedProduct.imgSrc}
                  alt={selectedProduct.name}
                  sx={{ marginTop: 2 }}
                />
                <Typography variant="body1" sx={{ color: "white", marginTop: 2 }}>
                  {selectedProduct.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#8e44ad", marginTop: 1 }}>
                  {selectedProduct.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#8e44ad",
                    "&:hover": { backgroundColor: "#732d91" },
                  }}
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    handleCloseDetailModal(); // Close modal after adding to cart
                  }}
                >
                  Add to Cart
                </Button>
              </>
            )}
          </Container>
        </Modal>
      </main>
    </div>
  );
}