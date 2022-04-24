import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../../theme';
import {AppHeader} from '../../../../components/Other/AppBar';
import {style} from './style';
import {Routes} from '../../../../../navigation/routes/routes';
import {isIOS} from '../../../../constants/size';
import {useNavigation} from '@react-navigation/native';
import {LibraryProductReadDATA} from './data';

const LibraryProductRead = () => {
  let navigation = useNavigation();

  const [progress, setProgress] = useState();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        leftArrowIcon={true}
        colorLeftArrow={colors.black}
        titleText={true}
        titleTitle="QURAN MAJEED"
        titleTextStyle={style.titleStyle}
        labelText={true}
        labelTitle="Джоан Роулинг"
        labelTextStyle={style.labelStyle}
        saveIcon={true}
        saveColor={colors.black}
        //@ts-ignore
        onPressLeftArrow={() => navigation.navigate(Routes.LibraryProduct)}
        headingTextStyle={style.titleStyle}
      />
      <ScrollView
        onLayout={event => {
          const {x, y, height, width} = event.nativeEvent.layout;
          console.log(height);
          setHeight(height);
        }}
        showsVerticalScrollIndicator={false}
        style={style.scrollContainer}
        onScroll={(state: NativeSyntheticEvent<NativeScrollEvent>) => {
          let {y} = state.nativeEvent.contentOffset;
          //@ts-ignore
          setProgress((3 * y) / height);
        }}
        scrollEventThrottle={16}>
        {LibraryProductReadDATA.map((e, i) => {
          return (
            <View style={style.titleContainer} key={i}>
              <Text style={style.titleTextStyle}>{e.titleOne}</Text>
              <Text style={style.titleTextStyle}>{e.titleTwo}</Text>
              <Text style={style.titleTextStyle}>{e.titleThree}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{height: 80}}></View>
    </View>
  );
};

export default LibraryProductRead;
