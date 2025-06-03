import en from './translations/en.json';
import fr from './translations/fr.json';
import it from './translations/it.json';

const languages = {
  en: 'English',
  fr: 'Français',
};

const defaultLang = 'en';

const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
} as const;

class uiTranslationService {
    
    constructor(lang: keyof typeof ui) {
        this.defaultLang = lang;
    }
    
    public languages = {
        en: 'English',
        fr: 'Français',
        it: 'Italiano',
    };

    //add defaultLang to the class
    public defaultLang: keyof typeof ui = 'en';
    
    public ui = {
        en,
        it,
        fr
    } as const;

}
export const UiTranslationService = new uiTranslationService(defaultLang);