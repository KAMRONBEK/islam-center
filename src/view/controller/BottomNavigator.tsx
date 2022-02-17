import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {router} from '../routes/routes';
import {Colors} from '../Stylus/colors';
import Home from '../pages/Views/Home';
import Statics from '../pages/Views/Statics';
import Routines from '../pages/Views/Routines';
import Setting from '../pages/Views/SettingViews/Setting';
import {
  HomeIcon,
  RoutinesIcon,
  SettingIcon,
  StaticsIcon,
} from '../assets/Svg/icons';
import {windowHeight} from '../Stylus/size';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: windowHeight / 8 - 10,
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
                top: 8,
              }}>
              <HomeIcon IconColor={focused ? Colors.orange : Colors.grey} />
              <Text
                style={{
                  color: focused ? Colors.orange : Colors.grey,
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 5.78,
                  marginBottom: 20,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        name={router.HOME}
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
                top: 8,
              }}>
              <StaticsIcon IconColor={focused ? Colors.orange : Colors.grey} />
              <Text
                style={{
                  color: focused ? Colors.orange : Colors.grey,
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 5.78,
                  marginBottom: 20,
                }}>
                Statics
              </Text>
            </View>
          ),
        }}
        name={router.STATICS}
        component={Statics}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
              }}>
              <RoutinesIcon IconColor={focused ? Colors.orange : Colors.grey} />
              <Text
                style={{
                  color: focused ? Colors.orange : Colors.grey,
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 5.78,
                  marginBottom: 20,
                }}>
                Routines
              </Text>
            </View>
          ),
        }}
        name={router.ROUTINES}
        component={Routines}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 8}}>
              <SettingIcon IconColor={focused ? Colors.orange : Colors.grey} />
              <Text
                style={{
                  color: focused ? Colors.orange : Colors.grey,
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 5.78,
                  marginBottom: 20,
                }}>
                Setting
              </Text>
            </View>
          ),
        }}
        name={router.SETTING}
        component={Setting}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;

const styles = StyleSheet.create({
  // TextNavigait: {},
});
