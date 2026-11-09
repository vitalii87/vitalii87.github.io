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
    posterAlt: 'A ruined city under dark smoke beside researchers in a blue-lit, high-tech laboratory.',
    trajectoriesAlt: 'A blue curve for intellectual capability and an orange curve for deficits in independent thinking both rise over time.',
    trajectoriesCaption: 'The curves and dates are illustrative, not measured data or a forecast.',
    trajectoriesZoom: 'Enlarge chart',
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
    posterAlt: 'Eine zerstörte Stadt unter dunklem Rauch neben Forschenden in einem blau beleuchteten Hightech-Labor.',
    trajectoriesAlt: 'Eine blaue Kurve für intellektuelle Leistungsfähigkeit und eine orange Kurve für Defizite im eigenständigen Denken steigen beide im Zeitverlauf.',
    trajectoriesCaption: 'Kurven und Jahreszahlen dienen der Veranschaulichung; sie zeigen weder Messdaten noch eine Prognose.',
    trajectoriesZoom: 'Grafik vergrößern',
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
    posterAlt: 'Зруйноване місто під темним димом поруч із дослідниками в освітленій синім високотехнологічній лабораторії.',
    trajectoriesAlt: 'Синя крива інтелектуальної спроможності та помаранчева крива дефіцитів самостійного мислення одночасно зростають.',
    trajectoriesCaption: 'Криві й дати умовні: це ілюстрація гіпотези, а не виміряні дані чи прогноз.',
    trajectoriesZoom: 'Збільшити схему',
    prefix: '/ua',
  },
} as const;

export type DualRisingLanguage = keyof typeof dualRising;
