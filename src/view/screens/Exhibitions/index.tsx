import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {ExhibitionsTourCoruselDATA, NotificationDATA} from './data';
import {Chapter} from '../Home/components/chapter';
import {
  CalendarIcon,
  CoruselArrowLeft,
  CoruselArrowRight,
} from '../../assets/icons/icon';
import SwiperFlatList from 'react-native-swiper-flatlist';

//@ts-ignore
import carusel_bg from '../../assets/images/homeTourCorusel.png';
import {colors} from '../../theme';

const DATA = new Array(31).map((e, i) => i + 1);
const ITEM_SIZE = 64;
const MARGIN = 20;

const Exhibitions = () => {
  let navigation = useNavigation();

  // Calendar flatlist
  const _animatedFlatlist = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        //@ts-ignore
        onPressDetailsIcon={() =>
          //@ts-ignore
          navigation.openDrawer()
        }
        headingText={true}
        headingTitle="Выставки"
        headingTextStyle={style.titleStyle}
      />
      <Chapter
        chapter={true}
        chapterTitle="Ближайшие"
        titleStyle={{fontSize: 35, fontWeight: '600', letterSpacing: 1}}
        allChapter="  "
      />
      <View
        style={{
          height: 530,
          flexDirection: 'row',
          paddingHorizontal: 20,
          // width: windowWidth / 1,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 115,
              paddingBottom: 80,
              marginLeft: 2,
              width: 90,
            }}
            data={DATA}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: animatedValue}}},
            ])}
            snapToInterval={ITEM_SIZE + MARGIN}
            decelerationRate={'fast'}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    ...StyleSheet.absoluteFillObject,
                  }}>
                  {/* <Text>asdasdas</Text> */}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [
                -1,
                0,
                index * (ITEM_SIZE + MARGIN),
                index * (ITEM_SIZE + MARGIN),
              ];

              let color = animatedValue.interpolate({
                inputRange: inputRange,
                outputRange: [
                  colors.gray,
                  colors.gray,
                  colors.gray,
                  colors.black,
                ],
              });

              let margin = animatedValue.interpolate({
                inputRange: inputRange,
                outputRange: [
                  0, 0, 0, 8,
                  //  20,
                  // 20,
                ],
              });

              return (
                <Animated.View
                  style={{
                    borderRadius: 10,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    // padding: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2.22,

                    backgroundColor: colors.white,
                    width: 76,
                    height: ITEM_SIZE,
                    elevation: 3,
                    marginLeft: margin,
                    marginBottom: MARGIN,
                  }}>
                  <Animated.Text
                    style={{
                      color: color,
                      textAlign: 'center',
                      fontSize: 27,
                      fontWeight: '600',
                    }}>
                    {index}
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: color,
                      fontSize: 17,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    January
                  </Animated.Text>
                </Animated.View>
              );
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 15,
            }}>
            <CalendarIcon size={35} color={colors.green} />
            <Text
              style={{
                paddingTop: 10,
                color: colors.green,
                fontSize: 18,
                fontWeight: '400',
              }}>
              Выбрать
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.content}></View>
      </View>
    </View>
  );
};

export default Exhibitions;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#9485',
    width: windowWidth / 1,
    height: isIOS ? windowHeight / 8 - 20 : windowHeight / 8 - 30,
    paddingHorizontal: 20,
  },

  titleStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },

  notificationContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 2,
  },

  timeContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 10,
  },

  notificationText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    lineHeight: 24,
  },

  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 90,
    paddingHorizontal: 20,
    // borderWidth: 1,
    // borderColor: colors.white,
  },

  content: {
    height: 100,
    width: windowWidth / 2 + 50,
    borderWidth: 1,
  },

  label: {
    fontSize: 21,
    fontWeight: '500',
    color: colors.white,
    paddingBottom: 6,
  },

  tourTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.lingthGray,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});
