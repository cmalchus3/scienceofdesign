// scienceofdesign/lib/content.ts
import fs from 'node:fs';
import path from 'node:path';

const contentDir = path.join(process.cwd(), 'content');

function readJSON<T>(...segments: string[]): T {
  const p = path.join(contentDir, ...segments);
  return JSON.parse(fs.readFileSync(p, 'utf-8')) as T;
}

/* ===== Types ===== */
export type Artifact = { type: string; caption: string; alt: string; src?: string; footnote?: string };
export type Section = { id: string; title: string; body?: string; artifacts?: Artifact[] };

export type WorkItem = {
  slug: string;
  title: string;
  domain: string;
  role: string;
  goal: string;
  kpis?: string[];
  summary?: string;
  overview?: {
    domain?: string;
    scope?: string;
    team?: string;
    timeframe?: string;
    notes?: string;
  };
  downloads?: { label: string; file: string }[];
  sections?: Section[];
};


export type ResumeData = {
  header: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    links: { label: string; url: string }[];
  };
  summary: string;
  strengths: string[];
  experience: Array<{ title: string; org: string; dates: string; bullets: string[] }>;
  certs: string[];
  training?: string[];   // ← add this line
  education: string[];
};


/* ===== API ===== */
export async function getAllWork(): Promise<WorkItem[]> {
  const dir = path.join(contentDir, 'work');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map((f) => {
    const raw = readJSON<Omit<WorkItem, 'slug'>>('work', f);
    const slug = f.replace(/\.json$/, '');
    return { slug, ...raw };
  });
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | null> {
  const p = path.join(contentDir, 'work', `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  const raw = readJSON<Omit<WorkItem, 'slug'>>('work', `${slug}.json`);
  return { slug, ...raw };
}

export async function getResume(): Promise<ResumeData> {
  return readJSON<ResumeData>('resume.json');
}
