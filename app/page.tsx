import Link from 'next/link';

const sections = [
  { number: '01', title: 'Проєкти', description: 'Пріоритетні розробки: розподілені обчислення, ройовий AI та local-first асистенти.', href: '/projects', accent: 'acid' },
  { number: '02', title: 'Погляди', description: 'Гіпотези про інтелект, оптимізацію, технології та можливі траєкторії майбутнього.', href: '/visions', accent: 'blue' },
  { number: '03', title: 'Про мене', description: 'Контекст роботи, спосіб мислення та відкритий канал для контакту й дискусії.', href: '/about', accent: 'paper' },
];

export default function Home() {
  return (
    <main>
      <section className="homeHero shell">
        <p className="kicker"><span className="statusDot" /> Незалежні проєкти · 2026</p>
        <h1>Будую системи.<br /><span>Формулюю гіпотези.</span></h1>
        <div className="homeIntro">
          <p>Я Віталій Жиляєв. Створюю локальні програмні інструменти, досліджую інтелект і зберігаю відкритий слід того, як розвиваються ідеї.</p>
          <span className="edition">V/01<br />2026</span>
        </div>
        <div className="heroOrbit" aria-hidden="true"><span /></div>
      </section>
      <section className="sectionIndex shell" aria-labelledby="directions-title">
        <div className="sectionIntro"><p className="kicker">Карта простору</p><h2 id="directions-title">Практика, теорія<br />і контекст.</h2></div>
        <div className="indexGrid">
          {sections.map((section) => (
            <Link className={`indexCard ${section.accent}`} href={section.href} key={section.href}>
              <span className="cardNumber">{section.number}</span><div><h3>{section.title}</h3><p>{section.description}</p></div><span className="cardArrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
