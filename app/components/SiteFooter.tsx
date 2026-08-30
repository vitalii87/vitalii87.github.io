import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerLead"><p className="kicker">Віталій Жиляєв · V/01</p><h2>Проєкти, гіпотези<br />та відкриті питання.</h2></div>
      <div className="shell footerMeta"><span>© 2026</span><a href="https://github.com/vitalii87" target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/">На головну ↑</Link></div>
    </footer>
  );
}
