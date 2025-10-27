import React from 'react';
import { Container, Typography, Box, Link as MuiLink, Paper } from '@mui/material';
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
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">

        {/* Page Header with background */}
        <Box
          sx={{
            position: 'relative',
            mb: { xs: 6, md: 8 },
            textAlign: 'center',
            color: 'white',
            minHeight: { xs: 350, md: 500 },
            py: { xs: 8, md: 10 },
            backgroundImage:
              'url("https://ballrealty.com.au/sites/ballrealty/media/blog/21805317085_b9f34e59a9_o.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Dark overlay for text readability */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.45)',
              zIndex: 1,
            }}
          />

          {/* Header content */}
          <Box sx={{ position: 'relative', zIndex: 2 }}>
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
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              }}
            >
              Our Work
            </Typography>
            <Typography
              variant="body1"
              sx={{
