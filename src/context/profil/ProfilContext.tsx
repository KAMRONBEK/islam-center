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
import {
  API_URL,
  API_URL_USER,
  code_url,
  code_url_2,
  phone_url,
  phone_url_2,
  Token,
} from './Url';
import {useAuthContext} from '../auth/AuthContext';
import {TypeAuthState} from '../auth/TypeAuth';

export const ProfilCreateContext = createContext<TypeProfil | null>(null);

export const useProfilContext = () => {
  return useContext(ProfilCreateContext);
};

export const ProfilContext: React.FC<React.ReactNode> = ({children}) => {
  const [myPhone, setMyPhone] = useState<TypeProfilState | any>([]);
  const [user, setUser] = useState<TypeProfilState | any>([]);
  //
  const [userTeam, setUserTeam] = useState<TypeProfilState | any>({
    name: '',
    surname: '',
    phone: '',
  });
  const [userBoolean, setUserBoolean] = useState<TypeProfilState | any>({
    editName: false,
    editLastName: false,
    editPhone: false,
    submitEditPhone: false,
    takeCode: false,
  });
  const [submitDisable, setSubmitDisable] = useState<TypeProfilState | any>(
    false,
  );
  // Number Update

  const [codeChekEdit, setCodeChekEdit] = useState<TypeProfilState | any>({
    code: '',
    checkCode: '',
  });

  // Token-------------------------------------
  const getUsers = async () => {
    try {
      await axios
        .get(`${API_URL_USER}${JSON.parse(myPhone)}`)
        .then(res => {
          const data = res.data[0];
          console.log('response: ', data);
          setUser(data);
        })
        .catch(err => {
          console.log(`Ishlamayabdi APi ---- ${err}`);
        });
    } catch (error) {
      console.log('error/getUser..');
    }
  };
  useEffect(() => {
    (async () => {
      const myToken = await AsyncStorage.getItem('token');
      console.log('Number----------------------');
      console.log(myToken);
      console.log('Number----------------------');
      // @ts-ignore
      setMyPhone(myToken);
      await getUsers();
    })();
  }, [myPhone]);
  const UpdateUsers = async () => {
    setSubmitDisable(true);
    try {
      await axios
        .post(API_URL, {
          table: 'users',
          type: 'insertby',
          data: {
            name: userTeam.name,
            surname: userTeam.surname,
          },
          where: {
            phone: JSON.parse(myPhone),
          },
        })
        .then(res => {
          console.log(
            // @ts-ignore
            `Qoshildi Success..... ${JSON.stringify(res.data)}`,
          );
          console.log('++++++++++++++++');
          console.log(`${userTeam.name} - ${userTeam.surname}`);
          setUser({
            ...user,
            name: userTeam.name,
            surname: userTeam.surname,
          });
          console.log('++++++++++++++++');
          setSubmitDisable(false);

          // @ts-ignore
        })
        .catch(err => {
          console.log(`${err}/NoUpdate.. Internet ishlamayabdi...`);
        });
      setUserBoolean({
        ...userBoolean,
        editName: false,
        editLastName: false,
        editPhone: false,
        submitEditPhone: false,
        takeCode: false,
      });
      setSubmitDisable(false);
    } catch (error) {
      console.log('error/NoUpdate.. Internet ishlamayabdi...');
    }
  };
  const phone: any = userTeam.phone.replace(/\D/gi, '');
  async function PhoneNumberEdit() {
    console.log(`Sening raqaming ${phone}`);

    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    if (userTeam.phone.length >= 12) {
      await axios
        .get(UrlPhoneNumber)
        .then(res => {
          // setCheckCode(res.data);
          console.log(
            ' _________-____-________' + res.data + ' _________-____-________',
          );
          setCodeChekEdit({...codeChekEdit, checkCode: res.data});
          // setNumberDisabled(false);
          setUserBoolean({
            ...userBoolean,
            submitEditPhone: !userBoolean.submitEditPhone,
            takeCode: !userBoolean.takeCode,
          });
        })
        .catch(err => {
          console.log('------Error___Phone-----' + err);
        });
      // @ts-ignore
      // setVisibleWarningNumber(false);
      // setVisibleSendCode(true);
      // setIsCounting(true);
      // setReloadDisable(true);
    } else {
      // setNumberDisabled(false);
      // setVisibleWarningNumber(true);
    }
    // setNumberDisabled(false);
  }
  async function CodeEditSubmit() {
    console.log('codeeeeeeeeeeeeeeeee', codeChekEdit.code);

    const UrlCode = `${API_URL}${code_url}${phone}${code_url_2}${codeChekEdit.code}`;
    if (
      codeChekEdit.checkCode == codeChekEdit.code &&
      codeChekEdit.code.length === 4
    ) {
      await axios
        .get(UrlCode)
        .then(res => {
          // AsyncStorage.setItem('token', JSON.stringify(phone));
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');
          const data = res.data[0];
          console.log(data);
          //@ts-ignore
          // setUser(data);
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');
          // refreshToken(true);
          //@ts-ignore

            axios
            .post(API_URL, {
              table: 'users',
              type: 'insertby',
              data: {
                phone: '998990260746',
              },
              where: {
                phone: JSON.parse(myPhone),
              },
            })
            .then(res => {
              console.log(
                // @ts-ignore
                `Qoshildi Success..... ${JSON.stringify(res.data)}`,
              );
              console.log('++++++++++++++++');
              console.log(`${phone}  `);
              setUser({
                ...user,
                phone: phone,
              });
              console.log('++++++++++++++++');
               AsyncStorage.setItem('token','998990260746');

              // @ts-ignore
            })
            .catch(err => {
              console.log(`${err}/NoUpdate.. Internet ishlamayabdi...`);
            });
        })
        .catch(err => console.log('------Error___Code-----' + err));

      // setCodeDisabled(false);
      // setTimeLeft(time);
      // setIsCounting(false);
      // setVisibleWarningCode(false);
      // setVisibleSendCode(false);
      // setReloadDisable(true);
      // setCode('');
      // checkCode('');
      // setPhone('+ 998');
    } else {
      // setCodeDisabled(false);
      // setTimeLeft(time);
      // setReloadDisable(true);
      // setVisibleWarningCode(true);
      // setVisibleSendCode(false);
    }
    // setCodeDisabled(false);
  }

  function ClearUser() {
    // @ts-ignore
    setUser([]);
  }

  return (
    <ProfilCreateContext.Provider
      value={{
        setUser,
        user,
        userTeam,
        userBoolean,
        submitDisable,
        setUserBoolean,
        setUserTeam,
        UpdateUsers,
        ClearUser,
        //
        PhoneNumberEdit,
        CodeEditSubmit,
        codeChekEdit,
        setCodeChekEdit,
      }}>
      {children}
    </ProfilCreateContext.Provider>
  );
};
