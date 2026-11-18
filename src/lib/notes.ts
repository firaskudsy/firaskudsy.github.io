import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

export const TOPICS = ['Agents', 'Evals', 'RAG', 'Security', 'Engineering', 'Science'] as const;
export type Topic = (typeof TOPICS)[number];

/** Published notes (drafts only appear in dev), newest first. */
export async function getNotes(): Promise<Note[]> {
  const notes = await getCollection('notes', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return notes.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id),
  );
}

/** Topics that have at least one of the given notes, in canonical order. */
export function topicsIn(notes: Note[]): Topic[] {
  return TOPICS.filter((t) => notes.some((n) => n.data.topic === t));
}

export const noteHref = (note: Note) => `/notes/${note.id}/`;

export const kindLabel = (note: Note) => (note.data.kind === 'article' ? 'Article' : 'Note');

// Frontmatter dates are calendar dates (UTC midnight). Format in UTC so
// "2026-11-01" never shows up as October in a timezone behind UTC.
const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const fullDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** "Nov 2026" */
export const formatMonthYear = (d: Date) => monthYear.format(d);
/** "Nov 6, 2026" */
export const formatFullDate = (d: Date) => fullDate.format(d);

/** Minutes to read at ~200 words per minute (min 1). Ignores MDX import lines and JSX tags. */
export function readingMinutes(body: string | undefined): number {
  const text = (body ?? '')
    .replace(/^\s*(import|export)\s.*$/gm, ' ')
    .replace(/<[^>]*>/gs, ' ');
  const words = text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  return Math.max(1, Math.ceil(words / 200));
}
