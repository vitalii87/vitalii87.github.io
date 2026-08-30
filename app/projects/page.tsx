import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Проєкти — V/01',
  description: 'Каталог проєктів, продуктів та експериментів.',
};

const placeholders = [
  { number: '01', state: 'Основний проєкт', tone: 'acid' },
  { number: '02', state: 'Наступний проєкт', tone: 'blue' },
  { number: '03', state: 'Архів / експеримент', tone: 'paper' },
];

export default function ProjectsPage() {
  return (
    <main className="pageMain">
      <section className="pageHero shell">
        <p className="kicker">01 / Проєкти</p>
        <h1>Робота,<br /><span>яку можна відкрити.</span></h1>
        <p className="pageLead">Тут буде каталог проєктів з коротким описом, статусом і прямим переходом до деталей.</p>
      </section>

      <section className="shell projectCatalog" aria-label="Шаблони карток проєктів">
        {placeholders.map((item, index) => (
          <Link className={`catalogCard ${item.tone}`} href={index === 0 ? '/projects/project-template' : '/projects/project-template'} key={item.number}>
            <div className="catalogMeta">
              <span>{item.number}</span>
              <span>{item.state}</span>
            </div>
            <div className="emptyVisual" aria-hidden="true"><span>Зображення / відео</span></div>
            <div className="catalogCopy">
              <h2>Назва проєкту</h2>
              <p>Коротка теза про проблему, підхід та цінність результату.</p>
            </div>
            <span className="catalogLink">Відкрити шаблон <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </section>
    </main>
  );
}
