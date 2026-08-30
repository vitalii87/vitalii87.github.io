import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerLead">
        <p className="kicker">Персональна платформа</p>
        <h2>Проєкти, погляди<br />та відкриті питання.</h2>
      </div>
      <div className="shell footerMeta">
        <span>© 2026</span>
        <span>Перша публічна версія</span>
        <Link href="/">На головну ↑</Link>
      </div>
    </footer>
  );
}
