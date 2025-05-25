import fr from './fr.json';
import en from './en.json';

export const translations = { fr, en };

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang === 'fr' || lang === 'en') return lang;
    return 'en';
}

export function useTranslations(lang: Lang) {
    const t = translations[lang] as Record<string, any>;

    return (key: string): string => {
        const result = key.split('.').reduce((o, k) => o?.[k], t);
        return typeof result === 'string' ? result : key;
    };
}
