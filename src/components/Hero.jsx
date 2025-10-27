import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1B3C53 0%, #234C6A 50%, #456882 100%)',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://www.signatureluxurytravel.com.au/wp-content/uploads/2023/03/DGC_Aerial20_00040_edit.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 0, md: 2 } }}>
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

          <Button
            component={Link}
            to="/our-work"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#D2C1B6',
              color: '#1B3C53',
              px: 5,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(210, 193, 182, 0.4)',
              '&:hover': {
                backgroundColor: '#b8a597',
                boxShadow: '0 6px 20px rgba(210, 193, 182, 0.6)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
          >
            Discover Our Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
