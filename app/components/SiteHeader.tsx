'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const copy = {
  uk: { home: 'Головна', projects: 'Проєкти', visions: 'Погляди', about: 'Про мене', contact: 'Контакт', menu: 'Меню' },
  en: { home: 'Home', projects: 'Projects', visions: 'Ideas', about: 'About', contact: 'Contact', menu: 'Menu' },
  de: { home: 'Start', projects: 'Projekte', visions: 'Ideen', about: 'Über mich', contact: 'Kontakt', menu: 'Menü' },
};

export function SiteHeader() {
  const pathname = usePathname();
  const language = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/de') ? 'de' : 'uk';
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const prefix = language === 'uk' ? '' : `/${language}`;
  const pathWithoutLanguage = pathname.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
  const navigation = [
    { href: prefix || '/', label: copy[language].home },
    { href: `${prefix}/projects`, label: copy[language].projects },
    { href: `${prefix}/visions`, label: copy[language].visions },
    { href: `${prefix}/about`, label: copy[language].about },
  ];
  const localizedHref = (nextLanguage: 'en' | 'de') => `/${nextLanguage}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brand" href={prefix || '/'} aria-label={copy[language].home}>V<span>/</span>01</Link>
        <nav className="desktopNav" aria-label="Main navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="headerTools">
          <nav className="languageNav" aria-label="Language"><Link className={language === 'en' ? 'active' : ''} href={localizedHref('en')}>EN</Link><Link className={language === 'de' ? 'active' : ''} href={localizedHref('de')}>DE</Link></nav>
          <Link className="headerAction" href={`${prefix}/about#contact`}>{copy[language].contact} <span aria-hidden="true">↗</span></Link>
        </div>
        <details className="mobileMenu"><summary aria-label={copy[language].menu}>{copy[language].menu}</summary><nav aria-label="Mobile navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<div className="mobileLanguages"><Link href={localizedHref('en')}>EN</Link><Link href={localizedHref('de')}>DE</Link></div></nav></details>
      </div>
    </header>
  );
}
