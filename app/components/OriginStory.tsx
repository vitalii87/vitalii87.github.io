type OriginLanguage = 'uk' | 'en' | 'de';

const frames = [
  '/vision-01.jpg', '/vision-02.jpg', '/vision-03.jpg', '/vision-04.jpg',
  '/vision-05.jpg', '/vision-06.jpg', '/vision-07.jpg', '/vision-08.jpg',
];

const trajectoryFrames = [
  '/trajectory-01.png', '/trajectory-02.png', '/trajectory-03.png',
  '/trajectory-04.png', '/trajectory-05.png',
];

const stories = {
  uk: {
    kicker: 'Формування бачення · 1980—2000',
    title: 'Майбутнє, яке почалося з фантастики',
    paragraphs: [
      'Моя цікавість до технологій почалася ще в дитинстві — з фантастики 1980–2000-х. «Термінатор», «Чужі», «Матриця», «2001: Космічна одіссея», «Штучний розум» та інші фільми змусили мене дивитися на машини не лише як на інструменти, а як на потенційно самостійні інтелектуальні системи.',
      'Особливо мене захоплювала ідея, що одна й та сама машинна логіка може виглядати для людини як добро або зло — залежно не від емоцій машини, а від її цілей, правил і способу дії.',
      'Пізніше я побачив, що багато з цих питань давно існують у реальній науці — від Тюрінга й кібернетики Вінера до сучасних дискусій про автономність, alignment та машинну свідомість.',
      'Сучасні AI-системи я ще не вважаю повноцінним штучним інтелектом-організмом. Але вони вже є першими дзвінками: ми стоїмо на порозі наступної ери, у якій така система може з’явитися.',
    ],
    gallery: 'Образи, що сформували цікавість',
    labels: ['Інтелект', 'Система', 'Невідоме', 'Емпатія', 'Час', 'Машина', 'Автономність', 'Людина + технологія'],
    trajectoryKicker: 'Питання → побудова → дослідження',
    trajectoryTitle: 'Від спостереження за системами до їх створення',
    trajectoryParagraphs: [
      'Захоплення зрештою стало практичним. Я почав будувати власні системи навколо розподілених обчислень, автономних агентів і довготривалої машинної пам’яті — не щоб відтворити фантастику, а щоб перевірити, які частини цих ідей справді можуть працювати. Звідси виросли Creonix, Swagri та експерименти з агентами.',
      'Мені подобаються ідеї, які спочатку звучать надто амбітно, але лише якщо згодом їх можна звести до перевірюваного експерименту. Уява допомагає знаходити питання; експерименти вирішують, які відповіді витримують перевірку.',
      'Одне з постійних питань у моїх проєктах: чи повинен інтелект узагалі жити всередині однієї моделі? Мене особливо цікавлять розподілені системи — різнорідні агенти, пристрої й процеси, здатні координуватися, навчатися та поступово формувати щось більше за суму окремих частин.',
    ],
    trajectoryLabels: ['Агенти', 'Розподілений інтелект', 'Обчислювальна основа', 'Автоматизовані системи', 'Межа дослідження'],
    trajectoryGallery: 'Системи на практиці',
  },
  en: {
    kicker: 'Forming the vision · 1980—2000',
    title: 'A future that began with science fiction',
    paragraphs: [
      'My interest in technology began in childhood, with the science fiction of the 1980s through the 2000s. Terminator, Aliens, The Matrix, 2001: A Space Odyssey, A.I. Artificial Intelligence and many other films taught me to see machines not only as tools, but as potentially independent intelligent systems.',
      'I was especially fascinated by the idea that the same machine logic could look good or evil to a person—not because of a machine’s emotions, but because of its goals, rules and way of acting.',
      'Later I discovered that many of these questions had long existed in real science—from Turing and Wiener’s cybernetics to today’s debates about autonomy, alignment and machine consciousness.',
      'I do not yet consider contemporary AI systems to be complete artificial-intelligence organisms. But they are the first signals: we are standing at the threshold of the next era, in which such a system may emerge.',
    ],
    gallery: 'Images that shaped the curiosity',
    labels: ['Intelligence', 'System', 'The unknown', 'Empathy', 'Time', 'Machine', 'Autonomy', 'Human + technology'],
    trajectoryKicker: 'Questions → building → research',
    trajectoryTitle: 'From watching systems to building them',
    trajectoryParagraphs: [
      'The fascination eventually became practical. I started building my own systems around distributed computing, autonomous agents and long-term machine memory—not to recreate science fiction, but to test which parts of those ideas can actually work. Creonix, Swagri and my agent experiments grew from that direction.',
      'I like ideas that initially sound too ambitious, but only if they can eventually be reduced to something testable. Imagination helps me find questions; experiments decide which answers survive.',
      'A recurring question in my projects is whether intelligence has to live inside a single model at all. I am especially interested in distributed systems: heterogeneous agents, devices and processes that can coordinate, learn and gradually form something larger than their individual parts.',
    ],
    trajectoryLabels: ['Agents', 'Distributed intelligence', 'Computational substrate', 'Automated systems', 'Research frontier'],
    trajectoryGallery: 'Systems in practice',
  },
  de: {
    kicker: 'Wie die Vision entstand · 1980—2000',
    title: 'Eine Zukunft, die mit Science-Fiction begann',
    paragraphs: [
      'Mein Interesse an Technologie begann in der Kindheit – mit der Science-Fiction der 1980er bis 2000er Jahre. Terminator, Aliens, Matrix, 2001: Odyssee im Weltraum, A.I. – Künstliche Intelligenz und viele andere Filme ließen mich Maschinen nicht nur als Werkzeuge sehen, sondern als potenziell eigenständige intelligente Systeme.',
      'Besonders faszinierte mich, dass dieselbe Maschinenlogik für Menschen gut oder böse erscheinen kann – nicht wegen der Gefühle der Maschine, sondern aufgrund ihrer Ziele, Regeln und Handlungsweise.',
      'Später erkannte ich, dass viele dieser Fragen längst in der Wissenschaft existieren – von Turing und Wieners Kybernetik bis zu heutigen Debatten über Autonomie, Alignment und Maschinenbewusstsein.',
      'Heutige KI-Systeme betrachte ich noch nicht als vollständige Organismen künstlicher Intelligenz. Aber sie sind erste Signale: Wir stehen an der Schwelle einer neuen Ära, in der ein solches System entstehen könnte.',
    ],
    gallery: 'Bilder, die die Neugier geprägt haben',
    labels: ['Intelligenz', 'System', 'Das Unbekannte', 'Empathie', 'Zeit', 'Maschine', 'Autonomie', 'Mensch + Technologie'],
    trajectoryKicker: 'Fragen → Bauen → Forschung',
    trajectoryTitle: 'Vom Beobachten zum Bauen von Systemen',
    trajectoryParagraphs: [
      'Die Faszination wurde schließlich praktisch. Ich begann, eigene Systeme rund um verteiltes Rechnen, autonome Agenten und langfristiges Maschinengedächtnis zu entwickeln – nicht um Science-Fiction nachzubauen, sondern um zu prüfen, welche Teile dieser Ideen wirklich funktionieren können. Daraus entstanden Creonix, Swagri und meine Agentenexperimente.',
      'Ich mag Ideen, die zunächst zu ambitioniert klingen – aber nur, wenn sie sich später in etwas Überprüfbares übersetzen lassen. Vorstellungskraft hilft mir, Fragen zu finden; Experimente entscheiden, welche Antworten bestehen.',
      'Eine wiederkehrende Frage in meinen Projekten ist, ob Intelligenz überhaupt in einem einzigen Modell leben muss. Besonders interessieren mich verteilte Systeme: heterogene Agenten, Geräte und Prozesse, die sich koordinieren, lernen und schrittweise etwas bilden können, das größer ist als ihre einzelnen Teile.',
    ],
    trajectoryLabels: ['Agenten', 'Verteilte Intelligenz', 'Rechengrundlage', 'Automatisierte Systeme', 'Forschungsgrenze'],
    trajectoryGallery: 'Systeme in der Praxis',
  },
};

