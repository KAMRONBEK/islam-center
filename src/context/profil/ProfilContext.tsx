import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeProfil, TypeProfilState} from './TypeProfil';
import axios from 'axios';
import {API_URL_USER} from './Url';

export const ProfilCreateContext = createContext<TypeProfil | null>(null);

export const useProfilContext = () => {
  return useContext(ProfilCreateContext);
};

export const ProfilContext: React.FC<React.ReactNode> = ({children}) => {
  const [myPhone, setMyPhone] = useState<any>([]);
  const phone: any = '998990260746';
  // Token-------------------------------------
  useEffect(() => {
    (async () => {
      const myToken = await AsyncStorage.getItem('token');
      setMyPhone(() => myToken);
      console.log(`My Phone Number ${myToken} - ${myPhone}`);
      !!myPhone && myPhone.length > 0 && (await getUsers(myPhone));
    })();
  }, [myPhone]);

  const getUsers = useCallback(async (num:string) => {
    if(!num) return;

    console.log("================================");
    console.log({myPhoneNumber:num})
    console.log("================================");

    try {
      const res = await axios.get(API_URL_USER + num);
      const data = await res.data;
      console.log("response:", data);
    } catch (error) {
      console.log("error/getUser..");
    }
},[])

  return (
    <ProfilCreateContext.Provider value={{}}>
      {children}
    </ProfilCreateContext.Provider>
  );
};
