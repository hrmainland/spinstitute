import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import BannerImage from '../assets/1000029219.jpg'; // Your uploaded banner

export default function OurPeople() {
  const CARD_WIDTH = 280;
  const TEXT_ZONE_MIN_HEIGHT = 80;

  const teamMembers = [
    { name: 'John Doe', image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg' },
    { name: 'Jane Smith', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shaquille_O%27Neal_Free_Throw.jpg/250px-Shaquille_O%27Neal_Free_Throw.jpg' },
    { name: 'Peng Shuai', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Peng_Shuai_Shirts_Australian_Open_%28cropped%29.jpg' },
    { name: 'Alex Johnson', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Portrait_Placeholder.png' },
    { name: 'Taylor Lee', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Chris Brown', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  ];

  return (
    <Box>
      {/* Full-width Banner */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          minWidth: '100%',
          height: 'calc(100vh - 56px)',
          overflow: 'hidden',
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} />

        {/* Centered text */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2,
            color: 'white',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            Our People
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Our people are embedded in existing political parties, academia, the bureaucracy,
            commerce and the law. We have networks around the country, and regularly host events in Sydney and Canberra as well as our spiritual home of Surfers Paradise.
          </Typography>
        </Box>
      </Box>

      {/* Team Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} sx={{ display: 'flex', flexBasis: CARD_WIDTH, maxWidth: CARD_WIDTH }}>
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
                {/* Image */}
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

                {/* Name */}
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
