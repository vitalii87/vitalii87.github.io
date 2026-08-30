import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Проєкти — V/01', description: 'Програмні продукти й технічні експерименти Віталія Жиляєва.' };

const projects = [
  { number: '01', state: 'Концепт · R&D', tone: 'acid', size: 'featured', title: 'Swagri', description: 'Adaptive Swarm Grid: експериментальна модель розподіленого виконання задач між різнорідними пристроями.', href: '/projects/swagri', signal: ['DISTRIBUTED', 'EDGE · P2P', 'SWARM GRID'] },
  { number: '02', state: 'Прототип · private', tone: 'blue', size: 'featured', title: 'Creonix', description: 'Децентралізована ройова AI-система з розподіленою пам’яттю, trust score та винагородою за корисну роботу.', href: '/projects/creonix', signal: ['SWARM AI', 'ADAPTIVE MEMORY', 'PROOF OF USEFUL WORK'] },
  { number: '03', state: 'Активний · 0.4.1', tone: 'paper', size: 'compact', title: 'GoalCompass', description: 'Local-first асистент особистої ефективності, який пов’язує активність із цілями та працює без обов’язкового API-ключа.', href: '/projects/goalcompass', signal: ['LOCAL FIRST', 'GOAL ALIGNMENT', 'WINDOWS'] },
  { number: '04', state: 'Активний · v0.11.2', tone: 'paper', size: 'compact', title: 'JobCompass', description: 'Локальна Windows-програма, яка шукає вакансії, пояснює їхню релевантність і допомагає вести весь шлях заявки.', href: '/projects/jobcompass', signal: ['LOCAL FIRST', '0—100%', 'UA · EN · DE'] },
];

export default function ProjectsPage() {
  return (
    <main className="pageMain">
      <section className="pageHero shell"><p className="kicker">01 / Проєкти</p><h1>Робота,<br /><span>яку можна відкрити.</span></h1><p className="pageLead">Продукти й експерименти з відкритим кодом, чесним статусом і прямими посиланнями на матеріали.</p></section>
      <section className="shell projectCatalog" aria-label="Каталог проєктів">
        {projects.map((project) => (
          <Link className={`catalogCard ${project.tone} ${project.size}`} href={project.href} key={project.number}>
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
