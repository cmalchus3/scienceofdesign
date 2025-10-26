import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

export const dynamic = 'force-static';

export default function FusionMethod() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Typography variant="h1" sx={{ mb: 1 }}>Fusion Method</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
        Detailed paper coming soon. This anchors your method in navigation for recruiters.
      </Typography>
      <Button component={Link} href="/methods/fusion-method/purple-team" variant="outlined" color="secondary">
        Purple Team
      </Button>
    </Container>
  );
}
