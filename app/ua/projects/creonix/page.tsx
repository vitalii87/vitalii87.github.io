import type { Metadata } from 'next';
import { ProjectDetail } from '../../../components/ProjectDetail';

const description = 'Прототип децентралізованої ройової AI-системи з адаптивною пам’яттю та P2P-обміном знаннями.';
export const metadata: Metadata = { title: 'Creonix — V/01', description, openGraph: { title: 'Creonix — V/01', description, images: [] }, twitter: { card: 'summary', title: 'Creonix — V/01', description, images: [] } };

export default function CreonixPage() {
  return <ProjectDetail eyebrow="Проєкт / swarm intelligence" title="Creonix" lead="Експериментальна децентралізована AI-архітектура: вузли спільно зберігають знання, перевіряють їхню надійність і отримують винагороду за корисну роботу." mark="CR" facts={[["Роль", "Автор і розробник"], ["Статус", "Прототип"], ["Мова", "Python"], ["Архітектура", "P2P · FAISS"]]} signal={["Розподілена пам’ять", "Trust score і decay", "Proof of Useful Work"]} sections={[
    { index: '01', kicker: 'Ідея', title: 'Рій, який не лише обчислює, а й пам’ятає.', body: 'Creonix моделює мережу вузлів без єдиного центру. Кожен вузол може зберігати частину спільної бази знань, обмінюватися фрагментами та брати участь у відповіді на запити.' },
    { index: '02', kicker: 'Механіка', title: 'Довіра, забування й реконструкція знань.', body: 'Кожен елемент знання має trust score. Без використання довіра може зменшуватися, після чого запис архівується або стискається. За нового запиту система намагається відновити його локально, через інші вузли або зовнішнє джерело.' },
    { index: '03', kicker: 'Стимул', title: 'Винагороджувати корисну участь, а не пасивне споживання енергії.', body: 'Модель Proof of Useful Work оцінює внесок у розв’язання запитів, inference, передачу знань і підтримку пам’яті. Окремо досліджується ефемерна одиниця участі, цінність якої залежить від активної присутності вузла.' },
  ]} links={[]} materialsTitle="Приватний прототип" materialsNote="Публікується концепція; вихідний код залишається закритим на поточному етапі." />;
}
