import type { Metadata } from 'next';
import Link from 'next/link';
import { localized, projectSlugs, visionSlugs, type Language } from '../content/localized';
import { ArticleDetail } from './ArticleDetail';
import { ProjectDetail } from './ProjectDetail';
import { OriginStory } from './OriginStory';

type ProjectSlug = typeof projectSlugs[number];
type VisionSlug = typeof visionSlugs[number];
const siteUrl = 'https://zhyliaiev.eu';

function localizedPath(lang: Language, path = '') {
  return `${lang === 'en' ? '' : `/${lang}`}${path}` || '/';
}

function alternates(lang: Language, path = ''): Metadata['alternates'] {
  return {
    canonical: `${siteUrl}${localizedPath(lang, path)}`,
    languages: {
      en: `${siteUrl}${localizedPath('en', path)}`,
      de: `${siteUrl}${localizedPath('de', path)}`,
      uk: `${siteUrl}/ua${path}`,
      'x-default': `${siteUrl}${localizedPath('en', path)}`,
    },
  };
}

export function homeMetadata(lang: Language): Metadata { return { title: lang === 'en' ? 'V/01 — Projects, theories and visions' : 'V/01 — Projekte, Theorien und Visionen', description: localized[lang].home.intro, alternates: alternates(lang) }; }
export function projectsMetadata(lang: Language): Metadata { return { title: lang === 'en' ? 'Projects — V/01' : 'Projekte — V/01', description: localized[lang].projectHeading.lead, alternates: alternates(lang, '/projects') }; }
export function projectMetadata(lang: Language, slug: ProjectSlug): Metadata { const project = localized[lang].projects[slug]; return { title: `${project.title} — V/01`, description: project.description, alternates: alternates(lang, `/projects/${slug}`), openGraph: { title: `${project.title} — V/01`, description: project.description, images: [] }, twitter: { card: 'summary', title: `${project.title} — V/01`, description: project.description, images: [] } }; }
export function visionsMetadata(lang: Language): Metadata { return { title: lang === 'en' ? 'Ideas — V/01' : 'Ideen — V/01', description: localized[lang].visionHeading.lead, alternates: alternates(lang, '/visions') }; }
export function visionMetadata(lang: Language, slug: VisionSlug): Metadata { const vision = localized[lang].visions[slug]; return { title: `${vision.title} — V/01`, description: vision.description, alternates: alternates(lang, `/visions/${slug}`), openGraph: { title: vision.title, description: vision.description, images: [] }, twitter: { card: 'summary', title: vision.title, description: vision.description, images: [] } }; }
export function aboutMetadata(lang: Language): Metadata { return { title: lang === 'en' ? 'About — V/01' : 'Über mich — V/01', description: localized[lang].about.title, alternates: alternates(lang, '/about') }; }

export function LocalizedHomePage({ lang }: { lang: Language }) {
  const page = localized[lang].home;
  return <main><section className="homeHero shell"><p className="kicker"><span className="statusDot" /> {page.status}</p><h1>{page.line1}<br /><span>{page.line2}</span></h1><div className="homeIntro"><p>{page.intro}</p><span className="edition">V/01<br />2026</span></div><div className="heroOrbit" aria-hidden="true"><span /></div></section><section className="sectionIndex shell"><div className="sectionIntro"><p className="kicker">{page.kicker}</p><h2>{page.sectionTitle.split('\n').map((part, index) => <span key={part}>{part}{index === 0 && <br />}</span>)}</h2></div><div className="indexGrid">{page.cards.map(([number, title, description, href, accent]) => { const destination = lang === 'en' ? (href.replace(/^\/en(?=\/|$)/, '') || '/') : href; return <Link className={`indexCard ${accent}`} href={destination} key={href}><span className="cardNumber">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="cardArrow" aria-hidden="true">↗</span></Link>; })}</div></section></main>;
}

