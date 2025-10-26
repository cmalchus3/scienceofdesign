import { Container, Typography } from '@mui/material';
export const dynamic = 'force-static';

export default function PurpleTeam() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Typography variant="h1" sx={{ mb: 1 }}>Purple Team</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Placeholder subpage. We’ll drop the white paper content here later.
      </Typography>
    </Container>
  );
}
