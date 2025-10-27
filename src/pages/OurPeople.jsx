{/* Page Header with background */}
<Box
  sx={{
    position: 'relative',
    mb: { xs: 6, md: 8 },
    textAlign: 'center',
    color: 'white',
    minHeight: { xs: 350, md: 500 }, // ensures the banner is visible
    py: { xs: 8, md: 10 },
    backgroundImage:
      'url("https://www.signatureluxurytravel.com.au/wp-content/uploads/2023/03/DGC_Aerial20_00040_edit.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 2,
    overflow: 'hidden',
  }}
>
  {/* dark overlay for text readability */}
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
        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
