import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BannerImage from "../assets/beach-aerial.jpg"; // uploaded banner image

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: "Email",
      detail: "info@spi.org.au",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: "Phone",
      detail: "+61 491 964 588",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      title: "Location",
      detail: "Gold Coast, Australia",
    },
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        {/* Centered text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              mb: 3,
              // textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 300,
              maxWidth: "900px",
              lineHeight: 1.6,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
            }}
          >
            The Surfers Paradise Institute aims to bring people together from
            across the Right. If you are interested in being involved in any
            way, please get in touch.
          </Typography>
        </Box>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid
          container
          spacing={4}
          sx={{
            mb: { xs: 8, md: 12 },
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {contactInfo.map((info, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  backgroundColor: "white",
                  border: "2px solid rgba(210, 193, 182, 0.3)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  width: "100%",
                  maxWidth: 300,
                  minWidth: 300,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  "&:hover": {
                    borderColor: "accent.main",
                    boxShadow: "0 8px 16px rgba(27, 60, 83, 0.1)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{info.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ color: "primary.main", mb: 1, fontWeight: 600 }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", wordBreak: "break-word" }}
                >
                  {info.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <p>
            <label>
              Your Name:
              <input type="text" name="name" required />
            </label>
          </p>

          <p>
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>
          </p>

          <p>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
          </p>

          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 6, maxWidth: 600, mx: "auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </Grid>
          </Grid>

          {submitted && (
            <Typography
              variant="body1"
              sx={{ mt: 2, color: "success.main", textAlign: "center" }}
            >
              Thank you! Your message has been sent.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
