import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Museum from '.';
import TimeWork from './Moduls/TimeWork/TimeWork';
import IntroMuseum from './Moduls/Intro/IntroMuseum';
import AboutMuseum from './Moduls2/AboutMuseum';
import LocationMuseum from './Moduls/Location/LocationMuseum';

const MuseumStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Museum} name={Routes.Museum} />
      <Stack.Screen component={AboutMuseum} name={Routes.AboutMuseum} />
      <Stack.Screen component={TimeWork} name={Routes.TimeWork} />
      <Stack.Screen component={IntroMuseum} name={Routes.IntroMuseum} />
      <Stack.Screen component={LocationMuseum} name={Routes.LocationMuseum} />
    </Stack.Navigator>
  );
};

export default MuseumStack;

const styles = StyleSheet.create({});
