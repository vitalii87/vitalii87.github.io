import Image from 'next/image';
import Link from 'next/link';

const sections = [
  { number: '01', title: 'Проєкти', description: 'Пріоритетні розробки: розподілені обчислення, ройовий AI та local-first асистенти.', href: '/ua/projects', accent: 'acid' },
  { number: '02', title: 'Погляди', description: 'Гіпотези про інтелект, оптимізацію, технології та можливі траєкторії майбутнього.', href: '/ua/visions', accent: 'blue' },
  { number: '03', title: 'Про мене', description: 'Контекст роботи, спосіб мислення та відкритий канал для контакту й дискусії.', href: '/ua/about', accent: 'paper' },
];

export default function Home() {
  return (
    <main>
      <section className="homeHero shell">
        <p className="kicker"><span className="statusDot" /> Незалежні проєкти · 2026</p>
        <h1>Проєкти в роботі.<br /><span>Робочі гіпотези.</span></h1>
        <figure className="heroArtwork"><div className="heroArtworkFrame"><Image src="/home-intelligence.png" alt="Людський і машинний інтелект зустрічаються через технологію" fill sizes="(max-width: 760px) calc(100vw - 30px), 440px" priority unoptimized /></div><figcaption><span>FIG. 01</span><span>HUMAN / MACHINE</span></figcaption></figure>
        <div className="homeIntro">
          <p>Добірка локальних програмних інструментів, експериментів довкола інтелекту та відкритий запис ідей у розвитку.</p>
          <span className="edition">V/01<br />2026</span>
        </div>
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
