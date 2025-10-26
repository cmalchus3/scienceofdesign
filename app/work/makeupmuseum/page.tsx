import { getWork } from '@/lib/content';
import { Container, Box, Typography, Chip, Grid, Card, CardContent } from '@mui/material';

export const dynamic = 'force-static';

const SLUG = 'makeupmuseum';
export default function MakeupMuseumPage() {
  const data = getWork(SLUG);
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Box sx={{ mb: 2 }}>
        <Chip size="small" label={data.domain} sx={{ bgcolor: 'info.main', color: 'text.primary', mb: 1 }} />
        <Typography variant="h1" sx={{ mb: 1 }}>{data.title}</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>{data.summary}</Typography>
      </Box>
      {data.sections?.map((sec) => (
        <Box key={sec.id} sx={{ mt: 4 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>{sec.title}</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>{sec.body}</Typography>
          {sec.artifacts?.length ? (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {sec.artifacts.map((a, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Card variant="outlined" aria-label={a.alt}>
                    <CardContent>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{a.type}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{a.caption}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Box>
      ))}
    </Container>
  );
}

