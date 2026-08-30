import type { Metadata } from 'next';
import { ProjectDetail } from '../../components/ProjectDetail';

const description = 'Local-first Windows-асистент, який пов’язує активність користувача з особистими цілями.';
export const metadata: Metadata = { title: 'GoalCompass — V/01', description, openGraph: { title: 'GoalCompass — V/01', description, images: [] }, twitter: { card: 'summary', title: 'GoalCompass — V/01', description, images: [] } };

export default function GoalCompassPage() {
  return <ProjectDetail eyebrow="Проєкт / personal effectiveness" title="GoalCompass" lead="Local-first асистент особистої ефективності: допомагає співвідносити щоденну активність із цілями, правилами та обраним режимом роботи." mark="GC" facts={[["Роль", "Автор і розробник"], ["Версія", "0.4.1"], ["Платформа", "Windows"], ["Мова", "Python"]]} signal={["Локальна база активності", "Цілі й правила", "AI без обов’язкового API"]} sections={[
    { index: '01', kicker: 'Проблема', title: 'Мета існує окремо від того, що людина робить сьогодні.', body: 'Трекери часто рахують час, а списки задач — завершені пункти. GoalCompass намагається додати між ними контекст: до якої цілі належить активність і чи відповідає вона поточному режиму роботи.' },
    { index: '02', kicker: 'Підхід', title: 'Локальний контрольний центр і ненав’язливий overlay.', body: 'Застосунок містить правила активності, профілі цілей, прогрес, розклад, статистику й невеликий overlay. Ручний сценарій є основним, а AI-конфігурацію можна підготувати через copy/paste без API-ключа.' },
    { index: '03', kicker: 'Принцип', title: 'Особисті дані та історія залишаються локально.', body: 'Профілі, налаштування, активність та історія пропозицій зберігаються на комп’ютері. Оновлення перевіряються через релізи, а нова версія не замінює персональні дані.' },
  ]} links={[]} materialsTitle="Приватна beta" materialsNote="Проєкт активно розвивається, але публічне завантаження ще не відкрите." />;
}
