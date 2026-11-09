export const dualRisingSlug = 'dual-rising';
export const dualRisingPath = `/visions/${dualRisingSlug}/`;
export const dualRisingPublished = '2026-11-08';

export const dualRising = {
  en: {
    title: 'Dual Rising: Two Sides of Progress',
    category: 'Conceptual essay · 2026',
    description: 'Could technology deepen understanding for some people while reducing opportunities to practise independent thinking for others?',
    author: 'Vitalii Zhyliaiev',
    date: '8 November 2026',
    back: 'All ideas',
    contents: 'Contents',
    translations: 'Read in another language',
    prefix: '',
  },
  de: {
    title: 'Dual Rising: Zwei Seiten des Fortschritts',
    category: 'Konzeptioneller Essay · 2026',
    description: 'Kann Technologie das Verständnis mancher Menschen vertiefen und zugleich anderen weniger Gelegenheit geben, eigenständiges Denken zu üben?',
    author: 'Vitalii Zhyliaiev',
    date: '8. November 2026',
    back: 'Alle Ideen',
    contents: 'Inhalt',
    translations: 'In einer anderen Sprache lesen',
    prefix: '/de',
  },
  uk: {
    title: 'Dual Rising: дві сторони прогресу',
    category: 'Концептуальне есе · 2026',
    description: 'Чи можуть технології поглиблювати розуміння в одних людей і водночас залишати іншим менше нагод практикувати самостійне мислення?',
    author: 'Віталій Жиляєв',
    date: '8 листопада 2026',
    back: 'Усі погляди',
    contents: 'Зміст',
    translations: 'Читати іншою мовою',
    prefix: '/ua',
  },
} as const;

export type DualRisingLanguage = keyof typeof dualRising;
