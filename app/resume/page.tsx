import { getResume } from '@/lib/content';
import { Container, Box, Typography, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';

export const dynamic = 'force-static';

export default async function ResumePage() {
  const r = await getResume();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h1" sx={{ mb: 1 }}>{r.header.name}</Typography>
        <Typography variant="h3" sx={{ mb: 1 }}>{r.header.title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {r.header.location} · {r.header.phone} · {r.header.email}
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {r.header.links.map((l: any, i: number) => <Chip key={i} label={l.label} component="a" href={l.url} clickable />)}
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h2">Summary</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>{r.summary}</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h2">Core Strengths</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {r.strengths.map((s: string, i: number) => <Chip key={i} label={s} variant="outlined" />)}
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h2">Experience</Typography>
        <List dense>
          {r.experience.map((e: any, i: number) => (
            <Box key={i}>
              <ListItem>
                <ListItemText
                  primary={`${e.title} — ${e.org}`}
                  secondary={`${e.dates}`}
                />
              </ListItem>
              <Box sx={{ pl: 2, pb: 1 }}>
                <ul>
                  {e.bullets.map((b: string, j: number) => <li key={j}><Typography variant="body2">{b}</Typography></li>)}
                </ul>
              </Box>
              {i < r.experience.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h2">Certifications</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
          {r.certs.map((c: string, i: number) => <Chip key={i} label={c} />)}
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h2">Education</Typography>
        {r.education.map((e: string, i: number) => <Typography key={i} variant="body2">{e}</Typography>)}
      </Box>
    </Container>
  );
}
