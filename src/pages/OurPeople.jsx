import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

export default function OurPeople() {
  const CARD_WIDTH = 280;        // 👈 fixed card width (px)
  const TEXT_ZONE_MIN_HEIGHT = 110; // 👈 keep the text area the same height on every card

  const teamMembers = [
    { name: 'John Mainland', title: 'Executive Director', image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg' },
    { name: 'Justin McGovern', title: 'Program Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Drew Pavlou', title: 'Research Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Jordan Knight', title: 'Operations Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Will Bennett', title: 'Lead Consultant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Brian Jackson', title: 'Partnership Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Jordan Abouzeid', title: 'Strategy & Impact', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
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
                    aspectRatio: '1 / 1',        // change to '4 / 5' if you want portrait
                    backgroundColor: 'rgba(27, 60, 83, 0.05)',
                    flexShrink: 0,               // prevents “random” shrinking
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
                    minHeight: TEXT_ZONE_MIN_HEIGHT, // keep all cards the same height here
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,             // max two lines
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: 'calc(2 * 1.25em)',  // reserve space for 2 lines
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#D2C1B6',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 1,             // one line only
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: 'calc(1 * 1.4em)',   // reserve space for 1 line
                    }}
                  >
                    {member.title}
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
