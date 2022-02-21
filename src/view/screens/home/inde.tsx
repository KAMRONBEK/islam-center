import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {HeaderApp} from '../../components/Other/AppBar';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes/routes';
import Card from '../../components/Card/card';
import {isIOS, windowHeight} from '../../constants/size';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {CoruselArrowLeft, CoruselArrowRight} from '../../assets/icons/icon';
import {CardDATA} from '../../components/Card/data';

const Home = () => {
  const shop = ['Hello', 'thistle', 'skyblue', 'teal'];
  const news = ['NEWS', 'thistle', 'skyblue', 'teal'];
  const [index, setIndex] = useState(0);

  let navigation = useNavigation();

  return (
    <ScrollView style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 15}}></View>
      <HeaderApp
         containerStyle={style.containerStyle}
         logoIcon={true}
         notificatAndDetailsIcons={true}
         notificationIcon={true}
         notificationColor={colors.black}
         detailsIcon={true}
         detailsColor={colors.black}
         //@ts-ignore
         onPressDetailsIcon={() => navigation.navigate('Details')}
         headingText={true}
         headingTitle="Главная"
         headingTextStyle={style.titleStyle}
      />
      <View style={style.bookShopCorusel}>
        <SwiperFlatList
          autoplay={false}
          autoplayDelay={2}
          autoplayLoop={false}
          // index={1}
          value={index}
          onChangeIndex={setIndex}
          showPagination
          data={shop}
          style={{
            borderRadius: 5,
          }}
          renderItem={({item}) => (
            <View style={[style.childSlide, {backgroundColor: item}]}>
              <Text style={style.textSlide}>{item}</Text>
            </View>
          )}
        />
        <View style={style.bookShopCoruselBtn}>
          <TouchableOpacity style={style.left}>
            <CoruselArrowLeft size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={style.right}>
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
          autoplay={false}
          autoplayDelay={2}
          autoplayLoop={false}
          // index={1}
          value={index}
          onChangeIndex={setIndex}
          showPagination
          data={news}
          style={{
            borderRadius: 5,
          }}
          renderItem={({item}) => (
            <View style={[style.childSlide, {backgroundColor: item}]}>
              <Text style={style.textSlide}>{item}</Text>
            </View>
          )}
        />
        <View style={style.newsCoruselBtn}>
          <TouchableOpacity style={style.left}>
            <CoruselArrowLeft size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={style.right}>
            <CoruselArrowRight size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
