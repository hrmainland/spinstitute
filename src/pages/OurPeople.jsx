import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

// === Team member photos ===
import johnMainland from '../assets/John-Mainland.jpg';
import justinMcGovern from '../assets/Justin-McGovern.jpg';
import willBennett from '../assets/Will-Bennett.jpg';
import brianJackson from '../assets/1000029810.jpg'; // fixed path
import drewPavlou from '../assets/Drew-Pavlou.jpg';

// === Full-width banner image ===
import bannerImage from '../assets/surf_life_saving_nsw_cover.jpg';

export default function OurPeople() {
  const teamMembers = [
    {
      name: 'John Mainland',
      role: 'Executive Director',
      image: johnMainland,
    },
    {
      name: 'Justin McGovern',
      role: 'Deputy Executive Director',
      image: justinMcGovern,
    },
    {
      name: 'Brian Jackson',
      role: 'Director of Finance',
      image: brianJackson,
    },
    {
      name: 'Drew Pavlou',
      role: 'Director of Media and Outreach',
      image: drewPavlou,
    },
    {
      name: 'Will Bennett',
      role: 'Board Secretary',
      image: willBennett,
    },
  ];

  return (
    <Box>
      {/* === Full-width Banner === */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          minWidth: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
          }}
        />

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
            Our people are embedded in existing political parties, academia,
            the bureaucracy, commerce and the law. We have networks around the
            country and regularly host events in Sydney, Canberra and Surfers
            Paradise.
          </Typography>
        </Box>
      </Box>

      {/* === Team Grid Section === */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid rgba(210, 193, 182, 0.3)',
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
                    backgroundColor: 'rgba(27, 60, 83, 0.05)',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                  >
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
