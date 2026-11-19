import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { essayCopy, essayLabels, essayPath, essayUrl, type EssayLocale, type EssaySlug } from '../content/philosophicalEssays';

export function philosophicalEssayMetadata(lang: EssayLocale, slug: EssaySlug): Metadata {
  const { title, description } = essayCopy[slug][lang];
  return {
    title: `${title} — V/01`,
    description,
    alternates: {
      canonical: essayUrl(lang, slug),
      languages: { en: essayUrl('en', slug), de: essayUrl('de', slug), uk: essayUrl('uk', slug), 'x-default': essayUrl('en', slug) },
    },
  };
}

function inline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let end = 0;
  for (const match of text.matchAll(/\*\*(.+?)\*\*|\*([^*]+)\*|(https:\/\/[^\s]+)/g)) {
    nodes.push(text.slice(end, match.index));
    if (match[1]) nodes.push(<strong key={match.index}>{inline(match[1])}</strong>);
    else if (match[2]) nodes.push(<em key={match.index}>{match[2]}</em>);
    else nodes.push(<a key={match.index} href={match[3]}>{match[3]}</a>);
    end = match.index + match[0].length;
  }
  return [...nodes, text.slice(end)];
}

function EssayBlock({ text }: { text: string }) {
  if (text === '---') return <hr />;
  if (text.startsWith('### ')) return <h3>{text.slice(4)}</h3>;

  const lines = text.split('\n');
  if (lines.every((line) => /^\d+\. /.test(line))) {
    return <ol className="essayReferences">{lines.map((line) => <li key={line}>{inline(line.replace(/^\d+\. /, ''))}</li>)}</ol>;
  }
  if (lines.every((line) => line.startsWith('- '))) {
    return <ul className="essayReferences">{lines.map((line) => <li key={line}>{inline(line.slice(2))}</li>)}</ul>;
  }
  return <p>{lines.map((line, index) => <span key={line}>{index > 0 && <br />}{inline(line.trimEnd())}</span>)}</p>;
}

export function PhilosophicalEssayPage({ lang, slug }: { lang: EssayLocale; slug: EssaySlug }) {
  const labels = essayLabels[lang];
  const copy = essayCopy[slug][lang];
  const file = join(process.cwd(), 'app', 'content', 'essays', `${slug}.${lang}.md`);
  const [, ...blocks] = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').trim().split(/\n[ \t]*\n/);
  const sections: { title?: string; id?: string; blocks: string[] }[] = [{ blocks: [] }];
  let sectionNumber = 0;

  for (const block of blocks) {
    if (slug === 'before-the-mirror-of-superintelligence' && block.startsWith('## ')) {
      const id = sections[sections.length - 1].id === 'authors-note' ? 'essay-intro' : 'authors-note';
      sections.push({ title: block.slice(3), id, blocks: [] });
      continue;
    }
    const heading = block.match(slug === 'trish' ? /^## (.+)$/ : /^### (.+)$/);
    if (heading) sections.push({ title: heading[1], id: `section-${++sectionNumber}`, blocks: [] });
    else sections[sections.length - 1].blocks.push(block);
  }

  return (
    <main className="articlePage essayPage" lang={lang}>
      <header className="articleHeader essayHeader shell">
        <Link className="backLink" href={`${essayPath(lang)}#philosophical-essays`}>← {labels.group}</Link>
        <h1 id="essay-title">{copy.title}</h1>
        {'subtitle' in copy && <p className="essaySubtitle">{copy.subtitle}</p>}
      </header>
      <article className="articleBody essayBody shell" aria-labelledby="essay-title">
        <aside>
          <nav className="essayContents" aria-label={labels.contents}>
            <p className="kicker">{labels.contents}</p>
            <ol>{sections.filter(({ id }) => id).map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
          </nav>
        </aside>
        <div>
          {sections.filter(({ blocks }) => blocks.length > 0).map(({ id, title, blocks }) => (
            <section key={id ?? 'intro'} aria-labelledby={id}>
              {title && <h2 id={id}>{title}</h2>}
              {blocks.map((text, index) => <EssayBlock key={index} text={text} />)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
