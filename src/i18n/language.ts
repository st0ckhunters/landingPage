import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";

export const translations = {en, es, fr};
export type Language = keyof typeof translations;

export const defaultRedirect = "en";
