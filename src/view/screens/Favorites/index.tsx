import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {style} from './style';
import {BookIcon, TourIcon} from '../../assets/icons/icon';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme';
import {FavoritesLibraryDATA, FavoritesTourDATA} from './data';

const Favorites = () => {
  const Tab = createBottomTabNavigator();

  const [active, setActive] = useState(true);
  const [activeLike, setActiveLike] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 15}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        //@ts-ignore
        onPressDetailsIcon={() => navigation.navigate('Details')}
        headingText={true}
        headingTitle="Избранное"
        headingTextStyle={style.titleStyle}
      />

      <View style={style.toglleContainer}>
        <TouchableOpacity
          onPress={() => {
            setActive(true);
          }}
          style={style.toglleBtn}>
          <View style={[style.library]}>
            <BookIcon
              size={50}
              fillColor={active ? colors.black : colors.lingthGray}
            />
            <Text
              style={[
                style.libraryText,
                {color: active ? colors.black : colors.lingthGray},
              ]}>
              Библиотека
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActive(false);
          }} style={style.toglleBtn}>
          <View style={[style.tours]}>
            <TourIcon
              size={50}
              fillColor={active ? colors.lingthGray : colors.black}
            />
            <Text
              style={[
                style.toursText,
                {color: active ? colors.lingthGray : colors.black},
              ]}>
              Туры
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {active ? (
        <View style={style.cardContainer}>
          {FavoritesLibraryDATA.map((e, i) => {
            return (
              <View style={style.card} key={i.toString()}>
                {e.image}

                <View style={style.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      width: windowWidth / 2 + 10,
                      // borderWidth: 1,
                      paddingVertical: 6,
                    }}>
                    <View style={style.titleContainer}>
                      <Text style={style.label}>{e.label}</Text>
                      <Text style={style.title}>{e.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setActiveLike(true)}>
                      {e.iconLike}
                    </TouchableOpacity>
                  </View>
                  <View style={style.priceContainer}>
                    <Text style={style.price}>{e.price}</Text>
                    <Text style={style.currency}>{e.currency}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <View style={style.cardContainer}>
          {FavoritesTourDATA.map((e, i) => {
            return (
              <View style={style.card} key={i.toString()}>
                {e.image}
                <View style={style.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      width: windowWidth / 2 - 10,
                      // borderWidth: 1,
                      paddingVertical: 6,
                    }}>
                    <View style={style.titleContainer}>
                      <Text style={style.label}>{e.label}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        {e.locationIcon}
                        <Text style={style.tourTitle}>{e.title}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        {e.dateIcon}
                        <Text style={style.tourTitle}>{e.date}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setActiveLike(true)}>
                      {e.iconLike}
                    </TouchableOpacity>
                  </View>
                  <View style={style.priceContainer}>
                    <Text style={style.price}>{e.price}</Text>
                    <Text style={style.currency}>{e.currency}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default Favorites;
