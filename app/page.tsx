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
        </Grid>
      </Box>

      {/* Spotlight Cases */}
      <Box component="section" aria-labelledby="spotlight-heading" sx={{ mb: 5 }}>
        <Typography id="spotlight-heading" variant="h2" sx={{ mb: .5 }}>
          Spotlight Cases
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Featured projects showcasing measurable impact and strategic design thinking across diverse industries.
        </Typography>

        <Grid container spacing={3}>
          {spotlight.map((item) => (
            <Grid key={item.slug} item xs={12} sm={6} md={4}>
              <Card component={Link as any} href={`/work/${item.slug}`} variant="outlined"
                sx={{
                  textDecoration: 'none',
                  ':hover': { boxShadow: 3, transform: 'translateY(-2px)' },
                  transition: 'box-shadow .2s, transform .2s'
                }}>
                <CardContent>
                  <Chip size="small" label={item.domain} sx={{ mb: 1, bgcolor: 'info.main', color: 'text.primary' }} />
                  <Typography variant="h3" sx={{ mb: .5 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {item.goal}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    Role — {item.role}
                  </Typography>
                  {item.kpis?.length ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
                      {item.kpis.slice(0, 2).map((k, i) => <Chip key={i} label={k} variant="outlined" />)}
                    </Stack>
                  ) : null}
                  <Typography variant="body2" sx={{ mt: .5, fontWeight: 600, color: 'primary.main' }}>
                    View case →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Leadership Across Industries */}
      <Box component="section" aria-labelledby="industries-heading" sx={{ mb: 5 }}>
        <Typography id="industries-heading" variant="h2" sx={{ mb: .5 }}>
          Leadership Across Industries
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Work across education, culture, enterprise geospatial, internal tools, and B2B web—delivered directly
          and via partners in secure/regulated environments.
        </Typography>
        <Box role="list" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['Education', 'Culture', 'Geospatial', 'Internal Tools', 'B2B Web', 'Secure / Regulated'].map((t) => (
            <Chip key={t} role="listitem" label={t} />
          ))}
        </Box>
      </Box>

      {/* Skills & Expertise */}
      <Box component="section" aria-labelledby="skills-heading" sx={{ mb: 5 }}>
        <Typography id="skills-heading" variant="h2" sx={{ mb: .5 }}>
          Skills & Expertise
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Comprehensive skill set spanning design strategy, team leadership, and technical implementation.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SkillBlock
              title="Design Strategy"
              items={['Product vision', 'Design systems', 'User research', 'Information architecture']}
              Icon={DesignServices}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillBlock
              title="Team Leadership"
              items={['Cross-functional teams', 'Agile methods', 'Stakeholder management', 'Mentoring & growth']}
              Icon={Hub}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillBlock
              title="Technical Skills"
              items={['Prototyping', 'Design tools', 'Frontend basics', 'API integration']}
              Icon={IntegrationInstructions}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillBlock
              title="Data & Analytics"
              items={['User analytics', 'A/B testing', 'Performance metrics', 'ROI measurement']}
              Icon={Assessment}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Design Process & Methods */}
      <Box component="section" aria-labelledby="process-heading" sx={{ mb: 5 }}>
        <Typography id="process-heading" variant="h2" sx={{ mb: .5 }}>
          Design Process & Methods
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Systematic approach to solving complex design challenges with measurable outcomes.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <ProcessStep
              step="Step 1"
              title="Discover"
              body="Interviews, data gathering, competitive analysis, and stakeholder alignment to understand the problem space."
              Icon={Science}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProcessStep
              step="Step 2"
              title="Design"
              body="Journey maps, IA, and iterative UX exploration; patterns and systems that clarify tasks and reduce friction."
              Icon={Architecture}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProcessStep
              step="Step 3"
              title="Develop"
              body="Partner closely with engineering; component libraries; acceptance criteria that encode accessibility and quality."
              Icon={Build}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProcessStep
              step="Step 4"
              title="Deliver"
              body="Implementation support, usability testing, telemetry, and KPI tracking to prove outcomes and guide iteration."
              Icon={RocketLaunch}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Tools & Technologies */}
      <Box component="section" aria-labelledby="tools-heading" sx={{ mb: 5 }}>
        <Typography id="tools-heading" variant="h2" sx={{ mb: .5 }}>
          Tools & Technologies
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Proficient in industry-standard and emerging tools for comprehensive design solutions.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Layers fontSize="small" aria-hidden />
                  <Typography variant="subtitle2">Design</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {['Figma', 'FigJam', 'Sketch', 'Adobe'].map((t) => <Chip key={t} label={t} variant="outlined" />)}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <QueryStats fontSize="small" aria-hidden />
                  <Typography variant="subtitle2">Research</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {['Miro', 'UserTesting', 'Hotjar', 'Maze'].map((t) => <Chip key={t} label={t} variant="outlined" />)}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Timeline fontSize="small" aria-hidden />
                  <Typography variant="subtitle2">Delivery</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {['Jira', 'Storybook', 'Material UI', 'React'].map((t) => <Chip key={t} label={t} variant="outlined" />)}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Insights fontSize="small" aria-hidden />
                  <Typography variant="subtitle2">Analytics</Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {['A/B testing', 'Performance', 'ROI', 'User analytics'].map((t) => <Chip key={t} label={t} variant="outlined" />)}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* CTA */}
      <Box component="section" aria-labelledby="cta-heading">
        <Typography id="cta-heading" variant="h2" sx={{ mb: .5 }}>Ready to collaborate?</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Let’s discuss how strategic design can drive measurable impact for your product.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button component={Link} href="/contact" variant="contained">Start a Conversation</Button>
          <Button component={Link} href="/work" variant="outlined" color="secondary">View All Projects</Button>
        </Stack>
      </Box>
    </Container>
  );
}
