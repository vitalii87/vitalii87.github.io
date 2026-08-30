import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Проєкти — V/01', description: 'Програмні продукти й технічні експерименти Віталія Жиляєва.' };

const projects = [
  { number: '01', state: 'Активний · v0.11.2', tone: 'acid', title: 'JobCompass', description: 'Локальна Windows-програма, яка шукає вакансії, пояснює їхню релевантність і допомагає вести весь шлях заявки.', href: '/projects/jobcompass', signal: ['LOCAL FIRST', '0—100%', 'UA · EN · DE'] },
  { number: '02', state: 'Відкритий архів · 2026', tone: 'blue', title: 'Thought Traces', description: 'Публічний журнал гіпотез і нотаток про інтелект, оптимізацію, технології та можливі майбутні системи.', href: '/projects/thought-traces', signal: ['3 HYPOTHESES', 'OPEN TEXTS', 'EVOLVING'] },
  { number: '03', state: 'Навчальний проєкт', tone: 'paper', title: 'QA Automation', description: 'Практичний каркас автоматизованих браузерних тестів на Python із Playwright, Pytest і Page Object Pattern.', href: '/projects/qa-automation', signal: ['PLAYWRIGHT', 'PYTEST', 'PAGE OBJECT'] },
];

export default function ProjectsPage() {
  return (
    <main className="pageMain">
      <section className="pageHero shell"><p className="kicker">01 / Проєкти</p><h1>Робота,<br /><span>яку можна відкрити.</span></h1><p className="pageLead">Продукти й експерименти з відкритим кодом, чесним статусом і прямими посиланнями на матеріали.</p></section>
      <section className="shell projectCatalog" aria-label="Каталог проєктів">
        {projects.map((project) => (
          <Link className={`catalogCard ${project.tone}`} href={project.href} key={project.number}>
            <div className="catalogMeta"><span>{project.number}</span><span>{project.state}</span></div>
            <div className="projectSignal" aria-hidden="true"><strong>{project.title.slice(0, 2).toUpperCase()}</strong><div>{project.signal.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="catalogCopy"><h2>{project.title}</h2><p>{project.description}</p></div>
            <span className="catalogLink">Детальніше <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </section>
    </main>
  );
}
