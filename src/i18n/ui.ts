import en from './translations/en.json';
import fr from './translations/fr.json';
import it from './translations/it.json';
import de from './translations/de.json';
import es from './translations/es.json';
import pt from './translations/pt.json';
import ru from './translations/ru.json';

const languages = {
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
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
  it,
  de,
  es,
  pt,
  ru,
} as const;

class uiTranslationService {
    
    constructor(lang: keyof typeof ui) {
        this.defaultLang = lang;
    }
    
    public languages = {
        en: 'English',
        fr: 'Français',
        it: 'Italiano',
        de: 'Deutsch',
        es: 'Español',
        pt: 'Português',
        ru: 'Русский',
    };

    //add defaultLang to the class
    public defaultLang: keyof typeof ui = 'en';
    
    public ui = {
        en,
        it,
        fr,
        de,
        es,
        pt,
        ru
    } as const;

}
export const UiTranslationService = new uiTranslationService(defaultLang);