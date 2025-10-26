import { getResume } from '@/lib/content';
import {
  Container, Box, Typography, Chip, List, ListItem, ListItemText, Divider, Stack, Link as MLink
} from '@mui/material';

export const dynamic = 'force-static';

export default async function ResumePage() {
  const r = await getResume();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h1" sx={{ mb: 0.5 }}>{r.header.name}</Typography>
        <Typography variant="h3" sx={{ mb: 1 }}>{r.header.title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {r.header.location} · {r.header.phone} · {r.header.email}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
          {r.header.links.map((l, i) => (
            <Chip
              key={i}
              label={l.label}
              component={MLink}
              href={l.url}
              clickable
              target={l.url.startsWith('http') ? '_blank' : undefined}
              rel={l.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            />
          ))}
        </Stack>
      </Box>

      {/* Summary */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>Summary</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>{r.summary}</Typography>
      </Box>

      {/* Core Strengths */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>Core Strengths</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {r.strengths.map((s, i) => <Chip key={i} label={s} variant="outlined" />)}
        </Box>
      </Box>

      {/* Experience */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>Experience</Typography>
        <List dense>
          {r.experience.map((e, i) => (
            <Box key={i} component="section" sx={{ mb: 1.5 }}>
              <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h3' }}
                  primary={`${e.title} — ${e.org}`}
                  secondary={
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {e.dates}
                    </Typography>
                  }
                />
              </ListItem>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                {e.bullets.map((b, j) => (
                  <li key={j}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>{b}</Typography>
                  </li>
                ))}
              </Box>
              {i < r.experience.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
        </List>
      </Box>

      {/* Certifications */}
      {r.certs?.length ? (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>Certifications</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {r.certs.map((c, i) => <Chip key={i} label={c} />)}
          </Box>
        </Box>
      ) : null}

      {/* Training / Domain Knowledge */}
      {r.training?.length ? (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>Professional Training & Domain Knowledge</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {r.training.map((t, i) => <Chip key={i} label={t} variant="outlined" />)}
          </Box>
        </Box>
      ) : null}

      {/* Education */}
      {r.education?.length ? (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>Education</Typography>
          {r.education.map((e, i) => (
            <Typography key={i} variant="body2">{e}</Typography>
          ))}
        </Box>
      ) : null}
    </Container>
  );
}
