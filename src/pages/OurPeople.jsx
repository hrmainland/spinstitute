import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import johnHeadshot from '../assets/AI_headshot.jpg';
import bannerImage from '../assets/surf_life_saving_nsw_cover.jpg'; // <-- local banner

const teamMembers = [
  {
    name: 'John Mainland',
    role: 'President',
    image: johnHeadshot,
  },
];

export default function OurPeople() {
  const CARD_WIDTH = 280;
  const TEXT_ZONE_MIN_HEIGHT = 100;

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
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} />

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
            sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700, mb: 2 }}
          >
            Our People
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 700, fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 300, lineHeight: 1.8 }}
          >
            Our people are embedded in existing political parties, academia, the bureaucracy,
            commerce and the law. We have networks around the country and regularly host events in
            Sydney, Canberra and Surfers Paradise.
          </Typography>
        </Box>
      </Box>

      {/* === Team Grid Section === */}
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
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                </Box>

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
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600, lineHeight: 1.25 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', fontWeight: 400 }}>
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
