import {Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import {CentreDATA} from './data';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import {Routes} from '../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {ColumnMenu} from '../../components/Button/ColumnMenu';

const Centre = () => {
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
        headingTitle="Центр"
        headingTextStyle={style.titleStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 110}}>
        <View
          style={{
            width: windowWidth / 1,
            // height: windowHeight / 1,
            paddingHorizontal: 20,
          }}>
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.AboutCentre)}
            museumIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="О Центре"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.TasksCentre)}
            doorIocn={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Цели и задачи"
          />
          <ColumnMenu
            //@ts-ignore
            // onPressMenu={() => navigation.navigate('')}
            internationalIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Устав центра"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.AdviceCentre)}
            exponate={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Попечительский совет"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.StaffCentre)}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Управление"
          />
          <ColumnMenu
            // onPressMenu={() => navigation.navigate('Details')}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Документы"
          />
          <ColumnMenu
            // onPressMenu={() => navigation.navigate('Details')}
            // documnet={true}
            // fillColor={colors.green}
            menuNameText={true}
            menuName="Проект"
          />
          <ColumnMenu
            // onPressMenu={() => navigation.navigate('Details')}
            // documnet={true}
            // fillColor={colors.green}
            menuNameText={true}
            menuName="Вакансии"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Centre;
