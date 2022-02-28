import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Routes} from '../../../navigation/routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Library from '.';
import LibraryProduct from '../LibraryProduct';
import LibraryProductRead from '../LibraryProductRead';
import LibraryProductSave from '../LibraryProductSave';
import MyBooks from '../MyBooks';
import MyBook from '../MyBook';
import MyBookRead from '../MyBookRead';

const LibraryStack = () => {
  let Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Library} name={Routes.Library} />
        <Stack.Screen component={MyBooks} name={Routes.MyBooks} />
        <Stack.Screen component={MyBook} name={Routes.MyBook} />
        <Stack.Screen component={MyBookRead} name={Routes.MyBookRead} />
        <Stack.Screen component={LibraryProduct} name={Routes.LibraryProduct} />
        <Stack.Screen component={LibraryProductRead} name={Routes.LibraryProductRead} />
        <Stack.Screen component={LibraryProductSave} name={Routes.LibraryProductSave} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default LibraryStack;

const styles = StyleSheet.create({});
