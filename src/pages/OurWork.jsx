import React from 'react';
import { Container, Typography, Box, Paper, Link as MuiLink } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BannerImage from '../assets/1000028082.jpg'; // your uploaded banner image

export default function OurWork() {
  const reports = [
    {
      title: 'How We Win',
      description: 'Comprehensive overview of the strategic steps required for a National Conservative party to take power.',
      url: 'https://www.sample-pdf.com/2024-impact-report.pdf',
    },
    {
      title: 'Our Promise on Immigration',
      description: 'A deep-dive on renewed immigration policy for a cohesive, prosperous and self-confident Australia.',
      url: 'https://www.example.com/strategic-overview',
    },
    {
      title: 'Our Promise on Energy',
      description: 'Policy recommendations to unleash Australian energy production for households and businesses.',
      url: 'https://www.example.com/research',
    },
    {
      title: 'Our Promise on Housing',
      description: 'How do we restore the dream of home ownership for a new generation of Australians?.',
      url: 'https://www.example.com/case-studies',
    },
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />

        {/* Centered Text */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', // vertical centering
            textAlign: 'center',
            px: 2, // horizontal padding for mobile
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Our Work
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontWeight: 300,
              maxWidth: '900px',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
            }}
          >
            We are proud to share our latest reports and research. For more information, please get in contact with us directly.
          </Typography>
        </Box>
      </Box>

      {/* Reports Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
          {reports.map((report, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'white',
                border: '2px solid',
                borderColor: 'rgba(210, 193, 182, 0.3)',
                borderRadius: 2,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: { xs: 2, md: 4 },
                '&:hover': {
                  borderColor: 'accent.main',
                  boxShadow: '0 8px 20px rgba(27, 60, 83, 0.1)',
                },
              }}
            >
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    mb: 1,
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                  }}
                >
                  {report.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                  }}
                >
                  {report.description}
                </Typography>
              </Box>
              <MuiLink
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#D2C1B6',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  '&:hover': {
                    color: 'primary.main',
                    '& svg': { transform: 'translateX(4px)' },
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Access Report
                <ArrowForwardIcon sx={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }} />
              </MuiLink>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
