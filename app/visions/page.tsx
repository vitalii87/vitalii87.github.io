import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Погляди — V/01', description: 'Гіпотези Віталія Жиляєва про інтелект, оптимізацію, технології та майбутнє.' };

const ideas = [
  { number: '01', meta: 'Теорія · 2026', title: 'Гіпотеза атрактора інтелекту', description: 'Чому простір ефективних рішень, методів пізнання й архітектур може звужуватися зі зростанням інтелекту.', href: '/visions/intelligence-attractor' },
  { number: '02', meta: 'Емпірична рамка · 2026', title: 'Чутливість до «солі»', description: 'Чи слабшає вплив походження AI-агента на функціонально важливі частини рішення, коли компетентність зростає?', href: '/visions/salt-sensitivity' },
  { number: '03', meta: 'Розширення теорії · 2026', title: 'Реляційне звуження', description: 'Чи зникають випадкові нічиї між рішеннями, коли контекст, ресурси й критерії описані достатньо повно?', href: '/visions/relational-narrowing' },
];

export default function VisionsPage() {
  return (
    <main className="pageMain visionsPage">
      <section className="pageHero shell"><p className="kicker">02 / Погляди</p><h1>Думки —<br /><span>це теж прототипи.</span></h1><p className="pageLead">Три пов’язані тексти про те, як обмеження реальності можуть формувати рішення, інтелект і його архітектуру.</p></section>
      <section className="manifesto shell"><p className="kicker">Позиція</p><p className="manifestoPlaceholder">Це не збірка остаточних відповідей. Це відкритий інтелектуальний слід: гіпотези мають статус, межі й запрошення до перевірки.</p></section>
      <section className="themeList shell" aria-label="Опубліковані тексти">
        {ideas.map((idea) => (
          <Link href={idea.href} className="themeRow" key={idea.href}><span>{idea.number}</span><div><p className="kicker">{idea.meta}</p><h2>{idea.title}</h2><p>{idea.description}</p></div><span aria-hidden="true">↗</span></Link>
        ))}
      </section>
    </main>
  );
}
