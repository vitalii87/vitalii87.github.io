const projects = [
  {
    number: '01',
    title: 'JobCompass',
    type: 'Продукт · у розробці',
    description:
      'Інструмент для системного пошуку роботи: від хаотичних вакансій до зрозумілого процесу та наступного кроку.',
    tags: ['Python', 'Automation', 'Product'],
    accent: 'lime',
  },
  {
    number: '02',
    title: 'Personal Site',
    type: 'Платформа · 2026',
    description:
      'Місце, де проєкти, спостереження й незавершені думки складаються в одну публічну систему.',
    tags: ['Web', 'Writing', 'Open process'],
    accent: 'blue',
  },
];

const notes = [
  {
    date: 'Незабаром',
    title: 'Технологія має прибирати тертя, а не створювати нове',
    description:
      'Чернетка про прості системи, складні інтерфейси та ціну зайвого вибору.',
  },
  {
    date: 'Незабаром',
    title: 'Проєкт як спосіб перевірити власну теорію',
    description:
      'Чому незавершена, але перевірена ідея іноді цінніша за бездоганну презентацію.',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Основна навігація">
        <a className="brand" href="#top" aria-label="На початок сторінки">
          V<span>/</span>01
        </a>
        <div className="navLinks">
          <a href="#projects">Проєкти</a>
          <a href="#thinking">Бачення</a>
          <a href="#about">Про мене</a>
        </div>
        <a className="contactLink" href="mailto:hello@example.com">
          Написати <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span className="statusDot" /> Незалежні проєкти та думки
        </div>
        <h1>
          Створюю речі.
          <br />
          <span>Осмислюю системи.</span>
        </h1>
        <div className="heroBottom">
          <p>
            Персональний простір про технології, продукти й ідеї, які варто
            перевірити на практиці.
          </p>
          <a className="roundButton" href="#projects" aria-label="Перейти до проєктів">
            ↓
          </a>
        </div>
        <div className="orbit orbitOne" aria-hidden="true" />
        <div className="orbit orbitTwo" aria-hidden="true" />
      </section>

      <section className="section shell" id="projects">
        <header className="sectionHeader">
          <p>01 / Вибрані проєкти</p>
          <h2>Робота, яку можна відкрити, перевірити й продовжити.</h2>
        </header>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard ${project.accent}`} key={project.title}>
              <div className="cardTop">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="projectVisual" aria-hidden="true">
                <span className="visualMark">{project.title.slice(0, 2).toUpperCase()}</span>
                <span className="visualLine" />
              </div>
              <div className="cardContent">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Технології та категорії">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="cardAction" aria-label={`Детальніше про ${project.title}`}>
                Переглянути проєкт <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="thinking" id="thinking">
        <div className="shell">
          <header className="sectionHeader light">
            <p>02 / Теорії та бачення</p>
            <h2>Думки — це теж прототипи.</h2>
          </header>
          <div className="notesList">
            {notes.map((note, index) => (
              <article className="note" key={note.title}>
                <span className="noteNumber">0{index + 1}</span>
                <div>
                  <p className="noteDate">{note.date}</p>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                </div>
                <span className="noteArrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="aboutLabel">03 / Про мене</p>
        <div className="aboutGrid">
          <h2>Цікавлюся тим, як ідея стає системою, а система — корисним продуктом.</h2>
          <div>
            <p>
              Тут буде коротка особиста історія: досвід, сфери інтересу та
              принципи, за якими я обираю наступний проєкт.
            </p>
            <p className="muted">
              Цей текст тимчасовий — замінимо його вашим голосом, без корпоративних
              кліше й зайвої біографії.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerGrid">
          <div>
            <p>Є думка, питання або незгода?</p>
            <h2>Давайте поговоримо.</h2>
          </div>
          <a href="mailto:hello@example.com">hello@example.com ↗</a>
        </div>
        <div className="shell footerBottom">
          <span>© 2026</span>
          <span>Створено відкрито, крок за кроком.</span>
          <a href="#top">Нагору ↑</a>
        </div>
      </footer>
    </main>
  );
}
