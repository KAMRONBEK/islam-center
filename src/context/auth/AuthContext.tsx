import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {TypeAuth, TypeAuthState} from './TypeAuth';
// import axios from 'axios';
import {
  API_URL,
  code_url,
  code_url_2,
  phone_url,
  phone_url_2,
  Token,
} from './Url';
import {Routes} from '../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export const AuthCreateContext = createContext<TypeAuth | null>(null);

export const useAuthContext = () => {
  return useContext(AuthCreateContext);
};

export const AuthContext: React.FC<React.ReactNode> = ({children}) => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState<TypeAuthState | any>('+ 998');
  const [checkCode, setCheckCode] = useState<TypeAuthState | any>(Number);
  const [code, setCode] = useState<TypeAuthState | any>(Number);
  // Error State
  const [visibleWarningNumber, setVisibleWarningNumber] = useState(false);
  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleSendCode, setVisibleSendCode] = useState(false);
  // Timer
  const time = 90;
  const getPadTime = (time: any) => time.toString().padStart(2, '0');
  const [timeLeft, setTimeLeft] = useState<TypeAuthState | any>(time);
  const [isCounting, setIsCounting] = useState<TypeAuthState | any>(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  // const PhoneNumberSubmit = useCallback(async (phone:string = "998934522080", token:string = "eyJ0b2tlbiI6ImlzbGFtaWMiLCJhbGciOiJIUzI1NiJ9") => {
  //     try {

  //       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
  //       // const res = await axios.get('https://mamajanovs.uz/api.php', {
  //       //   params:{
  //       //     phone,
  //       //     token
  //       //   }
  //       // })
  //       const data = await res.data
  //       console.log("send phone response:", JSON.stringify(data, null, 2))
  //     } catch (error) {
  //       console.log("sendPhoneError:", JSON.stringify(error.response, null, 2))
  //     }
  // }, [])

  async function PhoneNumberSubmit() {
    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    if (phone.length >= 18) {
      // @ts-ignore
      navigation.navigate(Routes.Welcome);
      setVisibleWarningNumber(false);
      const res = await axios.get(UrlPhoneNumber);
      console.log(res.data);
      setCheckCode(res.data);
    } else {
      setVisibleWarningNumber(true);
    }
  }
  async function CodeSubmit() {
    const UrlCode = `${API_URL}${code_url}${phone}${code_url_2}${code}`;
    if (checkCode == code) {
      //@ts-ignore
      navigation.navigate(Routes.AuthStack);
      setVisibleWarningCode(false);
      setVisibleSendCode(false);
      setPhone('+ 998');
      checkCode('');
      setCode('');
      const res = await axios.get(UrlCode);
      console.log(res.data);
    } else {
      setVisibleWarningCode(true);
      setVisibleSendCode(false);
    }
  }
  let onPressRequestCode = () => {
    if (timeLeft === 0) {
      setTimeLeft(time);
    }
    setIsCounting(true);
    setVisibleSendCode(true);
    setVisibleWarningCode(false);
    setCode('');
  };
  return (
    <AuthCreateContext.Provider
      value={{
        // state
        phone,
        code,
        visibleWarningCode,
        visibleSendCode,
        minutes,
        seconds,
        // setState
        setPhone,
        setCode,
        setVisibleWarningCode,
        setVisibleSendCode,
        visibleWarningNumber,
        // Functions
        PhoneNumberSubmit,
        CodeSubmit,
        onPressRequestCode,
      }}>
      {children}
    </AuthCreateContext.Provider>
  );
};
