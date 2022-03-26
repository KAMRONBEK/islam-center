import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {AppHeader} from '../../components/Other/AppBar';
import {style} from './style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme';
import {MyBookIcon, SearchIcon} from '../../assets/icons/icon';
import {LibraryDATA} from './data';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';

const Library = () => {
  let navigation = useNavigation();
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
      {/* <View style={style.myBooksBtn}>
        <TouchableOpacity
          style={style.btn}
          //@ts-ignore
          onPress={() => navigation.navigate(Routes.MyBooks)}>
          <MyBookIcon size={65} />
          <Text style={style.myBooksText}>Мои книги</Text>
        </TouchableOpacity>
      </View> */}
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
        data={LibraryDATA}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 140,
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
                    onPress={() => navigation.navigate(Routes.LibraryProduct)}>
                    {item.image}
                  </TouchableOpacity>
                  <TouchableOpacity style={style.btnLike}>
                    {item.iconLike}
                  </TouchableOpacity>
                </View>
                <View style={style.productItem}>
                  <Text style={style.productName}>{item.label}</Text>
                  <Text style={style.productTitle}>{item.title}</Text>
                  <Text style={style.productPrice}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Library;
