import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Шаблон проєкту — V/01',
  description: 'Структура сторінки окремого проєкту.',
  openGraph: { title: 'Шаблон проєкту — V/01', description: 'Структура сторінки окремого проєкту.', images: [] },
  twitter: { card: 'summary', title: 'Шаблон проєкту — V/01', description: 'Структура сторінки окремого проєкту.', images: [] },
};

const facts = ['Роль', 'Період', 'Статус', 'Технології'];

export default function ProjectTemplatePage() {
  return (
    <main className="pageMain">
      <section className="projectDetailHero shell">
        <Link className="backLink" href="/projects">← Усі проєкти</Link>
        <p className="kicker">Проєкт / шаблон</p>
        <h1>Назва<br />проєкту</h1>
        <p className="pageLead">Одна точна фраза, яка пояснює проєкт без презентаційної мови.</p>
        <dl className="factGrid">
          {facts.map((fact) => (
            <div key={fact}><dt>{fact}</dt><dd>Буде заповнено</dd></div>
          ))}
        </dl>
      </section>

      <section className="projectMedia shell" aria-label="Місце для медіа">
        <span>Головне зображення, відео або інтерактивна демонстрація</span>
      </section>

      <section className="storyGrid shell">
        <p className="kicker">01 / Контекст</p>
        <div><h2>Проблема й задум</h2><p>Тут з’явиться контекст: що було не так, чому це важливо та яку гіпотезу перевіряє проєкт.</p></div>
        <p className="kicker">02 / Підхід</p>
        <div><h2>Як це працює</h2><p>Тут буде процес, ключові рішення, обмеження та пояснення без зайвої технічної деталізації.</p></div>
        <p className="kicker">03 / Результат</p>
        <div><h2>Що вийшло</h2><p>Тут будуть результати, висновки, поточний статус і чесний список наступних кроків.</p></div>
      </section>

      <section className="downloadPanel shell">
        <div><p className="kicker">Матеріали</p><h2>Файли та посилання</h2></div>
        <div className="buttonRow"><span className="disabledButton">GitHub</span><span className="disabledButton">Презентація</span><span className="disabledButton">Завантажити</span></div>
      </section>
    </main>
  );
}
