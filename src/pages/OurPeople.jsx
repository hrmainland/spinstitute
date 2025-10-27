{/* Page Header with background */}
<Box
  sx={{
    position: 'relative',
    mb: { xs: 6, md: 8 },
    textAlign: 'center',
    py: { xs: 8, md: 10 },
    color: 'white',
    backgroundImage:
      'url("https://www.signatureluxurytravel.com.au/wp-content/uploads/2023/03/DGC_Aerial20_00040_edit.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 2,
    overflow: 'hidden',
  }}
>
  {/* optional dark overlay for text readability */}
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
      Our People
    </Typography>
    <Typography
      variant="body1"
      sx={{
        maxWidth: '700px',
        mx: 'auto',
        fontSize: { xs: '1.1rem', md: '1.2rem' },
        lineHeight: 1.8,
      }}
    >
      Our people are embedded in existing political parties, academia, the bureaucracy,
      commerce and the law. We have networks around the country and regularly host events in the Gold Coast, Sydney and Canberra. 
    </Typography>
  </Box>
</Box>
