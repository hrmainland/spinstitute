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
      bio: 'John Mainland is a commercial lawyer who has worked across law, politics, commerce and policy development. He has served as an executive in several Australian businesses and held leadership roles within the Australian Liberal Party. A speaker of five languages, John holds two First Class Honours degrees in Law from the University of Oxford (LLB, BCL).',
    },
    {
      name: 'Justin McGovern',
      role: 'Deputy Executive Director',
      image: justinMcGovern,
      bio: 'Justin McGovern is a lawyer with extensive experience in government and policy. He has held senior advisory roles to Australian Government ministers and the Royal Australian Air Force. Justin brings a deep understanding of regulatory frameworks, governance, and strategic decision-making across public and private sectors. He was the recipient of the Ramsay Scholarship to the Oxford Master of Law (BCL).',
    },
    {
      name: 'Monica Lewis',
      role: 'Director of Research',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s',
      bio: 'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement.',
    },
    {
      name: 'Brian Jackson',
      role: 'Director of Finance',
      image: brianJackson,
      bio: 'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement.',
    },
    {
      name: 'Drew Pavlou',
      role: 'Director of Media and Outreach',
      image: drewPavlou,
      bio: 'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement.',
    },
    {
      name: 'Will Bennett',
      role: 'Board Secretary',
      image: willBennett,
      bio: 'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement.',
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
                  border: '1px solid rgba(210, 193, 182, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: 160,
                    objectFit: 'cover',
                    flexShrink: 0,
                    backgroundColor: 'rgba(27, 60, 83, 0.05)',
                  }}
                />

                {/* Fixed-size text box */}
                <Box
                  sx={{
                    p: 2,
                    height: 220, // fixed height for text
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 1 }}
                  >
                    {member.role}
                  </Typography>
                  {member.bio && (
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.primary', lineHeight: 1.5 }}
                    >
                      {member.bio}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
