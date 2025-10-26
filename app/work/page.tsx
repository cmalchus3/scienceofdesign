import { getAllWork } from '@/lib/content';
import Link from 'next/link';
import { Container, Box, Typography, Grid, Card, CardContent, Chip, Stack, Button } from '@mui/material';

export const dynamic = 'force-static';

export default async function WorkPage() {
  const work = await getAllWork();
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1" sx={{ mb: 1 }}>Selected Work</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Leadership case studies with strategy, team guidance, and measurable outcomes.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {work.map((item) => (
          <Grid key={item.slug} item xs={12} sm={6} md={4}>
            <Card component={Link as any} href={`/work/${item.slug}`} variant="outlined"
              sx={{ textDecoration: 'none', ':hover': { boxShadow: 3, transform: 'translateY(-2px)' } }}>
              <CardContent>
                <Chip size="small" label={item.domain} sx={{ mb: 1, bgcolor: 'info.main', color: 'text.primary' }} />
                <Typography variant="h3" sx={{ mb: .5 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{item.goal}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>Role — {item.role}</Typography>
                {item.kpis?.length ? (
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {item.kpis.slice(0, 3).map((k, i) => <Chip key={i} label={k} variant="outlined" />)}
                  </Stack>
                ) : null}
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 600, color: 'primary.main' }}>View case →</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Button component={Link} href="/resume" variant="outlined" color="secondary">View Résumé</Button>
      </Box>
    </Container>
  );
}
