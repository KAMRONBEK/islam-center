import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes/routes';
import Intro from '../view/screens/Intro';
import Login from '../view/screens/Login';
import Welcome from '../view/screens/Welcome';
import Home from '../view/screens/Home';
import Details from '../view/screens/Details';
import News from '../view/screens/News';
import Museum from '../view/screens/Museum';
import Centre from '../view/screens/Centre';
import TourPages from '../view/screens/Tour/Pages';
import BottomNavigator from '../view/controller/BottomNavigator';
import Tour from '../view/screens/Tour';
import Favorites from '../view/screens/Favorites';
import Library from '../view/screens/Library';
import LibraryProduct from '../view/screens/LibraryProduct';
import UserProfile from '../view/screens/UserProfile';
import LibraryStack from '../view/screens/Library/navigator';
import LibraryProductRead from '../view/screens/LibraryProductRead';
import LibraryProductSave from '../view/screens/LibraryProductSave';

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
        <Stack.Screen component={BottomNavigator} name={Routes.BottomNavigator} />
        <Stack.Screen component={Favorites} name={Routes.Favorites} />
        <Stack.Screen component={Library} name={Routes.Library} />
        <Stack.Screen component={LibraryStack} name={Routes.LibraryStack} />
        <Stack.Screen component={LibraryProduct} name={Routes.LibraryProduct} />
        <Stack.Screen component={LibraryProductRead} name={Routes.LibraryProductRead} />
        <Stack.Screen component={LibraryProductSave} name={Routes.LibraryProductSave} />
        <Stack.Screen component={UserProfile} name={Routes.UserProfile} />
        <Stack.Screen component={Details} name={Routes.Details} />
        <Stack.Screen component={News} name={Routes.News} />
        <Stack.Screen component={Museum} name={Routes.Museum} />
        <Stack.Screen component={Centre} name={Routes.Centre} />
        <Stack.Screen component={Tour} name={Routes.Tour} />
        <Stack.Screen component={TourPages} name={Routes.TourPages} />
        {/* <Stack.Screen component={} name={} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
