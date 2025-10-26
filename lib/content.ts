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

export async function getAllWork(): Promise<WorkItem[]> {
  const dir = path.join(contentDir, 'work');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')));
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | null> {
  const p = path.join(contentDir, 'work', `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

export type ResumeData = {
  header: { name: string; title: string; location: string; phone: string; email: string; links: { label: string; url: string }[] };
  summary: string;
  strengths: string[];
  experience: Array<{ title: string; org: string; dates: string; bullets: string[] }>;
  certs: string[];
  education: string[];
};

export async function getResume(): Promise<ResumeData> {
  const p = path.join(contentDir, 'resume.json');
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}
