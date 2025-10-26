import fs from 'node:fs';
import path from 'node:path';

const contentDir = path.join(process.cwd(), 'content');

export type Artifact = { type: string; caption: string; alt: string; src?: string };
export type Section = { id: string; title: string; body: string; artifacts?: Artifact[] };
export type WorkItem = {
  slug: string;
  title: string;
  domain: string;
  role: string;
  goal: string;
  kpis?: string[];
  summary?: string;
  sections?: Section[];
};

export function getWork(slug: string): WorkItem {
  const p = path.join(contentDir, 'work', `${slug}.json`);
  if (!fs.existsSync(p)) throw new Error(`Missing work JSON: ${slug}.json`);
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

export function getAllWork(): WorkItem[] {
  const dir = path.join(contentDir, 'work');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map((f) => {
    const item = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
    // Ensure slug matches filename (without .json)
    const slug = f.replace(/\.json$/, '');
    return { slug, ...item };
  });
}
