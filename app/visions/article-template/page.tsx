import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Шаблон тексту — V/01',
  description: 'Структура сторінки окремого тексту або теорії.',
  openGraph: { title: 'Шаблон тексту — V/01', description: 'Структура сторінки окремого тексту або теорії.', images: [] },
  twitter: { card: 'summary', title: 'Шаблон тексту — V/01', description: 'Структура сторінки окремого тексту або теорії.', images: [] },
};

export default function ArticleTemplatePage() {
  return (
    <main className="articlePage">
      <header className="articleHeader shell">
        <Link className="backLink" href="/visions">← Усі погляди</Link>
        <p className="kicker">Категорія / дата</p>
        <h1>Назва теорії<br />або тексту</h1>
        <p>Короткий вступ, який формулює основне питання та запрошує читача до дискусії.</p>
      </header>
      <article className="articleBody shell">
        <aside><p className="kicker">Структура</p><ol><li>Вихідна теза</li><li>Аргументація</li><li>Наслідки</li><li>Відкрите питання</li></ol></aside>
        <div>
          <h2>Вихідна теза</h2><p>Місце для першого змістового блоку. Текст буде зручним для читання і матиме достатньо повітря.</p>
          <div className="quotePlaceholder">Ключова теза або коротка цитата.</div>
          <h2>Розвиток думки</h2><p>Наступні частини підтримуватимуть підзаголовки, списки, ілюстрації, примітки та посилання на джерела.</p>
          <h2>Відкрите питання</h2><p>Фінал залишатиме простір для фідбеку або майбутньої дискусії.</p>
        </div>
      </article>
    </main>
  );
}
