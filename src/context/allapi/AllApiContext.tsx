import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeApiLang} from './TypeAllApi';
import axios from 'axios';
import {API_URL} from './Url';

export const AllApiCreateContext = createContext<TypeApiLang | null>(null);

export const useAllApiContext = () => {
  return useContext(AllApiCreateContext);
};

export const AllApiContext: React.FC<React.ReactNode> = ({children}) => {
  // ------------------GET-------------------
  // NEW POST -------------
  const [newPosts, setNewPost] = useState<any>([]);
  function getNewPosts() {
    axios
      .get(`${API_URL}news_press_services`)
      .then(res => {
        setNewPost(res.data);
        // console.log(res.data);
      })
      .catch(res => {
        console.log(`Error New Post - ${res}`);
      });
  }
  // CATALOGS ---------------
  const [catalogs, setCatalogs] = useState<any>([]);
  function getCatalogs() {
    axios
      .get(`${API_URL}catalogs`)
      .then(res => {
        setCatalogs(res.data);
        // console.log(res.data);
      })
      .catch(res => {
        console.log(`Error Catalogs - ${res}`);
      });
  }
  // UseEffect--------
  useEffect(() => {
    getNewPosts();
    getCatalogs();
  }, []);
  return (
    <AllApiCreateContext.Provider
      value={{
        newPosts,
        catalogs,
      }}>
      {children}
    </AllApiCreateContext.Provider>
  );
};
