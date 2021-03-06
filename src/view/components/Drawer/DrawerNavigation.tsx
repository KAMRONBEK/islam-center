import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
  MuseumIcon,
  NewsIcon,
  NotificationIcon,
  SignOutIcon,
  TourIcon,
  VirtualTurIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';
import NotificationsStack from '../../screens/Notifications/navigator';
import NewsStack from '../../screens/News/navigator';
import MyPurchasesStack from '../../screens/MyPurchases/navigator';
import Media from '../../screens/Media/media';
import MuseumStack from '../../screens/Museum/navigator';
import Intro from '../../screens/Intro';
import TechnicalSupport from '../../screens/TechnicalSupport';
import ForumStack from '../../screens/Forum/navigator';
import ExhibitionsStack from '../../screens/Exhibitions/navigator';
import VirtualTur from '../../screens/VirtualTur/VirtualTur';

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
          fontSize: 23,
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
            <HomeIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????????????',
        }}
      />
      <Drawer.Screen
        name={Routes.NotificationsStack}
        component={NotificationsStack}
        options={{
          drawerIcon: ({color}) => (
            <NotificationIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????????????????????',
        }}
      />
      <Drawer.Screen
        name={Routes.ExhibitionStack}
        component={ExhibitionsStack}
        options={{
          drawerIcon: ({color}) => (
            <TourIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '????????????????',
        }}
      />
      <Drawer.Screen
        name={Routes.MyPurchasesStack}
        component={MyPurchasesStack}
        options={{
          drawerIcon: ({color}) => (
            <BascetIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '?????? ??????????????',
        }}
      />
      <Drawer.Screen
        name={Routes.MuseumStack}
        component={MuseumStack}
        options={{
          drawerIcon: ({color}) => (
            <MuseumIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????????',
        }}
      />
      <Drawer.Screen
        name={Routes.ForumStack}
        component={ForumStack}
        options={{
          drawerIcon: ({color}) => (
            <ForumIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: '??????????',
        }}
      />
      <Drawer.Screen
        name={Routes.NewsStack}
        component={NewsStack}
        options={{
          drawerIcon: ({color}) => <NewsIcon size={24} />,
          drawerLabel: '??????????????',
        }}
      />
      <Drawer.Screen
        name={Routes.Media}
        component={Media}
        options={{
          drawerIcon: ({color}) => (
            <CameraIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????????',
        }}
      />
      <Drawer.Screen
        name={Routes.VirtualTur}
        component={VirtualTur}
        options={{
          drawerIcon: ({color}) => (
            <VirtualTurIcon size={25} fillColor={colors.black} />
          ),
          drawerLabel: '?????????????????????? ??????',
        }}
      />
      <Drawer.Screen
        name="??????.??????????????????"
        component={TechnicalSupport}
        options={{
          drawerIcon: ({color}) => (
            <AirpodsIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????.??????????????????',
        }}
      />
      <Drawer.Screen
        name="??????????"
        component={Intro}
        options={{
          drawerIcon: ({color}) => (
            <SignOutIcon size={24} fillColor={colors.black} />
          ),
          drawerLabel: '??????????',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
