type OriginLanguage = 'uk' | 'en' | 'de';

const frames = [
  '/vision-01.jpg', '/vision-02.jpg', '/vision-03.jpg', '/vision-04.jpg',
  '/vision-05.jpg', '/vision-06.jpg', '/vision-07.jpg', '/vision-08.jpg',
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
      'Сьогодні дитячі образи перетворилися для мене на практичний інтерес. Я досліджую AI-системи, агентні архітектури та ідею штучного інтелекту як потенційного цифрового організму — не лише як користувач технології, а як учасник її формування.',
    ],
    gallery: 'Образи, що сформували цікавість',
    labels: ['Інтелект', 'Система', 'Невідоме', 'Емпатія', 'Час', 'Машина', 'Автономність', 'Людина + технологія'],
  },
  en: {
    kicker: 'Forming the vision · 1980—2000',
    title: 'A future that began with science fiction',
    paragraphs: [
      'My interest in technology began in childhood, with the science fiction of the 1980s through the 2000s. Terminator, Aliens, The Matrix, 2001: A Space Odyssey, A.I. Artificial Intelligence and many other films taught me to see machines not only as tools, but as potentially independent intelligent systems.',
      'I was especially fascinated by the idea that the same machine logic could look good or evil to a person—not because of a machine’s emotions, but because of its goals, rules and way of acting.',
      'Later I discovered that many of these questions had long existed in real science—from Turing and Wiener’s cybernetics to today’s debates about autonomy, alignment and machine consciousness.',
      'I do not yet consider contemporary AI systems to be complete artificial-intelligence organisms. But they are the first signals: we are standing at the threshold of the next era, in which such a system may emerge.',
      'Today those childhood images have become a practical interest. I explore AI systems, agent architectures and artificial intelligence as a potential digital organism—not only as a user of technology, but as a participant in shaping it.',
    ],
    gallery: 'Images that shaped the curiosity',
    labels: ['Intelligence', 'System', 'The unknown', 'Empathy', 'Time', 'Machine', 'Autonomy', 'Human + technology'],
  },
  de: {
    kicker: 'Wie die Vision entstand · 1980—2000',
    title: 'Eine Zukunft, die mit Science-Fiction begann',
    paragraphs: [
      'Mein Interesse an Technologie begann in der Kindheit – mit der Science-Fiction der 1980er bis 2000er Jahre. Terminator, Aliens, Matrix, 2001: Odyssee im Weltraum, A.I. – Künstliche Intelligenz und viele andere Filme ließen mich Maschinen nicht nur als Werkzeuge sehen, sondern als potenziell eigenständige intelligente Systeme.',
      'Besonders faszinierte mich, dass dieselbe Maschinenlogik für Menschen gut oder böse erscheinen kann – nicht wegen der Gefühle der Maschine, sondern aufgrund ihrer Ziele, Regeln und Handlungsweise.',
      'Später erkannte ich, dass viele dieser Fragen längst in der Wissenschaft existieren – von Turing und Wieners Kybernetik bis zu heutigen Debatten über Autonomie, Alignment und Maschinenbewusstsein.',
      'Heutige KI-Systeme betrachte ich noch nicht als vollständige Organismen künstlicher Intelligenz. Aber sie sind erste Signale: Wir stehen an der Schwelle einer neuen Ära, in der ein solches System entstehen könnte.',
      'Heute sind die Bilder meiner Kindheit zu einem praktischen Interesse geworden. Ich erforsche KI-Systeme, Agentenarchitekturen und künstliche Intelligenz als potenziellen digitalen Organismus – nicht nur als Nutzer von Technologie, sondern als Mitgestalter.',
    ],
    gallery: 'Bilder, die die Neugier geprägt haben',
    labels: ['Intelligenz', 'System', 'Das Unbekannte', 'Empathie', 'Zeit', 'Maschine', 'Autonomie', 'Mensch + Technologie'],
  },
};

export function OriginStory({ lang }: { lang: OriginLanguage }) {
  const story = stories[lang];
  return <section className="originStory">
    <div className="originStoryIntro shell">
      <p className="kicker">{story.kicker}</p>
      <div><h2>{story.title}</h2>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </div>
    <div className="originGallery shell">
      <p className="kicker">{story.gallery}</p>
      <div className="originFrames">{frames.map((src, index) => <figure key={src}>
        <div className="originFrame"><img src={src} alt={story.labels[index]} loading="lazy" /></div>
        <figcaption><span>{String(index + 1).padStart(2, '0')}</span><span>{story.labels[index]}</span></figcaption>
      </figure>)}</div>
    </div>
  </section>;
}
