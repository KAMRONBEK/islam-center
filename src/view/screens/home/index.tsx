import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {style} from './style';
import {AppHeader} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import Card from '../../components/Card/card';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {CoruselArrowLeft, CoruselArrowRight} from '../../assets/icons/icon';
import {CardDATA} from '../../components/Card/data';
import {ShopCoruselDATA} from '../../components/Corusel/shopData';
import {NewsCoruselDATA} from '../../components/Corusel/newsData';

const DATA = new Array(31).map((e, i) => i + 1);
const ITEM_SIZE = 60;
const MARGIN = 20;

const Home = () => {
  const news = ['NEWS', 'thistle', 'skyblue', 'teal'];
  const [index, setIndex] = useState();

  // Calendar flatlist
  const _animatedFlatlist = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const _flatListCalendarRef = useRef(null);

  const _flatListShopRef = useRef(null);

  const _flatListNewsRef = useRef(null);

  let navigation = useNavigation();

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
        onPressDetailsIcon={() => navigation.navigate('Details')}
        headingText={true}
        headingTitle="Главная"
        headingTextStyle={style.titleStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 400,
            flexDirection: 'row',
            width: windowWidth / 1,
          }}>
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 90,
              paddingBottom: 80,
              marginLeft: 20,
            }}
            data={DATA}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: animatedValue}}},
            ])}
            pagingEnabled
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
                (index + 1) * (ITEM_SIZE + MARGIN),
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
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    backgroundColor: colors.white,
                    width: 70,
                    height: ITEM_SIZE,
                    elevation: 3,
                    marginLeft: margin,
                    marginBottom: MARGIN,
                  }}>
                  <Animated.Text
                    style={{
                      color: color,
                      textAlign: 'center',
                    }}>
                    {(item, index)}
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: color,
                      textAlign: 'center',
                    }}>
                    January
                  </Animated.Text>
                </Animated.View>
              );
            }}
          />
          <View style={style.calendarCorusel}>
            <SwiperFlatList
              ref={_flatListCalendarRef}
              autoplay={false}
              autoplayDelay={2}
              autoplayLoop={false}
              // index={1}
              // value={index}
              // onChangeIndex={setIndex}
              // showPagination
              // data={shop}
              style={{
                borderRadius: 5,
                // backgroundColor: colors.black,
                borderWidth: isIOS ? 0.1 : 0.2,
              }}>
              {ShopCoruselDATA.map((e, i) => {
                return (
                  <TouchableOpacity key={i.toString()}>
                    <View style={style.calendarContainer}>
                      <View style={style.calendarContent}>
                        <View>{e.icon}</View>
                        <View style={style.calendarContentText}>
                          <Text style={style.calendarHintTextStyle}>
                            {e.hintText}
                          </Text>
                          <Text style={style.calendarTitleStyle}>
                            {e.title}
                          </Text>
                        </View>
                      </View>
                      <View style={style.calendarDescription}>
                        <Text style={style.calendarLabel}>{e.label}</Text>
                        <View style={style.calendarPriceContainer}>
                          <Text style={style.calendarPriceStyle}>
                            {e.price}
                          </Text>
                          <Text style={style.calendarCurrencyStyle}>
                            {e.currency}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </SwiperFlatList>
            <View style={style.calendarCoruselBtn}>
              <TouchableOpacity
                style={style.left}
                onPress={() => {
                  _flatListCalendarRef.current.scrollToIndex({
                    index:
                      _flatListCalendarRef.current.getCurrentIndex() > 0
                        ? _flatListCalendarRef.current.getCurrentIndex() - 1
                        : _flatListCalendarRef.current.goToLastIndex() == 0,
                    // index:_flatListRef.current.getCurrentIndex() - 1,
                    animated: true,
                  });
                }}>
                <CoruselArrowLeft size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.right}
                onPress={() => {
                  _flatListCalendarRef.current.scrollToIndex({
                    index:
                      _flatListCalendarRef.current.getCurrentIndex() <
                      ShopCoruselDATA.length - 1
                        ? _flatListCalendarRef.current.getCurrentIndex() + 1
                        : _flatListCalendarRef.current.goToFirstIndex() == 0,
                    animated: true,
                  });
                }}>
                <CoruselArrowRight size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.bookShopCorusel}>
          <SwiperFlatList
            ref={_flatListShopRef}
            autoplay={false}
            autoplayDelay={2}
            autoplayLoop={false}
            // index={1}
            // value={index}
            // onChangeIndex={setIndex}
            // showPagination
            // data={shop}
            style={{
              borderRadius: 5,
              // backgroundColor: colors.black,
              borderWidth: isIOS ? 0.1 : 0.2,
            }}>
            {ShopCoruselDATA.map((e, i) => {
              return (
                <TouchableOpacity key={i.toString()}>
                  <View style={style.shopCoruselContainer}>
                    <View style={style.shopContent}>
                      <View>{e.icon}</View>
                      <View style={style.shopContentText}>
                        <Text style={style.shopHintTextStyle}>
                          {e.hintText}
                        </Text>
                        <Text style={style.shopTitleStyle}>{e.title}</Text>
                      </View>
                    </View>
                    <View style={style.shopDescription}>
                      <Text style={style.shopLabel}>{e.label}</Text>
                      <View style={style.shopPriceContainer}>
                        <Text style={style.shopPriceStyle}>{e.price}</Text>
                        <Text style={style.shopCurrencyStyle}>
                          {e.currency}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </SwiperFlatList>
          <View style={style.bookShopCoruselBtn}>
            <TouchableOpacity
              style={style.left}
              onPress={() => {
                _flatListShopRef.current.scrollToIndex({
                  index:
                    _flatListShopRef.current.getCurrentIndex() > 0
                      ? _flatListShopRef.current.getCurrentIndex() - 1
                      : _flatListShopRef.current.goToLastIndex() == 0,
                  // index:_flatListRef.current.getCurrentIndex() - 1,
                  animated: true,
                });
              }}>
              <CoruselArrowLeft size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.right}
              onPress={() => {
                _flatListShopRef.current.scrollToIndex({
                  index:
                    _flatListShopRef.current.getCurrentIndex() <
                    ShopCoruselDATA.length - 1
                      ? _flatListShopRef.current.getCurrentIndex() + 1
                      : _flatListShopRef.current.goToFirstIndex() == 0,
                  animated: true,
                });
              }}>
              <CoruselArrowRight size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <Card />
        <View style={style.newsContainer}>
          <Text style={style.newsText}>НОВОСТИ</Text>
        </View>
        <View style={style.newsCorusel}>
          <SwiperFlatList
            ref={_flatListNewsRef}
            autoplay={false}
            autoplayDelay={2}
            autoplayLoop={false}
            // index={1}
            // value={index}
            // onChangeIndex={setIndex}
            // showPagination
            data={news}
            style={{
              borderRadius: 5,
              borderWidth: isIOS ? 0.1 : 0.2,
            }}
            // renderItem={({item}) => (
            //   <View style={[style.childSlide, {backgroundColor: item}]}>
            //     <Text style={style.textSlide}>{item}</Text>
            //   </View>
            // )}
          >
            {NewsCoruselDATA.map((e, i) => {
              return (
                <TouchableOpacity key={i.toString()}>
                  <View style={style.newsCoruselContainer}>
                    <View style={style.newsImage}>
                      <View>{e.icon}</View>
                    </View>
                    <View style={style.newsDescription}>
                      <Text style={style.newsHintTextStyle}>{e.hintText}</Text>
                      <Text style={style.newsLabel}>{e.label}</Text>
                      <View style={style.newsPriceContainer}>
                        <Text style={style.newsStatusIconStyle}>
                          {e.statusIcon}
                        </Text>
                        <Text style={style.newsCurrencyStyle}>{e.status}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </SwiperFlatList>
          <View style={style.newsCoruselBtn}>
            <TouchableOpacity
              style={style.left}
              onPress={() => {
                _flatListNewsRef.current.scrollToIndex({
                  index:
                    _flatListNewsRef.current.getCurrentIndex() > 0
                      ? _flatListNewsRef.current.getCurrentIndex() - 1
                      : _flatListNewsRef.current.goToLastIndex() == 0,
                  // index:_flatListRef.current.getCurrentIndex() - 1,
                  animated: true,
                });
              }}>
              <CoruselArrowLeft size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.right}
              onPress={() => {
                _flatListNewsRef.current.scrollToIndex({
                  index:
                    _flatListNewsRef.current.getCurrentIndex() <
                    NewsCoruselDATA.length - 1
                      ? _flatListNewsRef.current.getCurrentIndex() + 1
                      : _flatListNewsRef.current.goToFirstIndex() == 0,
                  animated: true,
                });
              }}>
              <CoruselArrowRight size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
