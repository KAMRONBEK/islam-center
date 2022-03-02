import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {style} from './style';
import {MuseumDATA} from './data';
import {isIOS} from '../../constants/size';
import {colors} from '../../theme';
import { AppHeader } from '../../components/Other/AppBar';

const Museum = () => {
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
      
    </View>
  );
};

export default Museum;
