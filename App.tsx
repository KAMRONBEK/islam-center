import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import Home from './src/view/screens/home/index';
import Details from './src/view/screens/Details';


const App = () => {
  return <AppNavigator />;
  // return <Home />;
  // return <Details />;
};

export default App;

const styles = StyleSheet.create({});
