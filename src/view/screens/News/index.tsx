import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from './style';
import {AppBarBackTo} from '../../components/Other/AppBar';
import {ArrowLeft, DetailsLikeIcon, Saveg} from '../../assets/icons/icon';
import {colors} from '../../theme';

const News = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        {/* <AppBarBackTo
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
        /> */}
      </View>
      <View style={style.body}></View>
    </View>
  );
};

export default News;
