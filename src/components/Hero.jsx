<Box>
  {/* Full-width Banner */}
  <Box
    sx={{
      position: 'relative',
      width: '100%',           // ensure full width
      height: 'calc(100vh - 56px)',
      overflow: 'hidden',
      backgroundImage: `url(${BannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Dark overlay */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.45)',
      }}
    />

    {/* Centered text */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
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
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}
      >
        Our People
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800, // expand slightly wider
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 300,
          lineHeight: 1.8,
        }}
      >
        Our people are embedded in existing political parties, academia, the bureaucracy,
        commerce and the law. We have networks around the country, and regularly host events in Sydney and Canberra as well as our spiritual home of Surfers Paradise.
      </Typography>
    </Box>
  </Box>
</Box>
