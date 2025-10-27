import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/Updated no background logo.png";
import cityFromBeach from "../assets/city-from-beach.jpg";
import beachAerial from "../assets/beach-aerial.jpg";
import surfLifeSavingClub from "../assets/surf-life-saving-club.jpg";
import womanAtSurfersParadise from "../assets/womanatsurfersparadise.jpg";

export default function Hero() {
  const images = [
    "https://www.signatureluxurytravel.com.au/wp-content/uploads/2023/03/DGC_Aerial20_00040_edit.jpg",
    cityFromBeach,
    beachAerial,
    surfLifeSavingClub,
    womanAtSurfersParadise
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: currentImageIndex === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(27, 60, 83, 0.4) 0%, rgba(35, 76, 106, 0.4) 50%, rgba(69, 104, 130, 0.4) 100%)",
        }}
      />
              {/* <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} /> */}
      

      {/* Centered Text */}
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

        {/* Logo with Thick White Outline */}
        {/* <Box
          sx={{
            mb: 3,
            display: "inline-block",
            filter: `
         drop-shadow(0 0 4px white)
         drop-shadow(0 0 4px white)
       `,
          }}
        >
          <img
            src={Logo}
            alt="Institute Logo"
            style={{ height: "200px", display: "block", margin: "0 auto" }}
          />
        </Box> */}


        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            fontWeight: 700,
            mb: 3,
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          The Surfers Paradise Institute
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
          Rejuvenating the Australian Right through policy, strategy and
          training.
        </Typography>
      </Box>
    </Box>
  );
}
