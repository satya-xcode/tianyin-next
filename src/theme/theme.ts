'use client'
import { createTheme, responsiveFontSizes } from '@mui/material';
// Step 1: Base theme to access breakpoints
const baseTheme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Professional blue
      dark: '#004ba0',
      light: '#63a4ff',
    },
    secondary: {
      main: '#ff4081', // Modern pink accent
      dark: '#c60055',
      light: '#ff79b0',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  shape: {
    borderRadius: 8, // Material Design default
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined'
      }
    }
  },
});

// Step 2: Use baseTheme's breakpoints in the real theme
let theme = createTheme(baseTheme, {
  typography: {
    button: {
      textTransform: 'none', // Android-like buttons
    },
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      // fontWeight: 700,
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      // fontWeight: 600,
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.1rem',
      },
    },
  }

});

// Optional: Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
