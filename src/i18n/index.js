import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { englishText } from './locales/en.js';
import { italianText } from './locales/it.js';
import { ukrainianText } from './locales/ua.js';
import { LOCALS } from './constants.js';

const resources = {
  [LOCALS.EN]: {
    translation: englishText,
  },
  [LOCALS.UK]: {
    translation: ukrainianText,
  },
  [LOCALS.IT]: {
    translation: italianText,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LOCALS.EN,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
