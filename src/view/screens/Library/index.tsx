import {
  StyleSheet,
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

const Library = () => {
  const Tab = createBottomTabNavigator();

  const [active, setActive] = useState(true);
  const [activeLike, setActiveLike] = useState(false);

  return (
    <View showsVerticalScrollIndicator={false} style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 15}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        //@ts-ignore
        onPressDetailsIcon={() => navigation.navigate('Details')}
        headingText={true}
        headingTitle="Библиотека"
        headingTextStyle={style.titleStyle}
      />
      <View style={style.myBooksBtn}>
        <TouchableOpacity style={style.btn}>
          <MyBookIcon size={65} />
          <Text style={style.myBooksText}>Мои книги</Text>
        </TouchableOpacity>
      </View>
      <View style={style.searchContainer}>
        <TextInput
          style={style.search}
          // onChangeText={onChangeNumber}
          // value={number}
          // inlineImageRight={SearchIcon}
          placeholder="Текст"
          placeholderTextColor={colors.black}
          keyboardType="default"
        />
        <TouchableOpacity>
          <SearchIcon size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={LibraryDATA}
        numColumns={2}
        renderItem={e => (
          <View style={style.productContainer}>
            {/* return ( */}
            <View style={style.Product}>
              <View style={style.productIconContainer}>
                {e.item.image}
                <TouchableOpacity style={style.btnLike}>
                  {e.item.iconLike}
                </TouchableOpacity>
              </View>
              <View style={style.productItem}>
                <Text style={style.productName}>{e.item.label}</Text>
                <Text style={style.productTitle}>{e.item.title}</Text>
                <Text style={style.productPrice}>{e.item.price}</Text>
              </View>
            </View>
            {/* ); */}
          </View>
        )}
        // extraData={selectedId}
        // keyExtractor={(item) => item.id}
      />
      <View style={{backgroundColor: '#fff', height: isIOS ? 100 : 75}}></View>
    </View>
  );
};

export default Library;
