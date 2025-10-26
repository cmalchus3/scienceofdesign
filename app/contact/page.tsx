import { Container, Typography, Stack, Button, Box, Chip } from '@mui/material';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Typography variant="h1" sx={{ mb: 1 }}>Contact</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
        Ready to discuss outcomes? Email or connect on LinkedIn.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button component="a" href="mailto:christina@scienceofdesign.io" variant="contained">Email</Button>
        <Button component={Link} href="https://linkedin.com/in/christina-alchus" target="_blank" rel="noopener noreferrer" variant="outlined" color="secondary">LinkedIn</Button>
      </Stack>
      <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip label="Ashburn, VA" />
        <Chip label="Remote-friendly" />
      </Box>
    </Container>
  );
}
