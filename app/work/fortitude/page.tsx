import { Container, Box, Typography, Chip, Grid, Card, CardContent, Button, Stack, Divider } from '@mui/material';
import Link from 'next/link';
import raw from '@/content/work/fortitude.json';
import type { WorkItem } from '@/lib/content';

const data = raw as WorkItem;
export const dynamic = 'force-static';

export default function FortitudePage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button component={Link} href="/work" size="small" variant="outlined">Back to Portfolio</Button>
      </Stack>

      <Box sx={{ mb: 2 }}>
        <Chip size="small" label={data.domain} sx={{ bgcolor: 'info.main', color: 'text.primary', mb: 1 }} />
        <Typography variant="h1" sx={{ mb: 1 }}>{data.title}</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>{data.summary}</Typography>
        {data.kpis?.length ? (
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {data.kpis.map((k, i) => <Chip key={i} label={k} variant="outlined" />)}
          </Stack>
        ) : null}
      </Box>

      {data.sections?.map((sec) => (
        <Box key={sec.id} sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>{sec.title}</Typography>
          {sec.body && (
            <Typography variant="body1" sx={{ color: 'text.secondary', whiteSpace: 'pre-line', mb: 2 }}>
              {sec.body}
            </Typography>
          )}
          {sec.artifacts?.length ? (
            <Grid container spacing={2}>
              {sec.artifacts.map((a, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Card variant="outlined" aria-label={a.alt}>
                    <CardContent>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{a.type}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{a.caption}</Typography>
                      <Box sx={{ border: '1px dashed', borderColor: 'divider', height: 140, borderRadius: 2, mb: 1, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <Typography variant="caption">{a.src || 'placeholder'}</Typography>
                      </Box>
                      {a.footnote && <Typography variant="caption" sx={{ color: 'text.secondary' }}>{a.footnote}</Typography>}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}
          <Divider sx={{ mt: 3 }} />
        </Box>
      ))}

      {data.downloads?.length ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>Downloads</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {data.downloads.map((d, i) => (
              <Button key={i} component={Link} href={`/${d.file}`} variant="outlined">
                {d.label}
              </Button>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
}
