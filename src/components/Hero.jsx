import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Logo from '../assets/Updated no background logo.png';
import SurfImg from '../assets/womanatsurfersparadise.jpg';
import FlagImg from '../assets/flag.avif';
import SkylineImg from '../assets/DGC_Aerial20_00040_edit.jpg'; // keep your original

const heroImages = [SkylineImg, SurfImg, FlagImg];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Background Montage */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImages[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          opacity: 0.7,
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 0, md: 2 } }}>
          {/* Logo with Thick White Outline */}
          <Box
            sx={{
              mb: 3,
              display: 'inline-block',
              filter: `
                drop-shadow(0 0 4px white)
                drop-shadow(0 0 4px white)
              `,
            }}
          >
            <img
              src={Logo}
              alt="Institute Logo"
              style={{ height: '200px', display: 'block', margin: '0 auto' }}
            />
          </Box>

          {/* Hero Text */}
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
              fontWeight: 700,
            }}
          >
            The Surfers Paradise Institute
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              mb: 6,
              fontWeight: 300,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Rejuvenating the Australian Right through policy, strategy and training.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
