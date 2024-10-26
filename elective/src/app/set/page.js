"use client"; // Ensure this line is included

import React, { useState } from "react";
import {
  Button,
  Divider,
  Typography,
  TextField,
  Paper,
  FormControlLabel,
  Switch,
  Stack,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";
import {
  Save,
  Cancel,
  Person as PersonIcon,
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const memberEmails = ['member1@gmail.com', 'member2@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Manage Backup Accounts</DialogTitle>
      <List sx={{ pt: 0 }}>
        {memberEmails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add Member" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

function AlertDialog({ onClose, open }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Confirm Membership Cancellation"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to cancel this membership? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onClose} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function SettingsPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [selectedValue, setSelectedValue] = useState(memberEmails[1]);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (value) => {
    setOpenDialog(false);
    setSelectedValue(value);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <Typography variant="h3" component="h1" fontWeight="bold" className="mb-6">
          Gym Management Settings
        </Typography>

        <Paper className="mx-auto p-6 bg-gray-900 rounded-lg shadow-lg" style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Account Settings */}
          <section className="mb-6">
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
              Member Account Settings
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  defaultValue="johnsmith"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  defaultValue="johnsmith@gym.com"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                />
              </Grid>
            </Grid>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              className="mb-4"
              defaultValue="********"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{ input: { color: 'white' }, label: { color: 'white' } }}
            />
            <Button variant="outlined" onClick={handleClickOpenDialog} sx={{ mt: 2 }}>
              Manage Members
            </Button>
            <Button variant="outlined" onClick={handleClickOpenAlert} sx={{ mt: 2, ml: 2 }}>
              Cancel Membership
            </Button>
          </section>

          <Divider sx={{ borderColor: 'white' }} />

          {/* Notification Preferences */}
          <section className="mt-6 mb-6">
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
              Notification Preferences
            </Typography>
            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch color="default" defaultChecked />}
                label="Class Notifications"
                sx={{ color: 'white' }}
              />
              <FormControlLabel
                control={<Switch color="default" />}
                label="Promotional Emails"
                sx={{ color: 'white' }}
              />
              <FormControlLabel
                control={<Switch color="default" />}
                label="Membership Updates"
                sx={{ color: 'white' }}
              />
            </Stack>
          </section>

          <Divider sx={{ borderColor: 'white' }} />

          {/* Privacy Settings */}
          <section className="mt-6 mb-6">
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
              Privacy Settings
            </Typography>
            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch color="default" defaultChecked />}
                label="Profile Visibility"
                sx={{ color: 'white' }}
              />
              <FormControlLabel
                control={<Switch color="default" />}
                label="Show Workout History"
                sx={{ color: 'white' }}
              />
            </Stack>
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6">
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: "#3f51b5",
                "&:hover": { backgroundColor: "#303f9f" },
                color: 'white'
              }}
              className="mr-4"
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Cancel sx={{ color: 'white' }} />}
              sx={{ color: 'white', borderColor: 'white' }}
              className="mr-4"
            >
              Cancel
            </Button>
          </div>
        </Paper>

        {/* Dialog for managing accounts */}
        <SimpleDialog
          selectedValue={selectedValue}
          open={openDialog}
          onClose={handleCloseDialog}
        />

        {/* Alert Dialog for membership cancellation */}
        <AlertDialog
          open={openAlert}
          onClose={handleCloseAlert}
        />
      </main>
    </div>
  );
}