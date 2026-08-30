import type { Metadata } from 'next';
import { ProjectDetail } from '../../components/ProjectDetail';

export const metadata: Metadata = {
  title: 'JobCompass — V/01', description: 'Локальна Windows-програма для пошуку, оцінювання та відстеження вакансій.',
  openGraph: { title: 'JobCompass — V/01', description: 'Локальний помічник для пошуку роботи без передачі персональних даних у хмару.', images: [] },
  twitter: { card: 'summary', title: 'JobCompass — V/01', description: 'Локальний помічник для пошуку роботи.', images: [] },
};

export default function JobCompassPage() {
  return <ProjectDetail
    eyebrow="Проєкт / локальний продукт" title="JobCompass"
    lead="Локальний помічник для пошуку роботи: збирає вакансії з відкритих джерел, пояснює збіг із резюме та зберігає історію заявок на комп’ютері користувача."
    mark="JC" facts={[["Роль", "Автор і розробник"], ["Версія", "0.11.2"], ["Платформа", "Windows 10/11"], ["Технології", "Python · Tkinter"]]}
    signal={["Локальне зберігання", "Пояснювана оцінка 0—100%", "Українська · English · Deutsch"]}
    sections={[
      { index: '01', kicker: 'Проблема', title: 'Пошук роботи розпадається на десятки вкладок.', body: 'Вакансії приходять із різних джерел, оцінка відповідності часто непрозора, а історія відгуків швидко губиться. JobCompass об’єднує пошук, порівняння з резюме, обране, статуси й матеріали заявки в одному локальному робочому просторі.' },
      { index: '02', kicker: 'Підхід', title: 'Корисна автоматизація без втрати контролю.', body: 'Програма читає JSON, TXT, DOCX і PDF-резюме, шукає через Bundesagentur für Arbeit, Arbeitnow, Remotive та відкриті career-сайти, нормалізує результати й показує пояснюваний match score. Фінальну подачу завжди підтверджує людина, а персональні дані залишаються локально.' },
      { index: '03', kicker: 'Результат', title: 'Готова Windows-збірка, а не лише прототип.', body: 'Доступні інсталятор і portable-архів, кілька профілів кандидата, гостьовий режим, щоденний пошук за розкладом, історія статусів і перевірка оновлень. Архітектура включає спільну модель джерел, паралельний пошук і автоматичне виявлення відкритих ATS.' },
    ]}
    links={[
      { label: 'Завантажити Setup', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Setup.exe', primary: true },
      { label: 'Portable ZIP', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Portable.zip' },
      { label: 'GitHub', href: 'https://github.com/vitalii87/JobCompass' },
    ]}
  />;
}
