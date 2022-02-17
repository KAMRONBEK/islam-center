import {Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {style} from './style';
import {windowWidth, windowHeight, isIOS} from '../../constants/size';
import Button from '../../components/Button/button';
import {ArrowRight, GerbUZB} from '../../assets/icons/icon';
import {useNavigation} from '@react-navigation/native';

// image
// @ts-ignore
import intro_bg from '../../assets/images/intro_bg.png';
import {colors} from '../../theme';

const Intro = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <ImageBackground
        source={intro_bg}
        resizeMode="cover"
        style={style.introBG}>
        <View style={style.inner}>
          <View style={style.topBox}>
            <Image
              // style={style.tinyLogo}
              source={require('../../assets/images/Gerb.png')}
            />
          </View>

          <View style={style.bottomBox}>
            <Text style={style.appName}>
              ЦЕНТР ИСЛАМСКОЙ ЦИВИЛИЗАЦИИ В УЗБЕКИСТАНЕ
            </Text>
            <Button
              containerStyle={{
                marginHorizontal: 20,
                marginVertical: 20,
                height: 65,
              }}
              //@ts-ignore
              onPress={() => navigation.navigate('Home')}
              text="Авторизоваться"
              textStyles={{
                color: '#000',
                marginRight: 17,
                alignItems: 'center',
                fontWeight: isIOS ? '700' : '700',
                fontFamily: 'OpenSans-Regular',
              }}
              Icon={ArrowRight}
              //@ts-ignore
              icon={colors.black}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;
