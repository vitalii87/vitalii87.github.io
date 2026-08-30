import type { Metadata } from 'next';
import { ProjectDetail } from '../../components/ProjectDetail';

export const metadata: Metadata = {
  title: 'QA Automation — V/01', description: 'Навчальний проєкт автоматизації браузерних тестів із Playwright і Pytest.',
  openGraph: { title: 'QA Automation — V/01', description: 'Практичний каркас тестів на Python.', images: [] },
  twitter: { card: 'summary', title: 'QA Automation — V/01', description: 'Playwright, Pytest і Page Object Pattern.', images: [] },
};

export default function QaAutomationPage() {
  return <ProjectDetail
    eyebrow="Проєкт / інженерна практика" title="QA Automation"
    lead="Навчальний каркас для автоматизованого тестування вебінтерфейсів на Python із чітким розділенням локаторів, сторінок і тестових сценаріїв."
    mark="QA" facts={[["Роль", "Автор"], ["Тип", "Навчальний проєкт"], ["Мова", "Python"], ["Стек", "Playwright · Pytest"]]}
    signal={["Page Object Pattern", "Smoke / regression", "Повторно використовувані сценарії"]}
    sections={[
      { index: '01', kicker: 'Мета', title: 'Перейти від окремих скриптів до системи тестів.', body: 'Проєкт створений для відпрацювання сучасної браузерної автоматизації та чистої структури коду. Локатори, поведінка сторінок і самі перевірки рознесені так, щоб зміни в інтерфейсі не вимагали переписувати весь набір тестів.' },
      { index: '02', kicker: 'Архітектура', title: 'Кожен шар має одну відповідальність.', body: 'BasePage містить спільну навігацію, конкретні Page Objects описують дії на сторінках, а Pytest керує сценаріями й маркерами. Тести можна поділяти на швидкі smoke-перевірки та ширші regression-набори.' },
      { index: '03', kicker: 'Статус', title: 'Відкритий навчальний зріз.', body: 'Репозиторій показує напрям розвитку: конфігурація середовища, розширення набору сторінок, CI та HTML-звіти позначені як наступні кроки. Це не завершений продукт, а прозорий інженерний експеримент.' },
    ]}
    links={[{ label: 'Відкрити GitHub', href: 'https://github.com/vitalii87/2025', primary: true }]}
  />;
}
