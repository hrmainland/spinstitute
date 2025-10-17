import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Email',
      detail: 'info@spinstitute.org',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      title: 'Location',
      detail: 'Sydney, Australia',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Contact Us
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
            We'd love to hear from you. Get in touch with us today and let's start a conversation about how we can help.
          </Typography>
        </Box>

        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 }, justifyContent: 'center' }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: 'white',
                  border: '2px solid',
                  borderColor: 'rgba(210, 193, 182, 0.3)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'accent.main',
                    boxShadow: '0 8px 16px rgba(27, 60, 83, 0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{info.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  {info.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={0} sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                backgroundColor: 'white',
                border: '2px solid',
                borderColor: 'rgba(210, 193, 182, 0.3)',
                borderRadius: 3,
              }}
            >
              {submitted && (
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    border: '2px solid rgba(76, 175, 80, 0.5)',
                    borderRadius: 2,
                  }}
                >
                  <Typography sx={{ color: '#2e7d32', fontWeight: 600 }}>
                    Thank you! We've received your message and will get back to you soon.
                  </Typography>
                </Box>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(248, 249, 251, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(27, 60, 83, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(248, 249, 251, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(27, 60, 83, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={6}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(248, 249, 251, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(27, 60, 83, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    width: '100%',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    py: 1.8,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      boxShadow: '0 4px 12px rgba(27, 60, 83, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
