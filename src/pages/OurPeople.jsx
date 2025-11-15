import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

// === Team member photos ===
import johnMainland from '../assets/johnmainland.jpg';
import justinMcGovern from '../assets/Justin-McGovern.jpg';
import willBennett from '../assets/Will-Bennett.jpg';
import brianJackson from '../assets/1000029810.jpg';
import drewPavlou from '../assets/Drew-Pavlou.jpg';
import monicaLewis from '../assets/MonicaLewis.jpg';

// === Full-width banner image ===
import bannerImage from '../assets/surf_life_saving_nsw_cover.jpg';

export default function OurPeople() {
  const teamMembers = [
    {
      name: 'John Mainland',
      role: 'Executive Director',
      image: johnMainland,
      bio: 'John is a commercial litigator who has served as an executive in a number of Australian businesses and held leadership roles within the Liberal Party. A speaker of five languages, John holds two First Class Honours degrees in Law from the University of Oxford (LLB, BCL).',
    },
    {
      name: 'Justin McGovern',
      role: 'Deputy Executive Director',
      image: justinMcGovern,
      bio: 'Justin is a seasoned commercial lawyer with extensive experience in government and policy. He has held senior advisory roles to Australian Government and served in the RAAF. He holds First Class degrees in Law and Arts, was a Ramsay Scholar at the Oxford Master of Law (BCL).',
    },
    {
      name: 'Monica Lewis',
      role: 'Director of Research',
      image: monicaLewis,
      bio: 'Monica brings experience spanning consulting, banking, venture capital and strategy. She has held senior roles at Bain & Company, ANZ Ventures and Australian fintechs. Monica has studied at the Universities of Sydney (BA) and California, Berkeley (VC Executive Program).',
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
      bio: 'Drew is an activist and media personality, known for his vociferous criticism of communist and authoritarian governments. He has been retweeted by Elon Musk and JD Vance, and featured in outlets including The New York Times, the Australian and the Spectator.',
    },
    {
      name: 'Will Bennett',
      role: 'Board Secretary',
      image: willBennett,
      bio: 'Will is a journalist and policy specialist with experience across media, government, and the private sector. He has written for The Spectator, the AFR, and Forbes in New York, and has worked as a policy adviser and consultant. He holds a policy Masters from Cambridge (MPP).',
    },
  ];

  return (
    <Box>
      {/* === Full-width Banner === */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '100vh', md: '100vh' },
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
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={4} sm={4} md={3}>
              <Paper
                elevation={3}
                sx={{
                  width: 300,
                  height: 450,
                  borderRadius: 3,
                  textAlign: 'center',
                  border: '1px solid rgba(210, 193, 182, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: 2,
                  py: 3,
                  backgroundColor: '#fff',
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
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    width: '80%',
                    height: '1px',
                    backgroundColor: 'rgba(210, 193, 182, 0.4)',
                    mb: 1.5,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main', flexShrink: 0 }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 1, flexShrink: 0 }}
                >
                  {member.role}
                </Typography>
                <Box
                  sx={{
                    width: '80%',
                    height: '1px',
                    backgroundColor: 'rgba(210, 193, 182, 0.4)',
                    mb: 1.5,
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    overflow: 'auto',
                    flexGrow: 1,
                    width: '100%',
                    px: 1,
                  }}
                >
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
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
