import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {TasksCentreDATA} from './data';

const TasksCentre = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        {TasksCentreDATA.map((e, i) => {
          return (
            <View key={i}>
              <ImageBackground source={e.image} style={style.image}>
                <AppHeader
                  containerStyle={style.containerStyle}
                  leftArrowIcon={true}
                  colorLeftArrow={colors.white}
                  notificatAndDetailsIcons={true}
                  notificationColor={colors.white}
                  detailsColor={colors.white}
                  detailsIcon={true}
                  marginLeft={-35}
                  //@ts-ignore
                  onPressLeftArrow={() => navigation.navigate(Routes.Centre)}
                  //@ts-ignore
                  onPressDetailsIcon={() =>
                    //@ts-ignore
                    navigation.openDrawer()
                  }
                  onPressNotification={() =>
                    //@ts-ignore
                    navigation.navigate(Routes.NotificationsStack)
                  }
                  headingText={true}
                  headingTitle="Цели и задачи"
                  headingTextStyle={style.titleStyle}
                />
              </ImageBackground>
              <View style={style.titleContainer}>
                <Text style={style.titleText}>{e.title}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TasksCentre;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
    zIndex: 99,
  },

  titleStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },

  titleContainer: {
    width: windowWidth / 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  titleText: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.gray,
    lineHeight: 33,
  },

  image: {
    height: windowHeight / 3,
  },
});
