import Link from 'next/link';

type ResearchPanel = {
  kicker: string;
  status: string;
  title: string;
  description: string;
  facts: Array<[string, string]>;
  links: Array<{ label: string; href: string }>;
};

export function ArticleDetail({ category, title, intro, outline, sections, source, labels, research }: {
  category: string; title: string; intro: string; outline: string[];
  sections: Array<{ title: string; paragraphs: string[]; quote?: string }>;
  source: string;
  labels?: { back: string; structure: string; source: string; discussion: string; discussionTitle: string; feedback: string; backHref: string };
  research?: ResearchPanel;
}) {
  const text = labels ?? { back: 'Усі погляди', structure: 'Структура', source: 'Оригінал на GitHub', discussion: 'Дискусія', discussionTitle: 'Гіпотеза стає сильнішою, коли її намагаються спростувати.', feedback: 'Залишити аргумент або запитання', backHref: '/ua/visions' };
  return (
    <main className="articlePage">
      <header className="articleHeader shell"><Link className="backLink" href={text.backHref}>← {text.back}</Link><p className="kicker">{category}</p><h1>{title}</h1><p>{intro}</p></header>
      <article className="articleBody shell">
        <aside><p className="kicker">{text.structure}</p><ol>{outline.map((item) => <li key={item}>{item}</li>)}</ol><a className="sourceLink" href={source} target="_blank" rel="noreferrer">{text.source} ↗</a></aside>
        <div>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.quote && <blockquote>{section.quote}</blockquote>}</section>)}</div>
      </article>
      {research && <section className="researchPanel shell">
        <div className="researchPanelHead"><p className="kicker">{research.kicker}</p><span>{research.status}</span></div>
        <div className="researchPanelBody"><div><h2>{research.title}</h2><p>{research.description}</p></div><dl>{research.facts.map(([label, value]) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        <div className="researchLinks">{research.links.map((link, index) => <a className={index === 0 ? 'primary' : undefined} href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>
      </section>}
      <section className="discussionPanel shell"><p className="kicker">{text.discussion}</p><h2>{text.discussionTitle}</h2><a href="https://github.com/vitalii87/thought-traces/issues" target="_blank" rel="noreferrer">{text.feedback} ↗</a></section>
    </main>
  );
}
