'use client'
import { colors, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.deepPurple[700],
    }
  },
});

export default theme;
