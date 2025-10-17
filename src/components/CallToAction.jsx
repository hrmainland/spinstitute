import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(27, 60, 83, 0.03) 0%, rgba(69, 104, 130, 0.05) 100%)',
            border: '2px solid',
            borderColor: 'rgba(210, 193, 182, 0.3)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'primary.main',
              mb: 3,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Ready to Transform Your Organization?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 5,
              fontSize: { xs: '1.05rem', md: '1.15rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join the hundreds of organizations that have partnered with Spin Institute
            to develop exceptional leaders and create lasting impact.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              component={Link}
              to="/contact-us"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                px: 4,
                py: 1.8,
                fontSize: '1.05rem',
                fontWeight: 600,
                minWidth: { xs: '100%', sm: 'auto' },
                boxShadow: '0 4px 14px rgba(27, 60, 83, 0.3)',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  boxShadow: '0 6px 20px rgba(27, 60, 83, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get in Touch
            </Button>

            <Button
              component={Link}
              to="/our-work"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.8,
                fontSize: '1.05rem',
                fontWeight: 600,
                minWidth: { xs: '100%', sm: 'auto' },
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(27, 60, 83, 0.04)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Our Work
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
