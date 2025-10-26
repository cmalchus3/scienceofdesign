'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}
      sx={{ borderBottom: '1px solid #E5E7EB', backdropFilter: 'blur(6px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            <Link href="/">Science of Design</Link>{' '}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: .5 }}>
              by Christina Alchus
            </Typography>
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box role="navigation" aria-label="Primary" sx={{ display: 'flex', gap: 1.5 }}>
            <Button component={Link} href="/work" color="inherit">Work</Button>
            <Button component={Link} href="/resume" color="inherit">Résumé</Button>
            <Button component={Link} href="/methods/fusion-method" color="inherit">Methods</Button>
            <Button component={Link} href="/contact" variant="contained" color="primary">Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