export function OriginStory({ lang }: { lang: OriginLanguage }) {
  const story = stories[lang];
  return <section className="originStory">
    <div className="originChapter shell">
      <div className="originChapterIntro">
        <div className="originText"><p className="kicker">{story.kicker}</p><h2>{story.title}</h2>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="originSideGallery" aria-label={story.gallery}>
          <p className="originGalleryLabel">{story.gallery}</p>
          <div className="originFrames originSideFrames">{frames.slice(0, 2).map((src, index) => <figure key={src}>
            <div className="originFrame"><img src={src} alt={story.labels[index]} loading="lazy" /></div>
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span><span>{story.labels[index]}</span></figcaption>
          </figure>)}</div>
        </div>
      </div>
      <div className="originBottomGallery" aria-label={story.gallery}>
        <div className="originFrames filmFrames">{frames.slice(2).map((src, index) => <figure key={src}>
          <div className="originFrame"><img src={src} alt={story.labels[index + 2]} loading="lazy" /></div>
          <figcaption><span>{String(index + 3).padStart(2, '0')}</span><span>{story.labels[index + 2]}</span></figcaption>
        </figure>)}</div>
      </div>
    </div>
    <div className="galleryTurn shell"><span>SCIENCE FICTION</span><span aria-hidden="true">↓</span><strong>SYSTEMS IN PRACTICE</strong></div>
    <div className="originChapter originPractice shell">
      <div className="originChapterIntro">
        <div className="originText"><p className="kicker">{story.trajectoryKicker}</p><h3>{story.trajectoryTitle}</h3>{story.trajectoryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="originSideGallery" aria-label={story.trajectoryGallery}>
          <p className="originGalleryLabel">{story.trajectoryGallery}</p>
          <div className="originFrames originSideFrames practiceSideFrames">{trajectoryFrames.slice(0, 2).map((src, index) => <figure key={src}>
            <div className="originFrame"><img src={src} alt={story.trajectoryLabels[index]} loading="lazy" /></div>
            <figcaption><span>{String(index + 9).padStart(2, '0')}</span><span>{story.trajectoryLabels[index]}</span></figcaption>
          </figure>)}</div>
        </div>
      </div>
      <div className="originBottomGallery" aria-label={story.trajectoryGallery}>
        <div className="originFrames practiceFrames">{trajectoryFrames.slice(2).map((src, index) => <figure key={src}>
          <div className="originFrame"><img src={src} alt={story.trajectoryLabels[index + 2]} loading="lazy" /></div>
          <figcaption><span>{String(index + 11).padStart(2, '0')}</span><span>{story.trajectoryLabels[index + 2]}</span></figcaption>
        </figure>)}</div>
      </div>
    </div>
  </section>;
}
