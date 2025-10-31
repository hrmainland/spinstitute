import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

// Team member photos
import johnMainland from '../assets/AI_headshot.jpg';
import justinMcGovern from '../assets/Justin-McGovern.jpg';
import willBennett from '../assets/Will-Bennett.jpg';
import drewPavlou from '../assets/Drew-Pavlou.jpg';

// Optional banner image
import bannerImage from '../assets/surf-life-saving-club.jpg';

export default function OurPeople() {
  const teamMembers = [
    {
      name: 'John Mainland',
      role: 'President',
      image: johnMainland,
    },
    {
      name: 'Justin McGovern',
      role: 'Vice President',
      image: justinMcGovern,
    },
    {
      name: 'Will Bennett',
      role: 'Secretary',
      image: willBennett,
    },
    {
      name: 'Drew Pavlou',
      role: 'Media Outreach',
      image: drewPavlou,
    },
  ];

  return (
    <Box>
      {/* Optional banner section */}
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Our People
        </Typography>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {member.role}
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
