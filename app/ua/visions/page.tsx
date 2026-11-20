import type { Metadata } from 'next';
import Link from 'next/link';
import { PhilosophicalEssayList } from '../../components/PhilosophicalEssayList';

export const metadata: Metadata = { title: 'Погляди — V/01', description: 'Гіпотези Віталія Жиляєва про інтелект, оптимізацію, технології та майбутнє.' };

const ideas = [
  { number: '01', meta: 'Концептуальний препринт · v0.1', title: 'Гіпотеза атрактора інтелекту', description: 'Незалежна конвергенція, послаблення впливу походження та оптимізація архітектури під спільними обмеженнями реальності.', href: '/ua/visions/intelligence-attractor' },
];

function VisionRow({ idea }: { idea: (typeof ideas)[number] }) {
  return (
    <Link href={idea.href} className="themeRow">
      <span>{idea.number}</span>
      <div><p className="kicker">{idea.meta}</p><h2>{idea.title}</h2><p>{idea.description}</p></div>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export default function VisionsPage() {
  return (
    <main className="pageMain visionsPage">
      <section className="pageHero shell"><p className="kicker">02 / Погляди</p><h1>Думки —<br /><span>це теж прототипи.</span></h1><p className="pageLead">Гіпотеза атрактора інтелекту, пов’язані дослідницькі нотатки й есе про те, як технології впливають на мислення.</p></section>
      <section className="manifesto shell"><p className="kicker">Позиція</p><p className="manifestoPlaceholder">Це не збірка остаточних відповідей. Це відкритий інтелектуальний слід: гіпотези мають статус, межі й запрошення до перевірки.</p></section>
      <section className="themeList shell" aria-label="Опубліковані тексти">
        {ideas.map((idea) => <VisionRow key={idea.href} idea={idea} />)}
      </section>
      <PhilosophicalEssayList lang="uk" offset={ideas.length} />
    </main>
  );
}
