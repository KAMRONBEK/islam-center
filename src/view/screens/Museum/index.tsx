import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {style} from './style';
import {MuseumDATA} from './data';
import {isIOS} from '../../constants/size';
import {AppBarBackTo} from '../../components/Other/AppBar';
import {ArrowLeft, Saveg} from '../../assets/icons/icon';
import {colors} from '../../theme';

const Museum = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      {MuseumDATA.map((e, i) => {
        return (
          //   <TouchableOpacity>
          <View style={[style.contentContainer]}>
            <ImageBackground
              source={e.icon}
              resizeMode="cover"
              style={style.museumBG}>
              <AppBarBackTo
                containerStyle={style.containerStyle}
                Icon={ArrowLeft}
                //@ts-ignore
                onPressBackAction={() => navigation.navigate('Intro')}
                icon={colors.white}
                hintTitle=""
                titleStyle={style.titleStyle}
                //   rightIcon={SaveIcon}
                IconRight={Saveg}
                iconRight={colors.white}
              />
              <View style={style.iconContainer}>
                {/* {e.icon} */}
                <Text style={style.titleText}>{e.titleOne}</Text>
              </View>
            </ImageBackground>
            <View style={style.textContainer}>
              <Text style={style.labelText}>{e.label}</Text>
            </View>
            <ImageBackground
              source={e.image}
              resizeMode="cover"
              style={style.image}>
              <View style={style.iconContainer}>
                {/* {e.icon} */}
                <Text style={style.titleText}>{e.titleTwo}</Text>
              </View>
            </ImageBackground>
            <View style={style.textContainer}>
              <Text style={style.labelText}>{e.text}</Text>
            </View>
            <ImageBackground
              source={e.icon}
              resizeMode="cover"
              style={style.image}>
              <View style={style.iconContainer}>
                {/* {e.icon} */}
                <Text style={style.titleText}>{e.titleThree}</Text>
              </View>
            </ImageBackground>
            <View style={style.textContainer}>
              <Text style={style.labelText}>{e.text}</Text>
            </View>
            <ImageBackground
              source={e.image}
              resizeMode="cover"
              style={style.imageLast}></ImageBackground>
          </View>
          //   </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Museum;
