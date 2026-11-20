import Link from 'next/link';
import { dualRising, dualRisingPath } from '../content/dualRising';
import { essayCopy, essayLabels, essayPath, essaySlugs, type EssayLocale } from '../content/philosophicalEssays';

export function PhilosophicalEssayList({ lang, offset }: { lang: EssayLocale; offset: number }) {
  const labels = essayLabels[lang];
  const dualRisingCopy = dualRising[lang];
  const entries = [
    { ...dualRisingCopy, href: `${dualRisingCopy.prefix}${dualRisingPath}` },
    ...essaySlugs.map((slug) => ({ ...essayCopy[slug][lang], category: labels.category, href: essayPath(lang, slug) })),
  ];

  return (
    <section className="shell" aria-labelledby="philosophical-essays">
      <h2 id="philosophical-essays" className="kicker themeGroupTitle">{labels.group}</h2>
      <div className="themeList">
        {entries.map(({ href, title, description, category }, index) => (
          <Link className="themeRow" key={href} href={href}>
            <span>{String(offset + index + 1).padStart(2, '0')}</span>
            <div><p className="kicker">{category}</p><h2>{title}</h2><p>{description}</p></div>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
