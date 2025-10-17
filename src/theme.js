import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B3C53',
      light: '#234C6A',
      dark: '#0f2638',
    },
    secondary: {
      main: '#456882',
      light: '#6a8ba5',
      dark: '#2d475a',
    },
    accent: {
      main: '#D2C1B6',
      light: '#e5d9d0',
      dark: '#b8a597',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#1B3C53',
      secondary: '#456882',
    },
  },
  typography: {
    fontFamily: '"Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica", "Arial", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 32px',
        },
      },
    },
  },
});

export default theme;
