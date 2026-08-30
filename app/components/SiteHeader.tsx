import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Головна' },
  { href: '/projects', label: 'Проєкти' },
  { href: '/visions', label: 'Погляди' },
  { href: '/about', label: 'Про мене' },
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brand" href="/" aria-label="На головну сторінку">
          V<span>/</span>01
        </Link>
        <nav className="desktopNav" aria-label="Основна навігація">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="headerAction" href="/about#contact">
          Контакт <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobileMenu">
          <summary aria-label="Відкрити меню">Меню</summary>
          <nav aria-label="Мобільна навігація">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
