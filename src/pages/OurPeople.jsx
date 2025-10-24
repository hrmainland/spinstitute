import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

export default function OurPeople() {
  const CARD_WIDTH = 280;        // 👈 fixed card width (px)
  const TEXT_ZONE_MIN_HEIGHT = 80; // 👈 keep the text area the same height on every card

  const teamMembers = [
    { name: 'Jim Mainland', image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg' },
    { name: 'Justin McGovern', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Drew Pavlou', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Jordan Knight', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Will Bennett', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Brian Jackson', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Jordan Abouzeid', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          {/* Decorative accent line */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: '#D2C1B6',
              borderRadius: '2px',
              mx: 'auto',
              mb: 4,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Our People
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              lineHeight: 1.8,
            }}
          >
            Meet the talented and dedicated individuals who drive our mission forward every day.
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          sx={{ justifyContent: 'center' }}
        >
          {teamMembers.map((member, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: 'flex',
                // fixed-width column that still wraps responsively
                flexBasis: CARD_WIDTH,
                maxWidth: CARD_WIDTH,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: CARD_WIDTH,
                  overflow: 'hidden',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '2px solid',
                  borderColor: 'rgba(210, 193, 182, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* IMAGE AREA: fixed ratio, never shrinks */}
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    backgroundColor: 'rgba(27, 60, 83, 0.05)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                  />
                </Box>

                {/* CONTENT AREA: fixed height budget + clamped text */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 1,
                    minHeight: TEXT_ZONE_MIN_HEIGHT,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
