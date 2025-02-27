import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Badge,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

const Navbar = ({ setSearchQuery, toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [darkMode] = useState(false);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const ROGIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "drop-shadow(0 0 10px red)", 
      }}
    >
      <path
        d="M5 25L20 35L40 10"
        stroke="red"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1200,
          width: "90%",
          maxWidth: 900,
          borderRadius: 12,
          backdropFilter: "blur(10px)",
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
          overflow: "hidden", 
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "300%",
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,70,0,0.8) 0%, rgba(255,154,0,0.8) 10%, rgba(208,222,33,0.8) 20%, rgba(79,220,74,0.8) 30%, rgba(63,218,216,0.8) 40%, rgba(47,201,226,0.8) 50%, rgba(28,127,238,0.8) 60%, rgba(95,21,242,0.8) 70%, rgba(186,12,248,0.8) 80%, rgba(251,7,217,0.8) 90%, rgba(255,0,0,0.8) 100%)",
            animation: "rainbowAnimation 5s linear infinite",
          },
        }}
      >
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar sx={{ minHeight: 56, justifyContent: "space-between" }}>
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ROGIcon />
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#ff0000",
                  textShadow: "0 0 10px #ff0000", 
                }}
              >
                CyberStore
              </Typography>
            </Link>

            {/* Search Bar */}
            <Box
              sx={{
                flexGrow: 1,
                mx: 2,
                display: "flex",
                justifyContent: "center",
                maxWidth: { xs: "100%", md: 300 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  width: "100%",
                }}
              >
                <InputBase
                  placeholder="Search Products..."
                  value={searchInput}
                  onChange={handleSearch}
                  sx={{ flex: 1, fontSize: "0.875rem" }}
                />
                <SearchIcon sx={{ color: "gray", fontSize: "1.25rem" }} />
              </Box>
            </Box>

            {/* Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              {/* Dark Mode Toggle */}
              <IconButton onClick={toggleTheme} color="inherit">
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Paper>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/cart">
                <ShoppingCartIcon sx={{ mr: 1 }} />
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
