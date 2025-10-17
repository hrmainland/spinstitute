import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function MissionStatement() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #1B3C53 0%, #234C6A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#D2C1B6',
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Our Mission
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              lineHeight: 1.8,
              mb: 4,
              fontWeight: 300,
            }}
          >
            At Surfers Paradise Institute, we believe in the transformative power of
            education and leadership development. Our mission is to empower individuals
            and organizations to reach their full potential through innovative thinking,
            collaborative partnerships, and evidence-based practices.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.15rem', md: '1.3rem' },
              lineHeight: 1.8,
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            We are committed to creating lasting impact in our communities by
            developing tomorrow's leaders today.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
