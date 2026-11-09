import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  dualRising,
  dualRisingPath,
  dualRisingPublished,
  type DualRisingLanguage,
} from '../content/dualRising';

const siteUrl = 'https://zhyliaiev.eu';
const languages = [['en', 'English'], ['de', 'Deutsch'], ['uk', 'Українська']] as const;
const trajectoriesSrc = '/dual-rising-trajectories.webp';

export function dualRisingMetadata(lang: DualRisingLanguage): Metadata {
  const copy = dualRising[lang];
  const url = `${siteUrl}${copy.prefix}${dualRisingPath}`;
  return {
    title: `${copy.title} — V/01`,
    description: copy.description,
    authors: [{ name: copy.author, url: `${siteUrl}${copy.prefix}/about/` }],
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}${dualRisingPath}`,
        de: `${siteUrl}/de${dualRisingPath}`,
        uk: `${siteUrl}/ua${dualRisingPath}`,
        'x-default': `${siteUrl}${dualRisingPath}`,
      },
    },
    openGraph: {
      type: 'article',
      url,
      title: copy.title,
      description: copy.description,
      publishedTime: dualRisingPublished,
      authors: [copy.author],
    },
    twitter: { card: 'summary', title: copy.title, description: copy.description },
  };
}

// The supplied essay uses emphasis, strong text and HTTPS links. Render only
// those inline forms as elements; all other input remains escaped React text.
function inline(text: string) {
  const pattern = /\[([^\]]+)\]\((https:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const nodes: React.ReactNode[] = [];
  let end = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index;
    if (index > end) nodes.push(text.slice(end, index));
    if (match[1]) {
      const isCitation = /^\d+$/.test(match[1]);
      nodes.push(<a key={index} href={match[2]} className={isCitation ? 'essayCitation' : undefined}>{isCitation ? `[${match[1]}]` : match[1]}</a>);
    } else if (match[3]) {
      nodes.push(<strong key={index}>{match[3]}</strong>);
    } else {
      nodes.push(<em key={index}>{match[4]}</em>);
    }
    end = index + match[0].length;
  }
  nodes.push(text.slice(end));
  return nodes;
}

function loadEssay(lang: DualRisingLanguage) {
  const file = join(process.cwd(), 'app', 'content', 'essays', `dual-rising.${lang}.md`);
  const [title, subtitle, ...blocks] = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').trim().split(/\n[ \t]*\n/);
  if (title !== `# ${dualRising[lang].title}` || !/^\*[^*]+\*$/.test(subtitle)) {
    throw new Error(`Invalid Dual Rising title or subtitle: ${lang}`);
  }
  const sections: { title?: string; id?: string; blocks: string[] }[] = [{ blocks: [] }];
  for (const block of blocks) {
    const heading = block.match(/^\*\*([^*\n]+)\*\*$|^## ([^\n]+)$/);
    if (heading) {
      sections.push({ title: heading[1] ?? heading[2], id: heading[2] ? 'references' : `section-${sections.length}`, blocks: [] });
    } else {
      sections[sections.length - 1].blocks.push(block);
    }
  }
  return { subtitle: subtitle.slice(1, -1), sections };
}

function EssayBlock({ text, lang }: { text: string; lang: DualRisingLanguage }) {
  if (text === '<!-- dual-rising-trajectories -->') {
    const copy = dualRising[lang];
    return (
      <figure className="essayFigure">
        <Image src={trajectoriesSrc} width={1774} height={887} alt={copy.trajectoriesAlt} unoptimized />
        <figcaption>
          {copy.trajectoriesCaption}{' '}
          <a href={trajectoriesSrc} target="_blank" rel="noreferrer">{copy.trajectoriesZoom} <span aria-hidden="true">↗</span></a>
        </figcaption>
      </figure>
    );
  }
  if (text.startsWith('> ')) return <blockquote>{inline(text.slice(2))}</blockquote>;
  const lines = text.split('\n');
  if (lines.every((line) => /^\d+\. /.test(line))) {
    return <ol className="essayReferences">{lines.map((line) => <li key={line}>{inline(line.replace(/^\d+\. /, ''))}</li>)}</ol>;
  }
  return <p>{inline(text)}</p>;
}

export function DualRisingPage({ lang }: { lang: DualRisingLanguage }) {
  const copy = dualRising[lang];
  const essay = loadEssay(lang);
  return (
    <main className="articlePage essayPage" lang={lang}>
      <header className="articleHeader essayHeader shell">
        <Link className="backLink" href={`${copy.prefix}/visions/`}>← {copy.back}</Link>
        <p className="kicker">{copy.category}</p>
        <h1 id="essay-title">{copy.title}</h1>
        <p className="essaySubtitle">{essay.subtitle}</p>
        <p className="essayByline">{copy.author} <span aria-hidden="true">·</span> <time dateTime={dualRisingPublished}>{copy.date}</time></p>
        <nav className="essayLanguages" aria-label={copy.translations}>
          {languages.map(([language, label]) => (
            <Link key={language} href={`${dualRising[language].prefix}${dualRisingPath}`} lang={language} hrefLang={language} aria-current={language === lang ? 'page' : undefined}>{label}</Link>
          ))}
        </nav>
        <figure className="essayPoster">
          <Image src="/dual-rising-poster.webp" width={1774} height={887} alt={copy.posterAlt} unoptimized />
        </figure>
      </header>
      <article className="articleBody essayBody shell" aria-labelledby="essay-title">
        <aside>
          <nav className="essayContents" aria-label={copy.contents}>
            <p className="kicker">{copy.contents}</p>
            <ol>{essay.sections.filter((section) => section.id).map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
          </nav>
        </aside>
        <div>
          {essay.sections.map((section) => (
            <section key={section.id ?? 'intro'} aria-labelledby={section.id}>
              {section.title && <h2 id={section.id}>{section.title}</h2>}
              {section.blocks.map((block) => <EssayBlock key={block} text={block} lang={lang} />)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
