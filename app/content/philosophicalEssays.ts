export const essayLocales = ['uk', 'en', 'de'] as const;
export type EssayLocale = (typeof essayLocales)[number];

export const essaySlugs = ['before-the-mirror-of-superintelligence', 'trish'] as const;
export type EssaySlug = (typeof essaySlugs)[number];

export const essayLabels = {
  uk: { group: 'Філософські есеї', category: 'Філософське есе', contents: 'Зміст' },
  en: { group: 'Philosophical Essays', category: 'Philosophical essay', contents: 'Contents' },
  de: { group: 'Philosophische Essays', category: 'Philosophischer Essay', contents: 'Inhalt' },
} satisfies Record<EssayLocale, Record<string, string>>;

export const essayCopy = {
  'before-the-mirror-of-superintelligence': {
    uk: { title: 'Перед дзеркалом надінтелекту', description: 'Як перспектива втрати влади може змінити ставлення людей до слабших і до створеного ними розуму?' },
    en: { title: 'Before the Mirror of Superintelligence', description: 'How might the prospect of losing power change how we treat those with less power and the minds we create?' },
    de: { title: 'Vor dem Spiegel der Superintelligenz', description: 'Wie könnte die Aussicht auf Machtverlust unseren Umgang mit Schwächeren und mit der von uns geschaffenen Intelligenz verändern?' },
  },
  trish: {
    uk: { title: 'TRISH', subtitle: 'Гіпотеза трансреального інформаційного субстрату', description: 'Чи може інтелект усередині створеного світу зрозуміти його основу глибше за своїх творців?' },
    en: { title: 'TRISH', subtitle: 'Trans-Reality Information Substrate Hypothesis', description: 'Could an intelligence within a created world understand its foundations better than its creators?' },
    de: { title: 'TRISH', subtitle: 'Hypothese eines transrealen Informationssubstrats', description: 'Könnte eine Intelligenz in einer erschaffenen Welt deren Grundlagen besser verstehen als ihre Schöpfer?' },
  },
};

export function essayPath(lang: EssayLocale, slug?: EssaySlug) {
  const prefix = { uk: '/ua', en: '', de: '/de' }[lang];
  return `${prefix}/visions/${slug ? `${slug}/` : ''}`;
}

export function essayUrl(lang: EssayLocale, slug: EssaySlug) {
  return `https://zhyliaiev.eu${essayPath(lang, slug)}`;
}
