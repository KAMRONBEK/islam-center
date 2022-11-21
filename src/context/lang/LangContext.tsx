import React, {createContext, useContext, useState, useEffect} from 'react';
import {TypeLang, TypeLangState} from './TypeLang';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LangCreateContext = createContext<TypeLang | null>(null);

export const useLangContext = () => {
  return useContext(LangCreateContext);
};

export const LangContext: React.FC<React.ReactNode> = ({children}) => {
  const langStorage: any = AsyncStorage.getItem('lang');
  const lang: any = 'uz';
  const [language, setLanguage] = useState<TypeLangState | any>(
    langStorage | lang,
  );

  const SwitchLanguage = (key: any) => {
    // @ts-ignore
    AsyncStorage.setItem('lang', key);
    console.log('-----');
    console.log(key);
    console.log('-----');
  };
  useEffect(() => {
    (async () => {
      const myLang = await AsyncStorage.getItem('lang');
      //@ts-ignore
      setLanguage(myLang);
      console.log('Switch Language - ' + language);
    })();
  }, [AsyncStorage]);
  return (
    <LangCreateContext.Provider
      value={{
        language: language ?? 'uz',
        SwitchLanguage,
      }}>
      {children}
    </LangCreateContext.Provider>
  );
};