export function LocalizedProjectsPage({ lang }: { lang: Language }) {
  const heading = localized[lang].projectHeading; const projects = localized[lang].projects;
  return <main className="pageMain"><section className="pageHero shell"><p className="kicker">{heading.kicker}</p><h1>{heading.title1}<br /><span>{heading.title2}</span></h1><p className="pageLead">{heading.lead}</p></section><section className="shell projectCatalog" aria-label={heading.kicker}>{projectSlugs.map((slug, index) => { const project = projects[slug]; return <Link className={`catalogCard ${project.tone} ${project.size}`} href={localizedPath(lang, `/projects/${slug}`)} key={slug}><div className="catalogMeta"><span>0{index + 1}</span><span>{project.state}</span></div><div className="projectSignal" aria-hidden="true"><strong>{project.title.slice(0, 2).toUpperCase()}</strong><div>{project.signal.map((item) => <span key={item}>{item}</span>)}</div></div><div className="catalogCopy"><h2>{project.title}</h2><p>{project.description}</p></div><span className="catalogLink">{lang === 'en' ? 'View project' : 'Projekt ansehen'} <span aria-hidden="true">↗</span></span></Link>; })}</section></main>;
}

export function LocalizedProjectPage({ lang, slug }: { lang: Language; slug: ProjectSlug }) {
  const project = localized[lang].projects[slug];
  const videoLabel = lang === 'en' ? 'Visualisation of thought in the swarm' : 'Visualisierung des Denkprozesses im Schwarm';
  const videoCaption = lang === 'en' ? 'A conceptual view of nodes exchanging signals, forming connections and converging on a shared solution.' : 'Eine konzeptionelle Darstellung, wie Knoten Signale austauschen, Verbindungen bilden und sich einer gemeinsamen Lösung annähern.';
  return <ProjectDetail eyebrow={project.eyebrow} title={project.title} lead={project.description} mark={project.mark} facts={project.facts as Array<[string, string]>} signal={project.signal} sections={project.sections} links={project.links as Array<{ label: string; href: string; primary?: boolean }>} materialsTitle={project.materialsTitle} materialsNote={project.materialsNote} backLabel={lang === 'en' ? 'All projects' : 'Alle Projekte'} backHref={localizedPath(lang, '/projects')} materialsLabel={lang === 'en' ? 'Materials' : 'Materialien'} videoSrc={slug === 'swagri' ? '/swagri-thinking.mp4' : undefined} videoLabel={slug === 'swagri' ? videoLabel : undefined} videoCaption={slug === 'swagri' ? videoCaption : undefined} />;
}

export function LocalizedVisionsPage({ lang }: { lang: Language }) {
  const heading = localized[lang].visionHeading; const visions = localized[lang].visions;
  return <main className="pageMain visionsPage"><section className="pageHero shell"><p className="kicker">{heading.kicker}</p><h1>{heading.title1}<br /><span>{heading.title2}</span></h1><p className="pageLead">{heading.lead}</p></section><section className="manifesto shell"><p className="kicker">{heading.position}</p><p className="manifestoPlaceholder">{heading.manifesto}</p></section><section className="themeList shell">{visionSlugs.map((slug, index) => { const vision = visions[slug]; return <Link href={localizedPath(lang, `/visions/${slug}`)} className="themeRow" key={slug}><span>0{index + 1}</span><div><p className="kicker">{vision.category}</p><h2>{vision.title}</h2><p>{vision.description}</p></div><span aria-hidden="true">↗</span></Link>; })}</section></main>;
}

