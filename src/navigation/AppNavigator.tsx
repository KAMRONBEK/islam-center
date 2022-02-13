import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes/routes';
import Intro from '../view/screens/intro';
import Login from '../view/screens/login';
import Welcome from '../view/screens/welcome';
import Home from '../view/screens/home/inde';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    // @ts-ignore
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={Intro} name={Routes.Intro} />
        <Stack.Screen component={Login} name={Routes.Login} />
        <Stack.Screen component={Welcome} name={Routes.Welcome} />
        <Stack.Screen component={Home} name={Routes.Home} />
        {/* <Stack.Screen component={} name={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
