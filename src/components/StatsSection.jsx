import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function MissionStatement() {
  const missionPoints = [
    "Reform immigration policy for a sustainable, socially cohesive Australia.",
    "Restore the dream of home ownership through both supply and demand side reforms.",
    "Reduce energy prices for cost of living relief and economic prosperity.",
    "Reinforce democratic accountability of our federal and state bureaucracies.",
    "Revive the purpose and integrity of our educational institutions."
  ];

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

          <Box component="ul" sx={{ textAlign: 'left', mb: 4, pl: 4 }}>
            {missionPoints.map((point, index) => (
              <Typography
                component="li"
                key={index}
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  lineHeight: 1.8,
                  fontWeight: 300,
                  mb: 2,
                }}
              >
                {point}
              </Typography>
            ))}
          </Box>

          {/* Ancient Greek motto */}
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
            
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
