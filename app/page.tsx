import Link from 'next/link';
import { getAllWork } from '@/lib/content';
import { Container, Box, Typography, Button, Grid, Card, CardContent, Chip, Stack } from '@mui/material';

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: .5 }}>{label}</Typography>
        <Chip label={value} variant="outlined" />
      </CardContent>
    </Card>
  );
}

export const dynamic = 'force-static';

export default async function Home() {
  const work = await getAllWork();
  const items = [...work].slice(0, 6);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Box component="section" aria-labelledby="hero-heading" sx={{ mb: 6 }}>
        <Typography id="hero-heading" variant="h1" sx={{ mb: 1 }}>
          I align Product, Design, and Engineering to deliver the right outcomes under real constraints.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 900 }}>
          UX & Product Design Manager focused on modernizing complex, multi-product ecosystems with clear decision mechanisms and measurable results.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
          <Button component={Link} href="/work" variant="contained">View Selected Work</Button>
          <Button component={Link} href="/resume" variant="outlined" color="secondary">View Résumé</Button>
        </Stack>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Adoption" value="↑ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Time-to-value" value="↓ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Ramp time" value="↓ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Release quality" value="↑ [placeholder]" /></Grid>
        </Grid>
      </Box>

      <Box component="section" aria-labelledby="work-heading">
        <Typography id="work-heading" variant="h2" sx={{ mb: .5 }}>Selected Work</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Real projects showing leadership decisions, operating mechanisms, and outcomes.
        </Typography>

        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.slug} item xs={12} sm={6} md={4}>
              <Card component={Link as any} href={`/work/${item.slug}`} variant="outlined"
                sx={{ textDecoration: 'none', ':hover': { boxShadow: 3, transform: 'translateY(-2px)' }, transition: 'box-shadow .2s, transform .2s' }}>
                <CardContent>
                  <Chip size="small" label={item.domain} sx={{ mb: 1, bgcolor: 'info.main', color: 'text.primary' }} />
                  <Typography variant="h3" sx={{ mb: .5 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{item.goal}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>Role — {item.role}</Typography>
                  {item.kpis?.length ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                      {item.kpis.slice(0, 2).map((k, i) => <Chip key={i} label={k} variant="outlined" />)}
                    </Stack>
                  ) : null}
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 600, color: 'primary.main' }}>View case →</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
