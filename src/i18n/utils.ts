import { UiTranslationService } from './ui';

class TranslationServiceClass {
    
    public i18n = UiTranslationService;

    public getLangFromUrl(url: URL) {
      const [, lang] = url.pathname.split('/');
      if (lang in this.i18n.ui) return lang;
      return this.i18n.defaultLang;
    }
    
    public useTranslations(lang: keyof typeof this.i18n.ui | string | undefined) {
      let i18n = this.i18n;

      // Helper to resolve nested keys using dot notation
      function resolveKey(obj: any, key: string | undefined): any {
        if (!key) return key;
        if (obj == null) return undefined;
        if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
        // Try dot notation for nested keys
        const parts = key.split('.');
        let value = obj;
        for (const part of parts) {
          if (value && typeof value === 'object' && part in value) {
            value = value[part];
          } else {
            return key;
          }
        }
        return value;
      }

      return function t(key: keyof typeof i18n.ui[typeof i18n.defaultLang] | string | undefined) {
        if (key === undefined || key === '') {
            return key;
        }
        // Try to resolve in selected lang, fallback to defaultLang
        return (
          resolveKey(i18n.ui[lang], key) ??
          resolveKey(i18n.ui[i18n.defaultLang], key)
        );
      }
    }

    public languagesArray = Object.entries(this.i18n.languages).map(([key, value]) => ({
      params: { lang: key },
      label: value,
    }));

}

export const TranslationService = new TranslationServiceClass();