import {
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {ArrowRight, Pattern} from '../../assets/icons/icon';
import Button from '../../components/Button/button';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import {useNavigation} from '@react-navigation/native';
import MaskInput from 'react-native-mask-input';

// image
// @ts-ignore
import intro_bg from '../../assets/images/intro_bg-2.png';
import {Routes} from '../../../navigation/routes/routes';
import {TypeAuthState} from '../../../context/auth/TypeAuth';
import {useAuthContext} from '../../../context/auth/AuthContext';

const Welcome = () => {
  let navigation = useNavigation();
  const {
    code,
    setCode,
    CodeSubmit,
    minutes,
    seconds,
    visibleWarningCode,
    visibleSendCode,
    onPressRequestCode,
  } = useAuthContext() as TypeAuthState;

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={style.container}>
      <View style={style.container}>
        <ImageBackground
          source={intro_bg}
          resizeMode="cover"
          style={style.loginBG}>
          <AppHeader
            containerStyle={style.containerStyle}
            leftArrowIcon={true}
            colorLeftArrow={colors.white}
            //@ts-ignore
            onPressLeftArrow={() => navigation.navigate('Login')}
            headingText={true}
            headingTitle="Подтверждение"
            headingTextStyle={style.titleStyle}
          />
          <View style={style.inner}>
            <View style={style.bgIcon}>
              <Pattern size={160} />
            </View>
            <View>
              <Text style={style.welcomeText}>ПРИВЕТСТВУЕМ ВАС!</Text>
              <Text style={style.phoneText}>Введите код из SMS</Text>
              <MaskInput
                // mask={[/\d/, /\d/, /\d/, /\d/]}
                value={code}
                onChangeText={setCode}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                style={style.input}
              />
              {visibleWarningCode ? (
                <Text style={style.warning}>Код введен не верно</Text>
              ) : null}
              {visibleSendCode ? (
                <Text style={style.waitSendCode}>
                  Повторно можно запросить через: {minutes}:{seconds}
                </Text>
              ) : null}
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={CodeSubmit}
                text="Подтвердить"
                textStyles={style.buttonText}
                Icon={ArrowRight}
                icon={colors.white}
              />
              <TouchableOpacity onPress={onPressRequestCode}>
                <Text style={style.takeCode}>Запросить код ещё раз</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Welcome;
