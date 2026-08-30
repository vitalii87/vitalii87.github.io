'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  const language = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/de') ? 'de' : 'uk';
  const prefix = language === 'uk' ? '' : `/${language}`;
  const text = language === 'en'
    ? { platform: 'Vitalii Zhyliaiev · V/01', lead: <>Projects, hypotheses<br />and open questions.</>, home: 'Back to top' }
    : language === 'de'
      ? { platform: 'Vitalii Zhyliaiev · V/01', lead: <>Projekte, Hypothesen<br />und offene Fragen.</>, home: 'Nach oben' }
      : { platform: 'Віталій Жиляєв · V/01', lead: <>Проєкти, гіпотези<br />та відкриті питання.</>, home: 'На головну' };

  return <footer className="siteFooter"><div className="shell footerLead"><p className="kicker">{text.platform}</p><h2>{text.lead}</h2></div><div className="shell footerMeta"><span>© 2026</span><a href="https://github.com/vitalii87" target="_blank" rel="noreferrer">GitHub ↗</a><Link href={prefix || '/'}>{text.home} ↑</Link></div></footer>;
}
