import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {style} from './style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme';
import {LikeSave, MyBookIcon, SearchIcon} from '../../assets/icons/icon';
import {LibraryDATA} from './data';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import {useAllApiContext} from '../../../context/allapi/AllApiContext';
import {useLangContext} from '../../../context/lang/LangContext';
import {TypeAllApiState} from '../../../context/allapi/TypeAllApi';
import {TypeLangState} from '../../../context/lang/TypeLang';

const Library = () => {
  const {catalogs} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;
  let navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  const [active, setActive] = useState(true);
  const [activeLike, setActiveLike] = useState(false);

  return (
    <View style={style.container}>
      {/* <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View> */}
      <SafeAreaView>
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
          onPressNotification={() =>
            //@ts-ignore
            navigation.navigate(Routes.NotificationsStack)
          }
          headingText={true}
          headingTitle="Библиотека"
          headingTextStyle={style.titleStyle}
        />

        <View style={style.searchContainer}>
          <TextInput
            style={style.search}
            // onChangeText={onChangeNumber}
            // value={number}
            // inlineImageRight={SearchIcon}
            placeholder="Текст"
            placeholderTextColor={colors.gray}
            keyboardType="default"
          />
          <TouchableOpacity>
            <SearchIcon size={25} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={catalogs}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 260,
            paddingTop: 40,
          }}
          // extraData={selectedId}
          // keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            // console.log({index});
            return (
              <View
                style={[
                  style.productContainer,
                  (index + 1) % 2 == 0
                    ? {
                        marginTop: 0,
                      }
                    : {top: -50},
                ]}>
                <View style={style.Product}>
                  <View style={style.productIconContainer}>
                    <TouchableOpacity
                      //@ts-ignore
                      onPress={() =>
                        navigation.navigate(Routes.LibraryProduct, {
                          item: item,
                        })
                      }>
                      <Image
                        source={{
                          uri: `https://mamajanovs.uz/images/${item.image}`,
                        }}
                        resizeMode="cover"
                        style={style.productImage}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnLike}>
                      <LikeSave
                        size={25}
                        fillColor={colors.white}
                        color={colors.green}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={style.productItem}>
                    <Text style={style.productName}>
                      {JSON.parse(item.title)[language]}
                    </Text>
                    {/* <Text style={style.productTitle}>{JSON.parse(item.author)[language]}</Text> */}
                    <Text style={style.productTitle}>{JSON.parse(item.author)[language]}</Text>
                    <Text style={style.productPrice}>
                      {item.price == 0 ? 'Бесплатно' : item.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Library;
