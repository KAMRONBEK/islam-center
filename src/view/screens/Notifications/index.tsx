import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';

const Notifications = () => {
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
        // onPressLeftArrow={() => navigation.navigate(Routes)}
        headingText={true}
        headingTitle="Уведомления"
        headingTextStyle={style.titleStyle}
      />
    </View>
  );
};

export default Notifications;

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
