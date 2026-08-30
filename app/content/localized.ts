export type Language = 'en' | 'de';
export const languages: Language[] = ['en', 'de'];
export const projectSlugs = ['swagri', 'creonix', 'goalcompass', 'jobcompass'] as const;
export const visionSlugs = ['intelligence-attractor', 'salt-sensitivity', 'relational-narrowing'] as const;

const enProjects = {
  swagri: {
    state: 'Concept · R&D', tone: 'acid', size: 'featured', title: 'Swagri', mark: 'SW', eyebrow: 'Project / distributed R&D',
    description: 'Adaptive Swarm Grid for efficient distributed execution across heterogeneous devices.',
    facts: [['Role', 'Concept author'], ['Status', 'R&D'], ['Domain', 'Edge · P2P'], ['Direction', 'Rust']],
    signal: ['Heterogeneous devices', 'Distributed execution', 'Adaptive coordination'],
    sections: [
      { index: '01', kicker: 'Idea', title: 'Computing as an adaptive network, not a single centre.', body: 'Swagri explores how devices with different performance, memory, energy constraints and connection quality can become one shared execution environment.' },
      { index: '02', kicker: 'Focus', title: 'Assign work according to the real capacity of each node.', body: 'The central questions are scheduling, P2P communication, fault tolerance, throughput and avoiding unnecessary data movement. The grid must adapt as nodes join, leave or change state.' },
      { index: '03', kicker: 'Status', title: 'A priority research direction.', body: 'The project is currently shaping its architecture and performance criteria. This page presents the direction without exposing the private repository before a demonstrable slice is ready.' },
    ], links: [], materialsTitle: 'Private development', materialsNote: 'Code and technical materials are not public yet.'
  },
  creonix: {
    state: 'Prototype · private', tone: 'blue', size: 'featured', title: 'Creonix', mark: 'CR', eyebrow: 'Project / swarm intelligence',
    description: 'A decentralised swarm AI prototype with distributed memory, trust scores and rewards for useful work.',
    facts: [['Role', 'Author & developer'], ['Status', 'Prototype'], ['Language', 'Python'], ['Architecture', 'P2P · FAISS']],
    signal: ['Distributed memory', 'Trust score and decay', 'Proof of Useful Work'],
    sections: [
      { index: '01', kicker: 'Idea', title: 'A swarm that computes and remembers.', body: 'Creonix models a network without a single centre. Each node can hold a shard of shared knowledge, exchange fragments and participate in answering queries.' },
      { index: '02', kicker: 'Mechanism', title: 'Trust, forgetting and knowledge reconstruction.', body: 'Every knowledge item has a trust score. Unused information may decay, be archived or reduced to a lightweight representation, then reconstructed locally, through peer nodes or from an external source when needed again.' },
      { index: '03', kicker: 'Incentive', title: 'Reward useful participation rather than idle energy use.', body: 'Proof of Useful Work measures contributions to query resolution, inference, knowledge transfer and memory. A related ephemeral participation unit explores value tied to a node’s active presence.' },
    ], links: [], materialsTitle: 'Private prototype', materialsNote: 'The concept is public; the source code remains private at this stage.'
  },
  goalcompass: {
    state: 'Active · 0.4.1', tone: 'paper', size: 'compact', title: 'GoalCompass', mark: 'GC', eyebrow: 'Project / personal effectiveness',
    description: 'A local-first personal effectiveness assistant that connects daily activity with goals and working modes.',
    facts: [['Role', 'Author & developer'], ['Version', '0.4.1'], ['Platform', 'Windows'], ['Language', 'Python']],
    signal: ['Local activity database', 'Goals and rules', 'AI without a required API'],
    sections: [
      { index: '01', kicker: 'Problem', title: 'Goals often live separately from what a person does today.', body: 'Time trackers count minutes and task lists count completed items. GoalCompass adds context: which goal an activity supports and whether it matches the current working mode.' },
      { index: '02', kicker: 'Approach', title: 'A local control centre with a lightweight overlay.', body: 'The app combines activity rules, goal profiles, progress, schedules, statistics and a small overlay. The manual workflow is primary; AI-assisted configuration works through copy and paste without requiring an API key.' },
      { index: '03', kicker: 'Principle', title: 'Personal history stays on the user’s computer.', body: 'Profiles, settings, activity and proposal history are stored locally. Updates preserve personal data and require confirmation before installation.' },
    ], links: [], materialsTitle: 'Private beta', materialsNote: 'The project is active, but public downloads are not available yet.'
  },
  jobcompass: {
    state: 'Active · v0.11.2', tone: 'paper', size: 'compact', title: 'JobCompass', mark: 'JC', eyebrow: 'Project / local product',
    description: 'A local Windows app that finds vacancies, explains relevance and keeps the application workflow organised.',
    facts: [['Role', 'Author & developer'], ['Version', '0.11.2'], ['Platform', 'Windows 10/11'], ['Technology', 'Python · Tkinter']],
    signal: ['Local storage', 'Explainable score 0—100%', 'Ukrainian · English · German'],
    sections: [
      { index: '01', kicker: 'Problem', title: 'A job search fragments into dozens of tabs.', body: 'Vacancies arrive from different sources, relevance scores are often opaque and application history is easy to lose. JobCompass brings search, CV comparison, favourites, statuses and application material into one local workspace.' },
      { index: '02', kicker: 'Approach', title: 'Useful automation without giving up control.', body: 'The app reads JSON, TXT, DOCX and PDF CVs, searches public sources and career sites, normalises results and shows an explainable match score. The person always confirms the final application.' },
      { index: '03', kicker: 'Result', title: 'A packaged Windows application, not only a prototype.', body: 'Installer and portable builds are available alongside multiple candidate profiles, guest mode, scheduled daily search, status history and update verification.' },
    ], links: [
      { label: 'Download Setup', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Setup.exe', primary: true },
      { label: 'Portable ZIP', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Portable.zip' },
      { label: 'GitHub', href: 'https://github.com/vitalii87/JobCompass' },
    ], materialsTitle: 'Open the project', materialsNote: ''
  },
};

const deProjects = {
  swagri: { ...enProjects.swagri, state: 'Konzept · F&E', eyebrow: 'Projekt / verteilte F&E', description: 'Adaptive Swarm Grid für effiziente verteilte Ausführung auf heterogenen Geräten.', facts: [['Rolle', 'Konzeptautor'], ['Status', 'F&E'], ['Bereich', 'Edge · P2P'], ['Richtung', 'Rust']], signal: ['Heterogene Geräte', 'Verteilte Ausführung', 'Adaptive Koordination'], sections: [
    { index: '01', kicker: 'Idee', title: 'Rechnen als adaptives Netz statt als einzelnes Zentrum.', body: 'Swagri untersucht, wie Geräte mit unterschiedlicher Leistung, Speicherkapazität, Energiegrenze und Verbindungsqualität zu einer gemeinsamen Ausführungsumgebung werden können.' },
    { index: '02', kicker: 'Fokus', title: 'Arbeit nach den realen Fähigkeiten jedes Knotens verteilen.', body: 'Im Mittelpunkt stehen Scheduling, P2P-Kommunikation, Fehlertoleranz, Durchsatz und die Vermeidung unnötiger Datenbewegungen. Das Grid passt sich an, wenn Knoten kommen, gehen oder ihren Zustand ändern.' },
    { index: '03', kicker: 'Status', title: 'Ein priorisierter Forschungsbereich.', body: 'Derzeit entstehen Architektur und Leistungskriterien. Die Seite zeigt die Richtung, ohne das private Repository vor einem belastbaren Demonstrator offenzulegen.' },
  ], materialsTitle: 'Private Entwicklung', materialsNote: 'Code und technische Unterlagen sind noch nicht öffentlich.' },
  creonix: { ...enProjects.creonix, state: 'Prototyp · privat', eyebrow: 'Projekt / Schwarmintelligenz', description: 'Dezentraler Schwarm-KI-Prototyp mit verteiltem Gedächtnis, Vertrauenswerten und Belohnung nützlicher Arbeit.', facts: [['Rolle', 'Autor & Entwickler'], ['Status', 'Prototyp'], ['Sprache', 'Python'], ['Architektur', 'P2P · FAISS']], signal: ['Verteiltes Gedächtnis', 'Trust Score und Verfall', 'Proof of Useful Work'], sections: [
    { index: '01', kicker: 'Idee', title: 'Ein Schwarm, der rechnet und sich erinnert.', body: 'Creonix modelliert ein Netz ohne einziges Zentrum. Jeder Knoten kann einen Teil des gemeinsamen Wissens speichern, Fragmente austauschen und an Antworten mitwirken.' },
    { index: '02', kicker: 'Mechanik', title: 'Vertrauen, Vergessen und Rekonstruktion von Wissen.', body: 'Jeder Wissenseintrag besitzt einen Trust Score. Ungenutzte Information kann verfallen, archiviert oder reduziert und bei Bedarf lokal, über andere Knoten oder externe Quellen rekonstruiert werden.' },
    { index: '03', kicker: 'Anreiz', title: 'Nützliche Beteiligung statt passiven Energieverbrauch belohnen.', body: 'Proof of Useful Work bewertet Beiträge zu Anfragebearbeitung, Inferenz, Wissenstransfer und Gedächtnis. Eine vergängliche Beteiligungseinheit bindet Wert an aktive Präsenz.' },
  ], materialsTitle: 'Privater Prototyp', materialsNote: 'Das Konzept ist öffentlich; der Quellcode bleibt vorerst privat.' },
  goalcompass: { ...enProjects.goalcompass, state: 'Aktiv · 0.4.1', eyebrow: 'Projekt / persönliche Effektivität', description: 'Local-first-Assistent, der tägliche Aktivität mit Zielen und Arbeitsmodi verbindet.', facts: [['Rolle', 'Autor & Entwickler'], ['Version', '0.4.1'], ['Plattform', 'Windows'], ['Sprache', 'Python']], signal: ['Lokale Aktivitätsdatenbank', 'Ziele und Regeln', 'KI ohne API-Pflicht'], sections: [
    { index: '01', kicker: 'Problem', title: 'Ziele sind oft von dem getrennt, was heute passiert.', body: 'Zeiterfassung zählt Minuten, Aufgabenlisten zählen Häkchen. GoalCompass ergänzt den Kontext: Welches Ziel unterstützt eine Aktivität und passt sie zum aktuellen Arbeitsmodus?' },
    { index: '02', kicker: 'Ansatz', title: 'Lokales Kontrollzentrum mit leichtem Overlay.', body: 'Die Anwendung verbindet Aktivitätsregeln, Zielprofile, Fortschritt, Zeitpläne, Statistiken und ein kleines Overlay. Der manuelle Ablauf bleibt zentral; KI-Konfiguration funktioniert per Copy-and-paste ohne API-Schlüssel.' },
    { index: '03', kicker: 'Prinzip', title: 'Persönliche Historie bleibt auf dem eigenen Rechner.', body: 'Profile, Einstellungen, Aktivitäten und Vorschläge werden lokal gespeichert. Updates bewahren persönliche Daten und benötigen eine Bestätigung.' },
  ], materialsTitle: 'Private Beta', materialsNote: 'Das Projekt wird aktiv entwickelt; ein öffentlicher Download ist noch nicht verfügbar.' },
  jobcompass: { ...enProjects.jobcompass, state: 'Aktiv · v0.11.2', eyebrow: 'Projekt / lokales Produkt', description: 'Lokale Windows-App, die Stellen findet, Relevanz erklärt und Bewerbungen strukturiert.', facts: [['Rolle', 'Autor & Entwickler'], ['Version', '0.11.2'], ['Plattform', 'Windows 10/11'], ['Technologie', 'Python · Tkinter']], signal: ['Lokale Speicherung', 'Erklärbarer Score 0—100%', 'Ukrainisch · Englisch · Deutsch'], sections: [
    { index: '01', kicker: 'Problem', title: 'Die Jobsuche zerfällt in Dutzende Tabs.', body: 'Stellen kommen aus verschiedenen Quellen, Relevanzwerte sind oft undurchsichtig und Bewerbungsverläufe gehen verloren. JobCompass bündelt Suche, Lebenslaufabgleich, Favoriten, Status und Unterlagen lokal.' },
    { index: '02', kicker: 'Ansatz', title: 'Nützliche Automatisierung ohne Kontrollverlust.', body: 'Die App liest JSON-, TXT-, DOCX- und PDF-Lebensläufe, durchsucht öffentliche Quellen, normalisiert Ergebnisse und zeigt einen erklärbaren Match Score. Die endgültige Bewerbung bestätigt immer der Mensch.' },
    { index: '03', kicker: 'Ergebnis', title: 'Eine fertige Windows-Anwendung, nicht nur ein Prototyp.', body: 'Installer und Portable-Version stehen neben mehreren Kandidatenprofilen, Gastmodus, täglicher Suche, Statushistorie und Updateprüfung bereit.' },
  ], links: [
    { label: 'Setup herunterladen', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Setup.exe', primary: true },
    { label: 'Portable ZIP', href: 'https://github.com/vitalii87/JobCompass/releases/download/v0.11.2/JobCompass-0.11.2-Portable.zip' },
    { label: 'GitHub', href: 'https://github.com/vitalii87/JobCompass' },
  ], materialsTitle: 'Projekt öffnen', materialsNote: '' },
};

const enVisions = {
  'intelligence-attractor': { category: 'Theory · initial formulation, 2026', title: 'The Intelligence Attractor Hypothesis', description: 'Why effective decisions, cognitive methods and architectures may converge under the constraints of reality.', intro: 'What if the development of intelligence is not only an accumulation of capabilities, but also the gradual elimination of inefficient ways to think, decide and be built?', outline: ['The space of inefficiency', 'Three levels of convergence', 'Subjective optimum', 'The physical limit'], sections: [
    { title: 'The space of inefficiency', paragraphs: ['A weak system has countless ways to fail: use a poor model, miss information, waste energy or find the right answer too late. The space of all possible systems is huge, but the space near limiting efficiency may be much narrower.'], quote: 'Different intelligences may converge not because they copy one another, but because they independently approach the same limits of reality.' },
    { title: 'Decision, cognition and architecture', paragraphs: ['The weakest convergence is the same outcome. A stronger form is the recurrence of causal modelling, decomposition, prediction, uncertainty estimation and self-correction.', 'Near performance limits the physical implementation also becomes an object of optimisation: time, energy, memory, reliability and scalability become part of intelligence quality.'] },
    { title: 'The optimum remains subjective', paragraphs: ['Complete knowledge of the world does not determine a choice on its own. Goals, needs, values and priorities of the particular subject still matter.', 'The attractor therefore does not imply one universal morality. It describes a reduction in the gap between what a system would choose with full understanding and what it can actually compute and realise.'] },
  ], source: 'https://github.com/vitalii87/thought-traces/blob/main/ideas/intelligence-attractor-hypothesis.md' },
  'salt-sensitivity': { category: 'Empirical framework · 19 August 2026', title: 'Salt Sensitivity', description: 'A testable framework for measuring how the initial differences between AI agents influence their solutions.', intro: 'Can weak manifestations of the Intelligence Attractor already be observed by comparing independent AI agents?', outline: ['What is salt?', 'An experiment', 'Functional distance', 'Prediction'], sections: [
    { title: 'Initial differences', paragraphs: ['Training data, architecture, instructions, tools, resources and context form an agent’s initial “salt”. Its impact should decrease as competence and constraint precision increase.'], quote: 'Competence rises, origin matters less, and the constraints of the problem matter more.' },
    { title: 'A distributed-systems experiment', paragraphs: ['Independent agents receive the same P2P-system brief and the same benchmarks for latency, memory, energy and fault tolerance. Repeated optimisation should filter weak alternatives and reveal whether key principles converge.'] },
    { title: 'Function, not textual similarity', paragraphs: ['Different syntax can still express the same non-blocking I/O, bounded queues, backpressure and separation of transport, protocol and execution.', 'The useful measurement is therefore functional distance: how much do consequential design choices still depend on the initial salt?'] },
  ], source: 'https://github.com/vitalii87/thought-traces/blob/main/ideas/empirical-evidence-salt-sensitivity.md' },
  'relational-narrowing': { category: 'Theory extension · 20 August 2026', title: 'Relational Narrowing', description: 'How fuller context may narrow the set of functionally distinct optima.', intro: 'Some broad sets of “equally good” solutions may exist only because the task, subject or preferences are underspecified.', outline: ['Optimality as relation', 'Functional equivalence', 'Strong uniqueness', 'Moving optimum'], sections: [
    { title: 'No solution outside context', paragraphs: ['Optimality is relative to a subject, environment, time, resources and preferences. As causally relevant context becomes more complete, more relations can distinguish alternatives.'], quote: 'Fuller context does not guarantee uniqueness, but it reduces the space of accidental ties.' },
    { title: 'Do not count copies as distinct optima', paragraphs: ['Physically different implementations belong to the same functional class when all relevant consequences are identical. The question shifts from one implementation to one best class of consequences.'] },
    { title: 'The attractor may be a trajectory', paragraphs: ['Context changes over time, so the optimum can move as well. Intelligence development may be viewed as reducing the distance to a dynamic trajectory of optimal functional states.'] },
  ], source: 'https://github.com/vitalii87/thought-traces/blob/main/ideas/relational-narrowing-and-strong-functional-uniqueness.md' },
};

const deVisions = {
  'intelligence-attractor': { ...enVisions['intelligence-attractor'], category: 'Theorie · Erstformulierung, 2026', title: 'Die Hypothese des Intelligenz-Attraktors', description: 'Warum sich wirksame Entscheidungen, Erkenntnismethoden und Architekturen unter den Grenzen der Realität annähern könnten.', intro: 'Was, wenn die Entwicklung von Intelligenz nicht nur Fähigkeiten anhäuft, sondern ineffiziente Arten zu denken, zu entscheiden und gebaut zu sein schrittweise entfernt?', outline: ['Raum der Ineffizienz', 'Drei Ebenen der Annäherung', 'Subjektives Optimum', 'Physische Grenze'], sections: [
    { title: 'Der Raum der Ineffizienz', paragraphs: ['Ein schwaches System kann auf unzählige Arten scheitern: ein falsches Modell nutzen, Information übersehen, Energie verschwenden oder die richtige Antwort zu spät finden. Der Raum möglicher Systeme ist riesig; der Raum nahe maximaler Effizienz könnte deutlich kleiner sein.'], quote: 'Verschiedene Intelligenzen können sich annähern, weil sie unabhängig dieselben Grenzen der Realität erreichen.' },
    { title: 'Entscheidung, Erkenntnis und Architektur', paragraphs: ['Die schwächste Konvergenz ist dasselbe Ergebnis. Stärker wäre das Wiederkehren von Kausalmodellen, Zerlegung, Prognose, Unsicherheitsschätzung und Selbstkorrektur.', 'Nahe der Leistungsgrenze wird auch die physische Umsetzung optimiert: Zeit, Energie, Speicher, Zuverlässigkeit und Skalierung werden Teil der Intelligenzqualität.'] },
    { title: 'Das Optimum bleibt subjektiv', paragraphs: ['Vollständiges Weltwissen bestimmt die Wahl nicht allein. Ziele, Bedürfnisse, Werte und Prioritäten des konkreten Subjekts bleiben entscheidend.', 'Der Attraktor führt daher nicht zu einer universellen Moral, sondern verkleinert die Lücke zwischen der Wahl bei vollem Verständnis und dem tatsächlich Berechenbaren.'] },
  ] },
  'salt-sensitivity': { ...enVisions['salt-sensitivity'], category: 'Empirischer Rahmen · 19. August 2026', title: 'Salt Sensitivity', description: 'Ein prüfbarer Rahmen für den Einfluss anfänglicher Unterschiede zwischen KI-Agenten.', intro: 'Lassen sich schwache Formen des Intelligenz-Attraktors schon heute beim Vergleich unabhängiger KI-Agenten beobachten?', outline: ['Was ist „Salt“?', 'Experiment', 'Funktionale Distanz', 'Vorhersage'], sections: [
    { title: 'Anfängliche Unterschiede', paragraphs: ['Trainingsdaten, Architektur, Anweisungen, Werkzeuge, Ressourcen und Kontext bilden den anfänglichen „Salt“ eines Agenten. Sein Einfluss sollte mit Kompetenz und präziseren Randbedingungen sinken.'], quote: 'Kompetenz steigt, Herkunft zählt weniger und die Grenzen der Aufgabe zählen mehr.' },
    { title: 'Experiment mit einem verteilten System', paragraphs: ['Unabhängige Agenten erhalten dieselbe P2P-Aufgabe und dieselben Benchmarks für Latenz, Speicher, Energie und Fehlertoleranz. Wiederholte Optimierung zeigt, ob sich zentrale Prinzipien annähern.'] },
    { title: 'Funktion statt Textähnlichkeit', paragraphs: ['Unterschiedliche Syntax kann dennoch dasselbe nichtblockierende I/O, begrenzte Queues, Backpressure und dieselbe Trennung von Transport, Protokoll und Ausführung ausdrücken.', 'Gemessen werden sollte die funktionale Distanz: Wie stark hängen relevante Entscheidungen noch vom anfänglichen Salt ab?'] },
  ] },
  'relational-narrowing': { ...enVisions['relational-narrowing'], category: 'Theorieerweiterung · 20. August 2026', title: 'Relationale Verengung', description: 'Wie vollständigerer Kontext die Menge funktional verschiedener Optima verkleinern kann.', intro: 'Manche Mengen „gleich guter“ Lösungen könnten nur entstehen, weil Aufgabe, Subjekt oder Präferenzen nicht vollständig beschrieben sind.', outline: ['Optimalität als Relation', 'Funktionale Äquivalenz', 'Starke Eindeutigkeit', 'Bewegliches Optimum'], sections: [
    { title: 'Keine Lösung außerhalb des Kontexts', paragraphs: ['Optimalität ist relativ zu Subjekt, Umwelt, Zeit, Ressourcen und Präferenzen. Vollständigerer kausaler Kontext schafft mehr Beziehungen, die Alternativen unterscheiden können.'], quote: 'Vollständigerer Kontext garantiert keine Eindeutigkeit, reduziert aber zufällige Gleichstände.' },
    { title: 'Kopien nicht als verschiedene Optima zählen', paragraphs: ['Physisch verschiedene Umsetzungen gehören zur selben funktionalen Klasse, wenn alle relevanten Folgen gleich sind. Die Frage verschiebt sich von einer Umsetzung zu einer besten Klasse von Folgen.'] },
    { title: 'Der Attraktor kann eine Trajektorie sein', paragraphs: ['Kontext verändert sich mit der Zeit, also kann sich auch das Optimum bewegen. Intelligenzentwicklung lässt sich als Annäherung an eine dynamische Bahn optimaler funktionaler Zustände verstehen.'] },
  ] },
};

export const localized = {
  en: {
    home: { status: 'Independent projects · 2026', line1: 'I build systems.', line2: 'I formulate hypotheses.', intro: 'I’m Vitalii Zhyliaiev. I build local software tools, explore intelligence and preserve a public trace of how ideas evolve.', kicker: 'Map of the space', sectionTitle: 'Practice, theory\nand context.', cards: [['01', 'Projects', 'Working products and technical experiments — from distributed computing to local-first assistants.', '/en/projects', 'acid'], ['02', 'Ideas', 'Hypotheses about intelligence, optimisation, technology and possible futures.', '/en/visions', 'blue'], ['03', 'About', 'The context behind the work and an open channel for discussion.', '/en/about', 'paper']] },
    projectHeading: { kicker: '01 / Projects', title1: 'Work', title2: 'you can open.', lead: 'Priority products and research directions, with an honest status and direct access where available.' },
    projects: enProjects,
    visionHeading: { kicker: '02 / Ideas', title1: 'Thoughts are', title2: 'prototypes too.', lead: 'Three connected texts on how the constraints of reality may shape decisions, intelligence and architecture.', position: 'Position', manifesto: 'This is not a collection of final answers. It is a public intellectual trail: each hypothesis has a status, boundaries and an invitation to test it.' },
    visions: enVisions,
    about: { kicker: '03 / About', name: 'Vitalii Zhyliaiev', thesis: 'building and exploring.', short: 'In short', title: 'I’m interested in systems that give people clarity and control.', paragraphs: ['I build software tools and technical experiments — from local-first Windows applications to distributed-computing concepts.', 'At the same time I explore broader questions: how intelligence optimises decisions, why independent systems may converge and where the accidents of origin give way to the constraints of reality.', 'This site connects both sides: what can already be run and what still needs to be tested.'], facts: ['Software products', 'QA & automation', 'AI & systems', 'Open hypotheses'], contact: 'Contact & feedback', contactTitle: 'Have an argument,\nan idea or a project?', github: 'GitHub profile', discuss: 'Discuss the theories' },
  },
  de: {
    home: { status: 'Unabhängige Projekte · 2026', line1: 'Ich baue Systeme.', line2: 'Ich formuliere Hypothesen.', intro: 'Ich bin Vitalii Zhyliaiev. Ich entwickle lokale Softwarewerkzeuge, erforsche Intelligenz und dokumentiere öffentlich, wie Ideen entstehen.', kicker: 'Karte des Raums', sectionTitle: 'Praxis, Theorie\nund Kontext.', cards: [['01', 'Projekte', 'Produkte und technische Experimente — von verteiltem Rechnen bis zu Local-first-Assistenten.', '/de/projects', 'acid'], ['02', 'Ideen', 'Hypothesen über Intelligenz, Optimierung, Technologie und mögliche Zukünfte.', '/de/visions', 'blue'], ['03', 'Über mich', 'Der Kontext hinter der Arbeit und ein offener Kanal für Diskussionen.', '/de/about', 'paper']] },
    projectHeading: { kicker: '01 / Projekte', title1: 'Arbeit,', title2: 'die man öffnen kann.', lead: 'Priorisierte Produkte und Forschungsrichtungen mit ehrlichem Status und direktem Zugang, wo er verfügbar ist.' },
    projects: deProjects,
    visionHeading: { kicker: '02 / Ideen', title1: 'Gedanken sind', title2: 'auch Prototypen.', lead: 'Drei verbundene Texte darüber, wie die Grenzen der Realität Entscheidungen, Intelligenz und Architektur formen könnten.', position: 'Position', manifesto: 'Dies ist keine Sammlung endgültiger Antworten, sondern eine öffentliche Denkspur: Jede Hypothese hat Status, Grenzen und eine Einladung zur Prüfung.' },
    visions: deVisions,
    about: { kicker: '03 / Über mich', name: 'Vitalii Zhyliaiev', thesis: 'entwickeln und erforschen.', short: 'Kurz gesagt', title: 'Mich interessieren Systeme, die Menschen Klarheit und Kontrolle zurückgeben.', paragraphs: ['Ich entwickle Softwarewerkzeuge und technische Experimente — von lokalen Windows-Anwendungen bis zu Konzepten für verteiltes Rechnen.', 'Parallel untersuche ich größere Fragen: Wie optimiert Intelligenz Entscheidungen, warum können unabhängige Systeme konvergieren und wo weichen Zufälle des Ursprungs den Grenzen der Realität?', 'Diese Website verbindet beide Seiten: das, was bereits funktioniert, und das, was noch geprüft werden muss.'], facts: ['Softwareprodukte', 'QA & Automatisierung', 'KI & Systeme', 'Offene Hypothesen'], contact: 'Kontakt & Feedback', contactTitle: 'Ein Argument,\neine Idee oder ein Projekt?', github: 'GitHub-Profil', discuss: 'Theorien diskutieren' },
  },
};
