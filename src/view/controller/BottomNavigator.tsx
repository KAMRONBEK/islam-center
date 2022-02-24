import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {colors} from '../theme';
import {isIOS, windowHeight} from '../constants/size';
import {Routes} from '../../navigation/routes/routes';
import Details from '../screens/Details';
import Museum from '../screens/Museum';
import News from '../screens/News';
import {
  BookIcon,
  FavoriteIcon,
  HomeIcon,
  MuseumIcon,
  ProfileIcon,
} from '../assets/icons/icon';
import Home from '../screens/home/index';
import TourPages from '../screens/Tour/Pages';
import Centre from '../screens/Centre';
import Favorites from '../screens/Favorites';
import Library from '../screens/Library';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: isIOS ? windowHeight / 8 - 10 : windowHeight / 8 - 20,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderWidth: 0.1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.3,
          shadowRadius: 2.19,

          elevation: 0.1,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8,}}></View> */}
              <FavoriteIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Favorites}
        component={Favorites}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <BookIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Library}
        component={Library}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <HomeIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Home}
        component={Home}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <MuseumIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Details}
        component={Details}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: isIOS ? 4 : 0,
              }}>
              {/* <View style={{display: focused ? 'flex' : 'none', height: 10, width: 10, borderRadius: 25, backgroundColor: focused ? '#000' : 'none', marginBottom: 8}}></View> */}
              <ProfileIcon
                size={26}
                fillColor={focused ? colors.black : colors.lingthGray}
              />
            </View>
          ),
        }}
        name={Routes.Tour}
        component={TourPages}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;

const styles = StyleSheet.create({
  // TextNavigait: {},
});
