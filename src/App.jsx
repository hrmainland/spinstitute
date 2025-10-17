import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Box, ThemeProvider, IconButton, Menu, MenuItem, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import OurPeople from './pages/OurPeople';
import ContactUs from './pages/ContactUs';
import logo from './assets/logo.jpeg';
import title from './assets/title.png';

function AppContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const pathToTab = {
      '/': 0,
      '/our-work': 1,
      '/our-people': 2,
      '/contact-us': 3,
    };
    setActiveTab(pathToTab[location.pathname] || 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overscrollBehavior: 'none' }}>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              backgroundColor: scrolled ? 'transparent' : 'rgba(248, 249, 251, 0.96)',
              backdropFilter: scrolled ? 'none' : 'blur(12px)',
              borderBottom: scrolled ? 'none' : '1px solid rgba(27, 60, 83, 0.08)',
              transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: scrolled ? 0 : 1,
              pointerEvents: scrolled ? 'none' : 'auto',
              willChange: 'opacity',
            }}
          >
            <Toolbar sx={{ py: 0.25, display: 'flex', alignItems: 'center', minHeight: 56 }}>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                <img
                  src={title}
                  alt="Surfers Paradise Institute"
                  style={{
                    height: '50px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: '#1B3C53',
                }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 2,
                    mt: 1,
                    minWidth: 200,
                    boxShadow: '0 8px 24px rgba(27, 60, 83, 0.15)',
                    border: '1px solid rgba(27, 60, 83, 0.1)',
                  },
                  '& .MuiMenuItem-root': {
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: '#456882',
                    py: 1.5,
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(27, 60, 83, 0.06)',
                      color: '#1B3C53',
                    },
                  },
                }}
              >
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/our-work" onClick={handleMenuClose}>
                  Our Work
                </MenuItem>
                <MenuItem component={Link} to="/our-people" onClick={handleMenuClose}>
                  Our People
                </MenuItem>
                <MenuItem component={Link} to="/contact-us" onClick={handleMenuClose}>
                  Contact Us
                </MenuItem>
              </Menu>

              {/* Desktop Tabs */}
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="inherit"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  ml: 'auto',
                  '& .MuiTab-root': {
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    minHeight: 56,
                    minWidth: 90,
                    textTransform: 'none',
                    color: '#456882',
                    px: 2,
                    '&:hover': {
                      color: '#1B3C53',
                      backgroundColor: 'rgba(27, 60, 83, 0.05)',
                    },
                    '&.Mui-selected': {
                      color: '#1B3C53',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#D2C1B6',
                    height: 3,
                  },
                }}
              >
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Our Work" component={Link} to="/our-work" />
                <Tab label="Our People" component={Link} to="/our-people" />
                <Tab label="Contact Us" component={Link} to="/contact-us" />
              </Tabs>
            </Toolbar>
          </AppBar>

          <Toolbar sx={{ py: 0.25, display: 'flex', alignItems: 'center', minHeight: 56 }} />

          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-people" element={<OurPeople />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Box>
        </Box>
    </ThemeProvider>
  );
}
export default function App() {
  return <AppContent />;
}
