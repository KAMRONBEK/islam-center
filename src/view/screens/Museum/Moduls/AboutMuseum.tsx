import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../constants/size';
import {colors} from '../../../theme';
import {MuseumMenu} from '../button';
import {Routes} from '../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';

const AboutMuseum = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        //@ts-ignore
        // onPressDetailsIcon={() => navigation.navigate('Details')}
        headingText={true}
        headingTitle="О музее"
        headingTextStyle={style.titleStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: windowWidth / 1,
            // height: windowHeight / 1,
            paddingHorizontal: 20,
          }}>
          <MuseumMenu
            onPressMenu={() => navigation.navigate(Routes.TimeWork)}
            timeWork={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Часы работы"
          />
          <MuseumMenu
            onPressMenu={() => navigation.navigate(Routes.IntroMuseum)}
            loginMuseum={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Вход в музей"
          />
          <MuseumMenu
            location={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Как добраться"
          />
          <MuseumMenu
            informationLibrary={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Информацию о билетах"
          />
          <MuseumMenu
            acsasblaty={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Доступность"
          />
          <MuseumMenu
            comfort={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Удобства"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutMuseum;

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
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
});
