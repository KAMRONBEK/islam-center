import {Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import {MuseumDATA} from './data';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import {MuseumMenu} from './button';
import {Routes} from '../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';

const Museum = () => {
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
        headingTitle="Музей"
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
            onPressMenu={() => navigation.navigate(Routes.AboutMuseum)}
            museumIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="О музее"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            doorIocn={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Музейные отделы"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            internationalIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Международные выставки"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            exponate={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Экспонаты"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Документы"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Сотрудничество"
          />
          <MuseumMenu
            // onPressMenu={() => navigation.navigate('Details')}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Сотрудники музея"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Museum;
