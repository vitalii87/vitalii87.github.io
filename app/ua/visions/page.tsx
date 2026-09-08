import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Погляди — V/01', description: 'Гіпотези Віталія Жиляєва про інтелект, оптимізацію, технології та майбутнє.' };

const ideas = [
  { number: '01', meta: 'Концептуальний препринт · v0.1', title: 'Гіпотеза атрактора інтелекту', description: 'Незалежна конвергенція, послаблення впливу походження та оптимізація архітектури під спільними обмеженнями реальності.', href: '/ua/visions/intelligence-attractor' },
  { number: '02', meta: 'IAH · Додаток A · v0.1', title: 'Послаблення впливу походження', description: 'Перевірювана теза про те, що поблизу спільного фронтиру історично випадкові відмінності менше визначають функціональні властивості систем.', href: '/ua/visions/origin-attenuation' },
  { number: '03', meta: 'IAH · Додаток C · v0.1', title: 'Реляційне звуження і сильна функціональна унікальність', description: 'Як точніший причинний контекст може розрізняти альтернативи та як перевіряти існування єдиного граничного функціонального класу.', href: '/ua/visions/relational-narrowing' },
];

export default function VisionsPage() {
  return (
    <main className="pageMain visionsPage">
      <section className="pageHero shell"><p className="kicker">02 / Погляди</p><h1>Думки —<br /><span>це теж прототипи.</span></h1><p className="pageLead">Основна гіпотеза атрактора інтелекту та дві пов’язані тези з опублікованої дослідницької програми.</p></section>
      <section className="manifesto shell"><p className="kicker">Позиція</p><p className="manifestoPlaceholder">Це не збірка остаточних відповідей. Це відкритий інтелектуальний слід: гіпотези мають статус, межі й запрошення до перевірки.</p></section>
      <section className="themeList shell" aria-label="Опубліковані тексти">
        {ideas.map((idea) => (
          <Link href={idea.href} className="themeRow" key={idea.href}><span>{idea.number}</span><div><p className="kicker">{idea.meta}</p><h2>{idea.title}</h2><p>{idea.description}</p></div><span aria-hidden="true">↗</span></Link>
        ))}
      </section>
    </main>
  );
}
