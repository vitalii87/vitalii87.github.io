import Link from 'next/link';

export function ArticleDetail({ category, title, intro, outline, sections, source }: {
  category: string; title: string; intro: string; outline: string[];
  sections: Array<{ title: string; paragraphs: string[]; quote?: string }>;
  source: string;
}) {
  return (
    <main className="articlePage">
      <header className="articleHeader shell"><Link className="backLink" href="/visions">← Усі погляди</Link><p className="kicker">{category}</p><h1>{title}</h1><p>{intro}</p></header>
      <article className="articleBody shell">
        <aside><p className="kicker">Структура</p><ol>{outline.map((item) => <li key={item}>{item}</li>)}</ol><a className="sourceLink" href={source} target="_blank" rel="noreferrer">Оригінал на GitHub ↗</a></aside>
        <div>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.quote && <blockquote>{section.quote}</blockquote>}</section>)}</div>
      </article>
      <section className="discussionPanel shell"><p className="kicker">Дискусія</p><h2>Гіпотеза стає сильнішою, коли її намагаються спростувати.</h2><a href="https://github.com/vitalii87/thought-traces/issues" target="_blank" rel="noreferrer">Залишити аргумент або запитання ↗</a></section>
    </main>
  );
}
