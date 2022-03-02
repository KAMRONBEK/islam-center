import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Museum from '.';

const MuseumStack = () => {
  let Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Museum} name={Routes.Museum} />
      </Stack.Navigator>
  );
};

export default MuseumStack;

const styles = StyleSheet.create({});