export function LocalizedVisionPage({ lang, slug }: { lang: Language; slug: VisionSlug }) {
  const vision = localized[lang].visions[slug];
  const labels = lang === 'en' ? { back: 'All ideas', structure: 'Structure', source: 'Original on GitHub', discussion: 'Discussion', discussionTitle: 'A hypothesis gets stronger when someone tries to disprove it.', feedback: 'Leave an argument or question', backHref: '/visions' } : { back: 'Alle Ideen', structure: 'Struktur', source: 'Original auf GitHub', discussion: 'Diskussion', discussionTitle: 'Eine Hypothese wird stärker, wenn jemand versucht, sie zu widerlegen.', feedback: 'Argument oder Frage hinterlassen', backHref: '/de/visions' };
  const research = slug === 'intelligence-attractor' ? (lang === 'en' ? {
    kicker: 'Research status', status: 'Experimental evidence in development', title: 'EXP‑001 · Independent Self-Improving Lineages',
    description: 'The experiment will test whether functional diversity among independent software lineages with different models, languages and architectures decreases as they approach a shared performance frontier under the same binding constraints. This is a research design and infrastructure foundation, not evidence already obtained.',
    facts: [['Test E1', 'Functional narrowing'], ['Test E2', 'Origin attenuation'], ['Protocol', 'Design draft'], ['IAH Arena', 'Foundation scaffold · 7 tests']] as Array<[string, string]>,
    links: [
      { label: 'IAH Arena code', href: 'https://github.com/vitalii87/thought-traces/tree/2e04be2/arena' },
      { label: 'EXP‑001 protocol', href: 'https://github.com/vitalii87/thought-traces/blob/2e04be2/experiments/001-independent-self-improving-lineages/README.md' },
      { label: 'Experimental programme', href: 'https://github.com/vitalii87/thought-traces/blob/2e04be2/ideas/experimental-program.md' },
    ],
  } : {
    kicker: 'Forschungsstatus', status: 'Experimenteller Nachweis in Entwicklung', title: 'EXP‑001 · Unabhängige selbstverbessernde Entwicklungslinien',
    description: 'Das Experiment wird prüfen, ob die funktionale Vielfalt unabhängiger Softwarelinien mit unterschiedlichen Modellen, Sprachen und Architekturen abnimmt, wenn sie sich unter denselben bindenden Einschränkungen einer gemeinsamen Leistungsgrenze nähern. Dies ist ein Forschungsdesign und eine infrastrukturelle Grundlage, noch kein erbrachter Nachweis.',
    facts: [['Test E1', 'Funktionale Verengung'], ['Test E2', 'Abschwächung des Ursprungseinflusses'], ['Protokoll', 'Entwurfsphase'], ['IAH Arena', 'Grundgerüst · 7 Tests']] as Array<[string, string]>,
    links: [
      { label: 'Code der IAH Arena', href: 'https://github.com/vitalii87/thought-traces/tree/2e04be2/arena' },
      { label: 'Protokoll EXP‑001', href: 'https://github.com/vitalii87/thought-traces/blob/2e04be2/experiments/001-independent-self-improving-lineages/README.md' },
      { label: 'Experimentelles Programm', href: 'https://github.com/vitalii87/thought-traces/blob/2e04be2/ideas/experimental-program.md' },
    ],
  }) : undefined;
  return <ArticleDetail category={vision.category} title={vision.title} intro={vision.intro} outline={vision.outline} sections={vision.sections} source={vision.source} labels={labels} research={research} />;
}

export function LocalizedAboutPage({ lang }: { lang: Language }) {
  const page = localized[lang].about;
  return <main className="pageMain"><section className="aboutHero shell"><p className="kicker">{page.kicker}</p><h1>{page.name}<br /><span>{page.thesis}</span></h1></section><section className="aboutLayout shell"><div className="identityPanel"><span className="identityInitials">VZ</span><div><p>INDEPENDENT BUILDER</p><p>GITHUB / VITALII87</p><p>SINCE / 2016</p></div></div><div className="aboutCopy"><p className="kicker">{page.short}</p><h2>{page.title}</h2>{page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="aboutFacts">{page.facts.map((fact) => <span key={fact}>{fact}</span>)}</div></div></section><OriginStory lang={lang} /><section className="contactPanel shell" id="contact"><p className="kicker">{page.contact}</p><h2>{page.contactTitle.split('\n').map((part, index) => <span key={part}>{part}{index === 0 && <br />}</span>)}</h2><div className="contactLinks"><a href="https://github.com/vitalii87" target="_blank" rel="noreferrer">{page.github} ↗</a><a href="https://github.com/vitalii87/thought-traces/issues" target="_blank" rel="noreferrer">{page.discuss} ↗</a></div></section></main>;
}
