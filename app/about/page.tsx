import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про мене — V/01',
  description: 'Контекст, досвід та спосіб зв’язатися.',
};

export default function AboutPage() {
  return (
    <main className="pageMain">
      <section className="aboutHero shell">
        <p className="kicker">03 / Про мене</p>
        <h1>Ім’я<br /><span>та коротка теза.</span></h1>
      </section>
      <section className="aboutLayout shell">
        <div className="portraitPlaceholder"><span>Портрет або особистий візуальний образ</span></div>
        <div className="aboutCopy">
          <p className="kicker">Коротко</p>
          <h2>Тут буде особиста історія без формального резюме.</h2>
          <p>Кілька абзаців про досвід, інтереси, принципи роботи та теми, які зараз найбільше хвилюють.</p>
          <div className="aboutFacts"><span>Локація</span><span>Напрями роботи</span><span>Мови</span><span>Посилання</span></div>
        </div>
      </section>
      <section className="contactPanel shell" id="contact">
        <p className="kicker">Контакт</p>
        <h2>Спосіб зв’язку<br />з’явиться тут.</h2>
        <p>Email · GitHub · LinkedIn</p>
      </section>
    </main>
  );
}
