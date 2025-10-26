'use client';
import { Box, Container, Typography, Stack, Link as MLink } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid #E5E7EB', mt: 6, py: 3 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="body2">© {new Date().getFullYear()} Christina Alchus</Typography>
        <Stack direction="row" spacing={2}>
          <MLink component={Link} href="/work" underline="hover">Work</MLink>
          <MLink component={Link} href="/resume" underline="hover">Résumé</MLink>
          <MLink component={Link} href="/contact" underline="hover">Contact</MLink>
        </Stack>
      </Container>
    </Box>
  );
}
