import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeApiLang} from './TypeAllApi';

export const AllApiCreateContext = createContext<TypeApiLang | null>(null);

export const useAllApiContext = () => {
  return useContext(AllApiCreateContext);
};

export const AllApiContext: React.FC<React.ReactNode> = ({children}) => {

  

  return (
    <AllApiCreateContext.Provider value={{}}>
      {children}
    </AllApiCreateContext.Provider>
  );
};
