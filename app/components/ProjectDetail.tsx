import Link from 'next/link';

type ProjectLink = { label: string; href: string; primary?: boolean };
type ProjectSection = { index: string; kicker: string; title: string; body: string };

export function ProjectDetail({ eyebrow, title, lead, mark, facts, signal, sections, links }: {
  eyebrow: string; title: string; lead: string; mark: string;
  facts: Array<[string, string]>; signal: string[]; sections: ProjectSection[]; links: ProjectLink[];
}) {
  return (
    <main className="pageMain">
      <section className="projectDetailHero shell">
        <Link className="backLink" href="/projects">← Усі проєкти</Link><p className="kicker">{eyebrow}</p><h1>{title}</h1><p className="pageLead">{lead}</p>
        <dl className="factGrid">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </section>
      <section className="projectShowcase shell" aria-label={`Ключові характеристики ${title}`}>
        <span className="showcaseMark">{mark}</span><div className="showcaseSignals">{signal.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
      </section>
      <section className="storyGrid shell">
        {sections.map((section) => <div className="storyContents" key={section.index}><p className="kicker">{section.index} / {section.kicker}</p><div><h2>{section.title}</h2><p>{section.body}</p></div></div>)}
      </section>
      <section className="downloadPanel shell">
        <div><p className="kicker">Матеріали</p><h2>Відкрити проєкт</h2></div>
        <div className="buttonRow">{links.map((link) => link.href.startsWith('/')
          ? <Link className={link.primary ? 'actionButton primary' : 'actionButton'} href={link.href} key={link.href}>{link.label} ↗</Link>
          : <a className={link.primary ? 'actionButton primary' : 'actionButton'} href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>
      </section>
    </main>
  );
}
