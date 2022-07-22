import { useRouter } from 'next/router';
import React, { useState } from 'react';
import en_lang from '../locales/en.json';
import vi_lang from '../locales/vi.json';

export const StoreContext = React.createContext({}) as any;

export const trans =
  (locale = 'vi') =>
  (key: string) => {
    const viValue = JSON.parse(JSON.stringify(vi_lang));
    const enValue = JSON.parse(JSON.stringify(en_lang));
    if (locale === 'en') {
      return enValue[key] || '';
    }
    return viValue[key] || '';
  };

const ProviderWrapper = ({ children }: { children: any }) => {
  const { locale } = useRouter();
  const [navTo, setNavTo] = useState('');
  const store: any = {
    trans: trans(locale),
    navTo: [navTo, setNavTo],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export default ProviderWrapper;
