import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Museum from '.';
import AboutMuseum from './Moduls/AboutMuseum';
import TimeWork from './Moduls/Moduls/TimeWork';
import IntroMuseum from './Moduls/Moduls/IntroMuseum';

const MuseumStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Museum} name={Routes.Museum} />
      <Stack.Screen component={AboutMuseum} name={Routes.AboutMuseum} />
      <Stack.Screen component={TimeWork} name={Routes.TimeWork} />
      <Stack.Screen component={IntroMuseum} name={Routes.IntroMuseum} />
    </Stack.Navigator>
  );
};

export default MuseumStack;

const styles = StyleSheet.create({});
