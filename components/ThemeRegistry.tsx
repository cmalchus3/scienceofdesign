'use client';

import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

/** Brand colors provided */
const BRAND_ORANGE = '#f43a09';    // Brightly Orange Number 2
const BRAND_SUN = '#ffb766';       // Grandpa Orange
const BRAND_MINT = '#c2edda';      // Grey Blue Green
const BRAND_GREEN = '#68d388';     // Live Green

let theme = createTheme({
  palette: {
    primary: { main: BRAND_ORANGE, contrastText: '#ffffff' },
    secondary: { main: BRAND_SUN, contrastText: '#0F172A' },
    success: { main: BRAND_GREEN },
    info: { main: BRAND_MINT, contrastText: '#0F172A' },
    text: { primary: '#0F172A', secondary: '#334155' },
    divider: '#E5E7EB',
    background: { default: '#F8FAFC', paper: '#FFFFFF' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`,
    h1: { fontWeight: 800, fontSize: '2.75rem', lineHeight: 1.2, letterSpacing: '-0.01em' },
    h2: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.25 },
    h3: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.3 },
    body1: { fontSize: '1rem', lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiCard: { styleOverrides: { root: { border: '1px solid #E5E7EB' } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 500 } } }
  }
});
theme = responsiveFontSizes(theme);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
