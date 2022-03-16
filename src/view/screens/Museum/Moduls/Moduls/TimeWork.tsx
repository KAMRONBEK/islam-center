import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import {Routes} from '../../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';

const TimeWork = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        marginLeft={-35}
        //@ts-ignore
        onPressLeftArrow={() => navigation.navigate(Routes.AboutMuseum)}
        headingText={true}
        headingTitle="Часы работы"
        headingTextStyle={style.titleStyle}
      />
    </View>
  );
};

export default TimeWork;

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
