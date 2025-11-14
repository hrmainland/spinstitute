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
      bio: 'John is a commercial lawyer who has worked across the court system, politics, commerce and policy development. He has served as an executive in several Australian businesses and held leadership roles within the Liberal Party. A speaker of five languages, John holds two First Class Honours degrees in Law from the University of Oxford (LLB, BCL).',
    },
    {
      name: 'Justin McGovern',
      role: 'Deputy Executive Director',
      image: justinMcGovern,
      bio: 'Justin is a seasoned commercial lawyer with extensive experience in government and policy. He has held senior advisory roles to Australian Government and served in the Royal Australian Air Force. Justin brings a deep understanding of regulatory frameworks, governance, and strategic decision-making across public and private sectors. He holds First Class degrees in Law and Arts, and was recently the recipient of the Ramsay Scholarship to the Oxford Master of Law (BCL).',
    },
    {
      name: 'Monica Lewis',
      role: 'Director of Research',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s',
      bio: 'Monica brings experience spanning consulting, banking, venture capital and strategy. She has held senior roles at Bain & Company, ANZ Ventures and Australian fintechs. Monica holds a Bachelor of Arts from the University of Sydney and completed the Venture Capital Executive Program at the University of California, Berkeley.',
    },
    {
      name: 'Brian Jackson',
      role: 'Director of Finance',
      image: brianJackson,
      bio: 'Brian is an economist who brings over 20 years of global experience in economic policy, market analysis, and strategy. He has worked for the Reserve Bank of Australia, the Bank of England, the Federal Reserve, as well as in private banking, investment banking, and hedge funds.',
    },
    {
      name: 'Drew Pavlou',
      role: 'Director of Media and Outreach',
      image: drewPavlou,
      bio: 'Drew is an activist and media personality, known for critiquing communist and authoritarian governments. He has been retweeted by Elon Musk and JD Vance, and featured in global outlets including The New York Times, advocating for human rights, free speech, and democratic reform on the international stage..',
    },
    {
      name: 'Will Bennett',
      role: 'Board Secretary',
      image: willBennett,
      bio: 'Will is a journalist and policy specialist with experience across media, government, and the private sector. He has written for The Spectator, the AFR, and Forbes in New York, and has worked as a policy adviser and consultant. He holds master’s degrees from New York University (Business and Economic Reporting) and the University of Cambridge (MPP).',
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
