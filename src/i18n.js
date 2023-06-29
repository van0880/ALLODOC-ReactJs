import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import dataRU from './local/RU/dataRU.json'
import dataRO from './local/RO/dataRO.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    resources: {
      ru: {
        translation: {
            ...dataRU
        }
      },
      ro: {
        translation: {
            ...dataRO
        }
      }
    }
  });

export default i18n