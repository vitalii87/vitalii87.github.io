import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Погляди — V/01',
  description: 'Погляди на технології, майбутнє та принципи створення систем.',
};

const themes = ['Технології', 'Майбутнє', 'Системи'];

export default function VisionsPage() {
  return (
    <main className="pageMain visionsPage">
      <section className="pageHero shell">
        <p className="kicker">02 / Погляди</p>
        <h1>Думки —<br /><span>це теж прототипи.</span></h1>
        <p className="pageLead">Тут сформується карта поглядів: головні тези, тематичні напрями й окремі тексти.</p>
      </section>

      <section className="manifesto shell">
        <p className="kicker">Маніфест / вступ</p>
        <p className="manifestoPlaceholder">Місце для короткого тексту, який задасть рамку всьому розділу.</p>
      </section>

      <section className="themeList shell" aria-label="Тематичні напрями">
        {themes.map((theme, index) => (
          <Link href="/visions/article-template" className="themeRow" key={theme}>
            <span>0{index + 1}</span>
            <div><p className="kicker">Напрям</p><h2>{theme}</h2><p>Коротке пояснення теми та майбутніх текстів у цьому напрямі.</p></div>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
