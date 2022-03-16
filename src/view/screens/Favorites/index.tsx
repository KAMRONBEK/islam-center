import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
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
        // onPressDetailsIcon={() => navigation.navigate('Details')}
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
          }}
          style={style.toglleBtn}>
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
        <FlatList
          data={FavoritesLibraryDATA}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 140,
            paddingTop: 0,
          }}
          // keyExtractor={(item) => item.id}
          renderItem={e => (
            <View style={style.cardContainer}>
              <View
                style={style.card}
                // key={i.toString()}
              >
                {e.item.image}

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
                      <Text style={style.label}>{e.item.label}</Text>
                      <Text style={style.title}>{e.item.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setActiveLike(true)}>
                      {e.item.iconLike}
                    </TouchableOpacity>
                  </View>
                  <View style={style.priceContainer}>
                    <Text style={style.price}>{e.item.price}</Text>
                    <Text style={style.currency}>{e.item.currency}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={FavoritesTourDATA}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 140,
            paddingTop: 0,
          }}
          // keyExtractor={(item) => item.id}
          renderItem={e => (
            <View style={style.cardContainer}>
              <View
                style={style.card}
                //  key={i.toString()}
              >
                {e.item.image}
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
                      <Text style={style.label}>{e.item.label}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        {e.item.locationIcon}
                        <Text style={style.tourTitle}>{e.item.title}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        {e.item.dateIcon}
                        <Text style={style.tourTitle}>{e.item.date}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setActiveLike(true)}>
                      {e.item.iconLike}
                    </TouchableOpacity>
                  </View>
                  <View style={style.priceContainer}>
                    <Text style={style.price}>{e.item.price}</Text>
                    <Text style={style.currency}>{e.item.currency}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 100 : 75}}></View> */}
    </View>
  );
};

export default Favorites;
