import Link from 'next/link';
import { getAllWork, getHome } from '@/lib/content';
import {
  Container, Box, Typography, Button, Grid, Card, CardContent, Chip, Stack, CardActionArea, Divider, Paper
} from '@mui/material';

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }} aria-label={`${label} ${value}`}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: .5 }}>{label}</Typography>
        <Chip label={value} variant="outlined" />
      </CardContent>
    </Card>
  );
}

export const dynamic = 'force-static';

export default async function Home() {
  const [home, allWork] = await Promise.all([getHome(), getAllWork()]);
  // Order selected items per home.featuredWork
  const workMap = new Map(allWork.map(w => [w.slug, w]));
  const featured = home.featuredWork
    .map(slug => workMap.get(slug))
    .filter(Boolean);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      {/* Hero */}
      <Box component="section" aria-labelledby="hero-heading" sx={{ mb: 6 }}>
        <Typography id="hero-heading" variant="h1" sx={{ mb: 1 }}>
          {home.hero.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 900 }}>
          {home.hero.subhead}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
          {home.hero.ctas.map((c, i) => (
            <Button
              key={i}
              component={Link}
              href={c.href}
              variant={c.variant === 'outlined' ? 'outlined' : 'contained'}
              color={c.variant === 'outlined' ? 'secondary' : 'primary'}
            >
              {c.label}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* KPI / Outcome tiles */}
      {home.metrics?.length ? (
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {home.metrics.map((m, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <StatTile label={m.label} value={m.value} />
            </Grid>
          ))}
        </Grid>
      ) : null}

      {/* Featured Work */}
      <Box component="section" aria-labelledby="work-heading" sx={{ mb: 6 }}>
        <Typography id="work-heading" variant="h2" sx={{ mb: .5 }}>Selected Work</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Real projects showing leadership decisions, operating mechanisms, and outcomes.
        </Typography>

        <Grid container spacing={3}>
          {featured.map((item: any) => (
            <Grid key={item.slug} item xs={12} sm={6} md={4}>
              <Card variant="outlined">
                <CardActionArea component={Link} href={`/work/${item.slug}`} aria-label={`View ${item.title}`}>
                  <CardContent>
                    <Chip size="small" label={item.domain} sx={{ mb: 1, bgcolor: 'info.main', color: 'text.primary' }} />
                    <Typography variant="h3" sx={{ mb: .5 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{item.goal}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>Role — {item.role}</Typography>
                    {item.kpis?.length ? (
                      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" aria-label="Key outcomes">
                        {item.kpis.slice(0, 2).map((k: string, i: number) => <Chip key={i} label={k} variant="outlined" />)}
                      </Stack>
                    ) : null}
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 600, color: 'primary.main' }}>View case →</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Process band: Discover / Design / Develop / Deliver */}
      {home.process?.length ? (
        <Paper component="section" elevation={0} sx={{ border: '1px solid #E5E7EB', p: { xs: 2, md: 3 }, mb: 6 }} aria-labelledby="process-heading">
          <Typography id="process-heading" variant="h2" sx={{ mb: 2 }}>Operating Approach</Typography>
          <Grid container spacing={2}>
            {home.process.map((p, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: .5 }}>{String(i + 1).padStart(2, '0')}</Typography>
                  <Typography variant="h3" sx={{ mb: .5 }}>{p.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ) : null}

      {/* Footer CTA */}
      {home.footerCta ? (
        <Box component="section" aria-labelledby="cta-heading" sx={{ mt: 2 }}>
          <Typography id="cta-heading" variant="h2" sx={{ mb: .5 }}>{home.footerCta.title}</Typography>
          {home.footerCta.sub ? (
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{home.footerCta.sub}</Typography>
          ) : null}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={Link} href={home.footerCta.primary.href} variant="contained">
              {home.footerCta.primary.label}
            </Button>
            {home.footerCta.secondary ? (
              <Button component={Link} href={home.footerCta.secondary.href} variant="outlined" color="secondary">
                {home.footerCta.secondary.label}
              </Button>
            ) : null}
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
}
