import Link from 'next/link';
import { essayCopy, essayLabels, essayPath, essaySlugs, type EssayLocale } from '../content/philosophicalEssays';

export function PhilosophicalEssayList({ lang, offset }: { lang: EssayLocale; offset: number }) {
  return (
    <section className="shell" aria-labelledby="philosophical-essays">
      <h2 id="philosophical-essays" className="kicker themeGroupTitle">{essayLabels[lang].group}</h2>
      <div className="themeList">
        {essaySlugs.map((slug, index) => {
          const { title, description } = essayCopy[slug][lang];
          return (
            <Link className="themeRow" key={slug} href={essayPath(lang, slug)}>
              <span>{String(offset + index + 1).padStart(2, '0')}</span>
              <div><p className="kicker">{essayLabels[lang].category}</p><h2>{title}</h2><p>{description}</p></div>
              <span aria-hidden="true">↗</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
