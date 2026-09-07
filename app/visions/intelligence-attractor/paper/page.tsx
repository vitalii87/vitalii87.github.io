import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://zhyliaiev.eu/visions/intelligence-attractor/paper/';
const pdfUrl = 'https://zhyliaiev.eu/papers/intelligence-attractor-hypothesis-v0.1.pdf';
const zenodoUrl = 'https://doi.org/10.5281/zenodo.22556018';
const title = 'The Intelligence Attractor Hypothesis: Independent Convergence Under Shared Reality Constraints';
const description = 'A conceptual preprint and research program proposing that independently formed intelligent systems may lose functionally consequential differences as they approach a shared performance frontier under common reality constraints.';

export const metadata: Metadata = {
  title: `${title} — Vitalii Zhyliaiev`,
  description,
  authors: [{ name: 'Vitalii Zhyliaiev', url: 'https://zhyliaiev.eu/about/' }],
  keywords: ['Intelligence Attractor Hypothesis', 'IAH', 'artificial intelligence', 'functional convergence', 'origin attenuation', 'AI architecture', 'intelligent systems'],
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  other: {
    citation_title: title,
    citation_author: 'Vitalii Zhyliaiev',
    citation_publication_date: '2026/09/07',
    citation_pdf_url: pdfUrl,
    citation_doi: '10.5281/zenodo.22556018',
  },
  openGraph: {
    type: 'article',
    title,
    description,
    url: pageUrl,
    publishedTime: '2026-09-07',
    authors: ['Vitalii Zhyliaiev'],
  },
  twitter: { card: 'summary', title, description },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: title,
  name: title,
  description,
  author: { '@type': 'Person', name: 'Vitalii Zhyliaiev', url: 'https://zhyliaiev.eu/about/' },
  datePublished: '2026-09-07',
  version: '0.1',
  inLanguage: 'en',
  url: pageUrl,
  sameAs: zenodoUrl,
  identifier: 'https://doi.org/10.5281/zenodo.22556018',
  license: 'https://creativecommons.org/licenses/by-nc/4.0/',
  encoding: { '@type': 'MediaObject', contentUrl: pdfUrl, encodingFormat: 'application/pdf' },
  keywords: 'Intelligence Attractor Hypothesis, functional convergence, origin attenuation, intelligent systems, architectural optimization',
};

const contents = [
  ['Main text', 'Foundational claim, levels of convergence, Weak and Strong IAH, proposed mechanism, architecture, collective organisation and falsification.'],
  ['Appendix A', 'Origin dependence and attenuation.'],
  ['Appendix B', 'Recursive architectural attractor and mutable system boundaries.'],
  ['Appendix C', 'Relational narrowing and strong functional uniqueness.'],
  ['Appendices D–E', 'Related-work map, maximal conjecture and philosophical extensions.'],
];

export default function IntelligenceAttractorPaperPage() {
  return (
    <main className="paperPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="paperHero shell">
        <Link className="backLink" href="/visions/intelligence-attractor/">← Intelligence Attractor</Link>
        <div className="paperHeroMeta"><p className="kicker">Conceptual preprint · Research program</p><span>Version 0.1 · 2026</span></div>
        <h1>The Intelligence<br /><span>Attractor Hypothesis</span></h1>
        <p className="paperSubtitle">Independent Convergence Under Shared Reality Constraints</p>
        <div className="paperByline"><div><span>Author</span><strong>Vitalii Zhyliaiev</strong></div><div><span>Published</span><strong>7 September 2026</strong></div><div><span>DOI</span><a href={zenodoUrl} target="_blank" rel="noreferrer">10.5281/zenodo.22556018 ↗</a></div></div>
        <div className="paperActions"><a className="primary" href="/papers/intelligence-attractor-hypothesis-v0.1.pdf">Read / download PDF ↓</a><a href={zenodoUrl} target="_blank" rel="noreferrer">Open the Zenodo record ↗</a></div>
      </header>

      <section className="paperAbstract shell">
        <p className="kicker">Abstract</p>
        <div>
          <p>The Intelligence Attractor Hypothesis (IAH) proposes that independently formed intelligent systems, as they approach the best attainable performance under the same task, objective, context and resource constraints, progressively lose functionally consequential differences attributable to their origins.</p>
          <p>The proposed mechanism is the elimination of forms of organisation that become too costly near the optimum. Early in optimisation, many strategies, algorithms and architectures may remain competitive. Further optimisation increases the influence of shared constraints and may direct independent systems toward increasingly similar solutions.</p>
          <p><strong>Weak IAH</strong> predicts decreasing functional diversity and origin sensitivity while allowing several persistent solution families. <strong>Strong IAH</strong> conjectures that, within a specified domain and at a defined descriptive level, systems sufficiently close to the frontier approach one common limiting class of functional equivalence.</p>
          <p>This version presents a conceptual hypothesis and research program. It reports no empirical results and has not undergone formal peer review.</p>
        </div>
      </section>

      <section className="paperClaim shell">
        <p className="kicker">Foundational claim</p>
        <blockquote>Under a fixed task, objective, context and admissible design space, independent optimisation near a shared frontier progressively replaces origin-contingent functional variation with structure determined by the task and its binding constraints.</blockquote>
      </section>

      <section className="paperContents shell">
        <div><p className="kicker">Inside the paper</p><h2>A hypothesis separated into claims that can be criticised and tested.</h2></div>
        <ol>{contents.map(([heading, body], index) => <li key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="paperCitation shell">
        <p className="kicker">Citation</p>
        <div><h2>Cite this version</h2><p>Zhyliaiev, Vitalii. (2026). <em>The Intelligence Attractor Hypothesis: Independent Convergence Under Shared Reality Constraints</em> (Version 0.1). Zenodo. https://doi.org/10.5281/zenodo.22556018</p><p className="paperLicense">Preprint · CC BY-NC 4.0 · The cited third-party works and repository software remain outside this licence.</p></div>
      </section>
    </main>
  );
}
