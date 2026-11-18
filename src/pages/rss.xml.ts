import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { loadRenderers } from 'astro:container';
import { render } from 'astro:content';
import { getContainerRenderer as mdxRenderer } from '@astrojs/mdx/container-renderer';
import { copy, person } from '../data/site';
import { getNotes, noteHref } from '../lib/notes';

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://firaskudsy.github.io');
  const renderers = await loadRenderers([mdxRenderer()]);
  const container = await AstroContainer.create({ renderers });
  const notes = await getNotes(); // newest first

  const items = await Promise.all(
    notes.map(async (note) => {
      const { Content } = await render(note);
      let html = await container.renderToString(Content);
      if (note.data.source) {
        const s = note.data.source;
        html += `<p>Based on: <a href="${s.url}">${escapeHtml(s.title)}</a> (${escapeHtml(s.publisher)})</p>`;
      }
      return {
        title: note.data.title,
        description: note.data.description,
        pubDate: note.data.pubDate,
        link: noteHref(note),
        content: html,
        categories: [note.data.topic, ...note.data.tags],
      };
    }),
  );

  return rss({
    title: `${person.name} · ${copy.notesTitle}`,
    description: copy.notesIntro,
    site,
    items,
    customData: '<language>en</language>',
    trailingSlash: true,
  });
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
