import en_lang from '../locales/en.json';
import vi_lang from '../locales/vi.json';
import { useRouter } from 'next/router';

export const T = (key: string) => {
  const { locale } = useRouter();
  const viValue = JSON.parse(JSON.stringify(vi_lang));
  const enValue = JSON.parse(JSON.stringify(en_lang));
  if (locale === 'en') {
    return enValue[key] || '';
  }
  return viValue[key] || '';
};
