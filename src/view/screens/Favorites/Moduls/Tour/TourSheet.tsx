import React, {useCallback, useState, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

//@ts-ignore
import intro_bg from '../../../../assets/images/intro_bg.png';
import {colors} from '../../../../theme';
import {AppHeader} from '../../../../components/Other/AppBar';
import {isIOS, windowHeight, windowWidth} from '../../../../constants/size';
import {Routes} from '../../../../navigation/routes/routes';
import {useNavigation} from '@react-navigation/native';
import {FavoriteTourInnerDATA} from './data';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../../components/Button/button';
import ImageView from 'react-native-image-viewing';

const FavoriteTourSheet = () => {
  let navigation = useNavigation();

  //image preview
  const [visible, setIsVisible] = useState(false);

  let openImagePreview = () => {
    if (setIsVisible == false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // buttons visible
  const [scrollButton, setScrollButton] = useState(false);
  const [NotScrollButton, setNotScrollButton] = useState(false);

  //button margin
  const [takeIndex, setIndex] = useState(0);

  // save Button
  const [save, setSave] = useState(false);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['55%', '65', '87'], []);

  // callbacks

  const handleSheetChanges = useCallback(index => {
    if (index == 0) {
      setScrollButton(false);
      setNotScrollButton(true);
      // setIndex(1);
    } else if (index == 1) {
      setScrollButton(true);
      setNotScrollButton(false);
      setIndex(1);
    } else if (index == 2) {
      setScrollButton(true);
      setNotScrollButton(false);
      setIndex(2);
    }

    // console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <ImageBackground
        source={intro_bg}
        resizeMode="cover"
        style={style.loginBG}>
        <AppHeader
          containerStyle={style.containerStyle}
          leftArrowIcon={true}
          colorLeftArrow={colors.white}
          //@ts-ignore
          onPressLeftArrow={() => navigation.goBack()}
          headingText={true}
          headingTitle="Избранное"
          headingTextStyle={style.titleStyle}
        />
      </ImageBackground>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        {/* <View style={style.contentContainer}> */}
        {FavoriteTourInnerDATA.map((e, i) => {
          return (
            <View style={style.contentContainer} key={i}>
              <View style={style.sheetHeading}>
                <Text style={style.tiketName}>{e.label}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={style.price}>{e.price}</Text>
                  <Text style={style.currensy}>{e.currensy}</Text>
                </View>
              </View>
              <View style={style.dataTimeContainer}>
                <View style={style.date}>
                  <View>{e.calendarIcon}</View>
                  <Text style={style.dataText}>{e.date}</Text>
                </View>
                <View style={style.time}>
                  <View>{e.timeIcon}</View>
                  <Text style={style.timeText}>{e.time}</Text>
                </View>
              </View>
              <View style={style.imageContainer}>
                <TouchableOpacity onPress={openImagePreview}>
                  {/* <ImageView
                    images={e.image}
                    imageIndex={0}
                    visible={visible}
                    onRequestClose={() => setIsVisible(false)}
                  /> */}
                  <View>{e.image.image}</View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View>{e.image.image}</View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View>{e.image.image}</View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: NotScrollButton
                    ? windowHeight / 4 + 50
                    : windowHeight / 1 - 360,
                }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={style.textContainer}>
                    <Text style={style.text}>{e.text}</Text>
                  </View>
                  {scrollButton && (
                    <View>
                      <Button
                        containerStyle={style.buttonContainer}
                        //@ts-ignore
                        // onPress={}
                        // onPress={() => navigation.navigate('Welcome')}
                        text="Скачать билет"
                        textStyles={style.buttonText}
                      />
                      <Button
                        onPress={() => setSave(e => !e)}
                        containerStyle={[
                          style.buttonContainer,
                          {
                            marginBottom:
                              takeIndex == 1
                                ? 250
                                : 0 || takeIndex == 2
                                ? 80
                                : 0,
                          },
                        ]}
                        //@ts-ignore
                        // onPress={() => navigation.navigate('Welcome')}
                        text={save ? 'Удалить из избранного' : 'В избранное'}
                        textStyles={style.buttonText}
                      />
                    </View>
                  )}
                </ScrollView>
              </View>
            </View>
          );
        })}
        {/* </View> */}
      </BottomSheet>
      {NotScrollButton && (
        <View style={{paddingHorizontal: 20, position: 'absolute', bottom: 0}}>
          <Button
            containerStyle={style.buttonContainer}
            //@ts-ignore
            // onPress={onSubmitPhone}
            // onPress={() => navigation.navigate('Welcome')}
            text="Скачать билет"
            textStyles={style.buttonText}
          />
          <Button
            onPress={() => setSave(e => !e)}
            containerStyle={[style.buttonContainer, {marginBottom: 40}]}
            //@ts-ignore
            // onPress={() => navigation.navigate('Welcome')}
            text={save ? 'Удалить из избранного' : 'В избранное'}
            textStyles={style.buttonText}
          />
        </View>
      )}
    </View>
  );
};

export default FavoriteTourSheet;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: '#fff',
    width: windowWidth / 2 + 82,
    height: isIOS ? windowHeight / 8 - 50 : windowHeight / 8 - 50,
    paddingHorizontal: 30,
  },

  titleStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  loginBG: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  sheetHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  tiketName: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
  },

  price: {
    fontSize: 23,
    fontWeight: '700',
    color: colors.black,
  },

  currensy: {
    fontSize: 23,
    fontWeight: '700',
    color: colors.black,
    paddingLeft: 8,
  },

  dataTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 95,
  },

  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    marginLeft: 35,
  },

  dataText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
  },

  timeText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingBottom: 20,
  },

  image: {
    borderRadius: 5,
    width: 110,
    height: 100,
  },

  textContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray,
    lineHeight: 25,
    letterSpacing: 1,
  },

  buttonContainer: {
    backgroundColor: colors.green,
    width: windowWidth / 1 - 40,
    height: 65,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    color: colors.white,
    letterSpacing: 1,
    marginRight: 20,
    alignItems: 'center',
    fontWeight: isIOS ? '700' : '700',
  },
});
