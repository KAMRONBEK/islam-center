import {Text, View, ImageBackground, KeyboardAvoidingView} from 'react-native';
import React from 'react';
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
import intro_bg from '../../assets/images/intro_bg.png';
import {Routes} from '../../../navigation/routes/routes';

const Welcome = () => {
  let navigation = useNavigation();
  const [code, setCode] = React.useState('');

  let onSubmitCode = () => {
    if (code.length >= 4) {
      //@ts-ignore
      navigation.navigate(Routes.BottomNavigator);
    } else null;
    // console.warn(code);
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
                mask={[/\d/, /\d/, /\d/, /\d/]}
                value={code}
                onChangeText={setCode}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                style={style.input}
              />
              <Button
                containerStyle={style.buttonContainer}
                //@ts-ignore
                onPress={onSubmitCode}
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

export default Welcome;
