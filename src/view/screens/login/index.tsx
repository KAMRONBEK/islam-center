import {Text, View, ImageBackground, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {style} from './style';
import {ArrowRight, Pattern} from '../../assets/icons/icon';
import Button from '../../components/Button/button';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {HeaderApp} from '../../components/Other/AppBar';
import {useNavigation} from '@react-navigation/native';
import MaskInput from 'react-native-mask-input';

// image
// @ts-ignore
import intro_bg from '../../assets/images/intro_bg.png';
import {Routes} from '../../../navigation/routes/routes';

const Login = () => {
  let navigation = useNavigation();
  const [phone, setPhone] = React.useState<string>('');

  let onSubmitPhone = () => {
    if (phone.length >= 18) {
      //@ts-ignore
      navigation.navigate(Routes.Welcome);
    } else null;
    // console.warn(phone);
  };

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={style.container}>
        <ImageBackground
          source={intro_bg}
          resizeMode="cover"
          style={style.loginBG}>
          <HeaderApp
            containerStyle={style.containerStyle}
            leftArrowIcon={true}
            colorLeftArrow={colors.white}
            //@ts-ignore
            onPressLeftArrow={() => navigation.navigate('Intro')}
            headingText={true}
            headingTitle="Войти"
            headingTextStyle={style.titleStyle}

          />
          <View style={style.inner}>
            <View style={style.bgIcon}>
              <Pattern size={160} />
            </View>
            <View>
              <Text style={style.welcomeText}>ПРИВЕТСТВУЕМ ВАС!</Text>
              <Text style={style.phoneText}>Номер телефона</Text>
              <MaskInput
                mask={[
                  '+',
                  ' ',
                  '9',
                  '9',
                  '8',
                  ' ',
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                ]}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                style={style.input}
              />
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={onSubmitPhone}
                // onPress={() => navigation.navigate('Welcome')}
                text="Подтвердить"
                textStyles={style.buttonText}
                Icon={ArrowRight}
                icon={colors.white}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
