{/* Page Header with background */}
<Box
  sx={{
    position: 'relative',
    mb: { xs: 6, md: 8 },
    textAlign: 'center',
    py: { xs: 8, md: 10 },
    color: 'white',
    backgroundImage:
      'url("https://ballrealty.com.au/sites/ballrealty/media/blog/21805317085_b9f34e59a9_o.jpg")',
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
