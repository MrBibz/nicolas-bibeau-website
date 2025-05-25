export const SUPPORTED_LANGS = ['fr', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function generateStaticPaths() {
    return SUPPORTED_LANGS.map((lang) => ({
        params: { lang }
    }));
}
