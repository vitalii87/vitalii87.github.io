import type { Metadata } from 'next';
import { OriginStory } from '../../components/OriginStory';

export const metadata: Metadata = { title: 'Про мене — V/01', description: 'Віталій Жиляєв — незалежні програмні проєкти, системне мислення й відкриті гіпотези.' };

export default function AboutPage() {
  return (
    <main className="pageMain">
      <section className="aboutHero shell"><p className="kicker">03 / Про мене</p><h1>Віталій Жиляєв<br /><span>створюю й досліджую.</span></h1></section>
      <section className="aboutLayout shell">
        <div className="identityPanel" aria-label="Профіль Віталія Жиляєва">
          <span className="identityInitials">VZ</span><div><p>INDEPENDENT BUILDER</p><p>GITHUB / VITALII87</p><p>SINCE / 2016</p></div>
        </div>
        <div className="aboutCopy">
          <p className="kicker">Коротко</p>
          <h2>Мене цікавлять системи, які повертають людині ясність і контроль.</h2>
          <p>Я створюю програмні інструменти та технічні експерименти — від local-first Windows-застосунків до концепцій розподілених обчислень і ройового AI.</p>
          <p>Паралельно досліджую ширші питання: як інтелект оптимізує рішення, чому незалежні системи можуть зближуватися та де проходить межа між випадковістю походження і фундаментальними обмеженнями реальності.</p>
          <p>Цей сайт поєднує обидві частини роботи: те, що вже можна запустити, і те, що ще потрібно перевірити.</p>
          <div className="aboutFacts"><span>Програмні продукти</span><span>QA та автоматизація</span><span>AI і системи</span><span>Відкриті гіпотези</span></div>
        </div>
      </section>
      <OriginStory lang="uk" />
      <section className="contactPanel shell" id="contact">
        <p className="kicker">Контакт і фідбек</p><h2>Є аргумент,<br />ідея або проєкт?</h2>
        <div className="contactLinks"><a href="https://github.com/vitalii87" target="_blank" rel="noreferrer">Профіль GitHub ↗</a><a href="https://github.com/vitalii87/thought-traces/issues" target="_blank" rel="noreferrer">Дискусія про теорії ↗</a></div>
      </section>
    </main>
  );
}
