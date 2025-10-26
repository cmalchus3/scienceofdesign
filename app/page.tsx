import Link from 'next/link';
import { getAllWork } from '@/lib/content';
import {
  Container, Box, Typography, Button, Grid, Card, CardContent, Chip, Stack, Divider
} from '@mui/material';
import {
  Insights, Hub, Layers, QueryStats, DesignServices, Architecture, Science, Build,
  RocketLaunch, Assessment, IntegrationInstructions, Timeline
} from '@mui/icons-material';

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }} aria-label={label}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: .5 }}>
          {label}
        </Typography>
        <Chip label={value} variant="outlined" />
      </CardContent>
    </Card>
  );
}

function SkillBlock({
  title,
  items,
  Icon
}: {
  title: string;
  items: string[];
  Icon: typeof DesignServices;
}) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Icon fontSize="small" aria-hidden />
          <Typography variant="h3">{title}</Typography>
        </Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {items.map((s, i) => (
            <Chip key={i} label={s} variant="outlined" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

function ProcessStep({
  step,
  title,
  body,
  Icon
}: {
  step: string;
  title: string;
  body: string;
  Icon: typeof Science;
}) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: .5 }}>
          <Icon fontSize="small" aria-hidden />
          <Typography variant="overline" sx={{ lineHeight: 1 }}>{step}</Typography>
        </Stack>
        <Typography variant="h3" sx={{ mb: .5 }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{body}</Typography>
      </CardContent>
    </Card>
  );
}

export const dynamic = 'force-static';

export default async function Home() {
  // spotlight = specific cases from your content JSON
  const work = await getAllWork();
  const spotlightSlugs = new Set(['ngamow', 'fortutide', 'bluerock']);
  const spotlight = work.filter(w => spotlightSlugs.has(w.slug));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      {/* Hero */}
      <Box component="section" aria-labelledby="hero-heading" sx={{ mb: 5 }}>
        <Typography id="hero-heading" variant="h1" sx={{ mb: 1 }}>
          Product, Design, and Engineering alignment to design and deliver intuitive, functional, long-lasting products.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 900 }}>
          Seasoned UX & Product Design Manager focused on modernizing complex, multi-product ecosystems.
          I install clear decision mechanisms and lead teams to measurable outcomes—adoption, time-to-value,
          ramp time, and release quality.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
          <Button component={Link} href="/work" variant="contained">View Selected Work</Button>
          <Button component="a" href="/resume" variant="outlined" color="secondary">View Résumé</Button>
        </Stack>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Adoption" value="↑ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Time-to-value" value="↓ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Ramp time" value="↓ [placeholder]" /></Grid>
          <Grid item xs={12} sm={6} md={3}><StatTile label="Release quality" value="↑ [placeholder]" /></Grid>
