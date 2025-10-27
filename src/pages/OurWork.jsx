import React from 'react';
import { Container, Typography, Box, Link as MuiLink, Paper, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      description: 'Polic recommendations to unleash Australian energy production for households and businesses.',
      url: 'https://www.example.com/research',
    },
    {
      title: 'Our Promise on Housing',
      description: 'How do we restore the dream of home ownership for a new generation of Australians?.',
      url: 'https://www.example.com/case-studies',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          {/* Decorative accent line */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: '#D2C1B6',
              borderRadius: '2px',
              mx: 'auto',
              mb: 4,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Our Work
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
            We are proud to share our latest reports and research. For more information please get in contact with us directly.
          </Typography>
        </Box>

        {/* Reports List */}
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
                    '& svg': {
                      transform: 'translateX(4px)',
                    },
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
