import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Library from '../../screens/Library';
import LibraryProduct from '../../screens/Library/moduls/LibraryProduct';
import LibraryProductRead from '../../screens/Library/moduls/LibraryProductRead';
import Museum from '../../screens/Museum';
import CustomDrawer from './CostumDrawer';
import {windowWidth} from '../../constants/size';
import BottomNavigator from '../../controller/BottomNavigator';
import {Routes} from '../../../navigation/routes/routes';
import {
  AirpodsIcon,
  BascetIcon,
  CameraIcon,
  ForumIcon,
  HomeIcon,
  ImageIcon,
  MuseumIcon,
  NewsIcon,
  NotificationIcon,
  SignOutIcon,
  TourIcon,
  VirtualTurIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';
import NotificationsStack from '../../screens/Notifications/navigator';
import News from '../../screens/News';
import NewsStack from '../../screens/News/navigator';
import MyPurchases from '../../screens/MyPurchases';
import MyPurchasesStack from '../../screens/MyPurchases/navigator';
import Media from '../../screens/Media/media';
import Tour from '../../screens/Tour';
import MuseumStack from '../../screens/Museum/navigator';

// import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      //   initialRouteName={Routes.BottomNavigator}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: windowWidth / 1 - 25,
        },
        headerShown: false,
        // drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 26,
          fontWeight: '600',
          letterSpacing: 1,
          marginLeft: -10,
          color: colors.gray,
        },
      }}>
      <Drawer.Screen
        name={Routes.BottomNavigator}
        component={BottomNavigator}
        options={{
          drawerIcon: ({color}) => (
            <HomeIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Главная',
        }}
      />
      <Drawer.Screen
        name={Routes.NotificationsStack}
        component={NotificationsStack}
        options={{
          drawerIcon: ({color}) => (
            <NotificationIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Уведомления',
        }}
      />
      <Drawer.Screen
        name="Выставки"
        component={Museum}
        options={{
          drawerIcon: ({color}) => (
            <TourIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Выставки',
        }}
      />
      <Drawer.Screen
        name={Routes.MyPurchasesStack}
        component={MyPurchasesStack}
        options={{
          drawerIcon: ({color}) => (
            <BascetIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Мои покупки',
        }}
      />
      <Drawer.Screen
        name={Routes.MuseumStack}
        component={MuseumStack}
        options={{
          drawerIcon: ({color}) => (
            <MuseumIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Музей',
        }}
      />
      <Drawer.Screen
        name="Форум"
        component={Museum}
        options={{
          drawerIcon: ({color}) => (
            <ForumIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Форум',
        }}
      />
      <Drawer.Screen
        name={Routes.NewsStack}
        component={NewsStack}
        options={{
          drawerIcon: ({color}) => (
            <NewsIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Новости',
        }}
      />
      <Drawer.Screen
        name={Routes.Media}
        component={Media}
        options={{
          drawerIcon: ({color}) => (
            <CameraIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Медиа',
        }}
      />
      <Drawer.Screen
        name="Виртуальный тур"
        component={Museum}
        options={{
          drawerIcon: ({color}) => (
            <VirtualTurIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Виртуальный тур',
        }}
      />
      <Drawer.Screen
        name="Тех.поддержка"
        component={Museum}
        options={{
          drawerIcon: ({color}) => (
            <AirpodsIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Тех.поддержка',
        }}
      />
      <Drawer.Screen
        name="Выход"
        component={Museum}
        options={{
          drawerIcon: ({color}) => (
            <SignOutIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: 'Выход',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
