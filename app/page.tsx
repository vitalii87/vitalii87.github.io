import Link from 'next/link';

const sections = [
  {
    number: '01',
    title: 'Проєкти',
    description: 'Каталог робіт з окремою сторінкою для кожної ідеї, продукту або експерименту.',
    href: '/projects',
    accent: 'acid',
  },
  {
    number: '02',
    title: 'Погляди',
    description: 'Тексти про технології, майбутнє та принципи, за якими формується особиста позиція.',
    href: '/visions',
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Про мене',
    description: 'Контекст, досвід, інтереси та спосіб зв’язатися без зайвої формальності.',
    href: '/about',
    accent: 'paper',
  },
];

export default function Home() {
  return (
    <main>
      <section className="homeHero shell">
        <p className="kicker"><span className="statusDot" /> Персональна платформа · шаблон</p>
        <h1>
          Простір для<br />
          <span>роботи й думок.</span>
        </h1>
        <div className="homeIntro">
          <p>
            Тут з’явиться коротка загальна інформація: хто я, над чим працюю
            та які питання вважаю важливими.
          </p>
          <span className="edition">V/01<br />2026</span>
        </div>
        <div className="heroOrbit" aria-hidden="true"><span /></div>
      </section>

      <section className="sectionIndex shell" aria-labelledby="directions-title">
        <div className="sectionIntro">
          <p className="kicker">Структура сайту</p>
          <h2 id="directions-title">Три напрямки,<br />одна система.</h2>
        </div>
        <div className="indexGrid">
          {sections.map((section) => (
            <Link className={`indexCard ${section.accent}`} href={section.href} key={section.href}>
              <span className="cardNumber">{section.number}</span>
              <div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
              <span className="cardArrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
