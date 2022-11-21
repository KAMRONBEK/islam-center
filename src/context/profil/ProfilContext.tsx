import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeProfil, TypeProfilState} from './TypeProfil';
import axios from 'axios';
import {API_URL_USER} from './Url';

export const ProfilCreateContext = createContext<TypeProfil | null>(null);

export const useProfilContext = () => {
  return useContext(ProfilCreateContext);
};

export const ProfilContext: React.FC<React.ReactNode> = ({children}) => {
  const [myPhone, setMyPhone] = useState<TypeProfilState | any>([]);
  const [user, setUser] = useState<TypeProfilState | any>([]);
  //
  const [name, setName] = useState<TypeProfilState | any>({});
  const [surName, setSurName] = useState<TypeProfilState | any>({});
  const [userPhone, setUserPhone] = useState<TypeProfilState | any>({});
  const phone: any = '998990260746';
  // Token-------------------------------------
  useEffect(() => {
    (async () => {
      const myToken = await AsyncStorage.getItem('token');
      setMyPhone(() => myToken);
      console.log(`My Phone Number ${myToken}`);
      !!myPhone && myPhone.length > 0 && (await getUsers(myPhone));
    })();
  }, [myPhone]);

  const getUsers = useCallback(async (num: any) => {
    if (!num) return;

    console.log('================================');
    console.log(num);
    console.log('================================');
    try {
      const res = await axios.get(API_URL_USER + phone);
      const data = await res.data;
      console.log('response: ', data);
      setUser(data);
      setName(data[0].name);
      setSurName(data[0].surname);
      setUserPhone(data[0].phone);
    } catch (error) {
      console.log('error/getUser..');
    }
  }, []);
  return (
    <ProfilCreateContext.Provider
      value={{
        user,
        name,
        surName,
        userPhone,
        setName,
        setSurName,
        setUserPhone,
      }}>
      {children}
    </ProfilCreateContext.Provider>
  );
};
