import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

// === Team member photos ===
import johnMainland from '../assets/johnmainland.jpg';
import justinMcGovern from '../assets/Justin-McGovern.jpg';
import willBennett from '../assets/Will-Bennett.jpg';
import brianJackson from '../assets/1000029810.jpg';
import drewPavlou from '../assets/Drew-Pavlou.jpg';

// === Full-width banner image ===
import bannerImage from '../assets/surf_life_saving_nsw_cover.jpg';

export default function OurPeople() {
  const teamMembers = [
    {
      name: 'John Mainland',
      role: 'Executive Director',
      image: johnMainland,
      bio: 'John Mainland is a commercial lawyer with experience across law, politics, commerce, and policy development. He holds two First Class Honours degrees in Law from Oxford and speaks five languages.',
    },
    {
      name: 'Justin McGovern',
      role: 'Deputy Executive Director',
      image: justinMcGovern,
      bio: 'Justin McGovern is a lawyer experienced in government and policy, with senior advisory roles in both public and private sectors. Recipient of the Ramsay Scholarship to Oxford (BCL).',
    },
    {
      name: 'Monica Lewis',
      role: 'Director of Research',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s',
      bio: 'Monica Lewis leads research initiatives, focusing on data-driven insights and policy evaluation.',
    },
    {
      name: 'Brian Jackson',
      role: 'Director of Finance',
      image: brianJackson,
      bio: 'Brian Jackson manages financial strategy and ensures robust fiscal oversight across the organisation.',
    },
    {
      name: 'Drew Pavlou',
      role: 'Director of Media and Outreach',
      image: drewPavlou,
      bio: 'Drew Pavlou drives media strategy and outreach initiatives, strengthening public engagement.',
    },
    {
      name: 'Will Bennett',
      role: 'Board Secretary',
      image: willBennett,
      bio: 'Will Bennett oversees governance and administration, ensuring board operations run smoothly.',
    },
  ];

  return (
    <Box>
      {/* === Full-width Banner === */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '70vh' },
          overflow: 'hidden',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              fontSize: { xs: '2rem', md: '4rem' },
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
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Our people are embedded in political parties, academia, the bureaucracy, commerce, and the law. We have networks around the country and regularly host events in Sydney, Canberra, and Surfers Paradise.
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
                  border: '1px solid rgba(210, 193, 182, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: 2,
                  py: 3,
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 140,
                    height: 140,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 1 }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.4,
                    fontSize: '0.8rem',
                    textAlign: 'center',
                  }}
                >
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
