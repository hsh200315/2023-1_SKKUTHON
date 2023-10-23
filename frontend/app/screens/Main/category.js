import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MainLayout from '../MainLayout';
import Swiper from 'react-native-swiper';

const images = [
  {name: '한식', uri: require('../../assets/Korean.png')},
  {name: '양식', uri: require('../../assets/Western.png')},
  {name: '일식', uri: require('../../assets/Japanese.png')},
  {name: '중식', uri: require('../../assets/Chinese.png')},
  {name: '패스트푸드', uri: require('../../assets/FastFood.png')},
  {name: '카페', uri: require('../../assets/Cafe.png')},
  {name: '기타', uri: require('../../assets/Else.png')},
];

const BubbleText = ({children}) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.bubbleText}>원하는 음식의 종류를 골라주세요.</Text>
    </View>
  );
};

const Category = ({navigation}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const swiperRef = useRef(null);

  const onBack = () => {
    navigation.navigate('MainPage');
  };
  const onInfo = () => {
    navigation.navigate('myInfo');
  };

  const onSwiped = index => {
    setActiveImageIndex(index);
  };

  const handleClick = () => {
    if (activeImageIndex !== null) {
      const selectedFood = images[activeImageIndex].name;
      navigation.navigate('SelectOrderFromCategory', {food: selectedFood});
    }
  };

  return (
    <MainLayout onBack={onBack} onInfo={onInfo}>
      <BubbleText style={styles.bubbleText}></BubbleText>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={index => onSwiped(index)}
        ref={swiperRef}>
        {images.map((image, index) => (
          <View key={index} style={styles.photo}>
            <ImageBackground source={image.uri} style={styles.photo}>
              <Text style={styles.photoText}>{image.name}</Text>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnContent}>선택하기</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 30,
    paddingHorizontal: '5%',
    paddingVertical: '4%',
    maxWidth: '90%',
    width: '90%',
    marginTop: '10%',
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
  },
  container: {
    marginTop: '15%',
  },
  bubbleText: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  photoText: {
    fontSize: 96,
    color: '#FFF85B',
    textAlign: 'center',
  },
  activePhotoText: {
    fontSize: 96,
    color: '#FFA3E5',
    textAlign: 'center',
  },
  dot: {
    width: 40,
    height: 5,
    backgroundColor: 'gray',
  },
  activeDot: {
    width: 40,
    height: 5,
    backgroundColor: '#FFF85B',
  },
  btn: {
    width: '80%',
    height: '15%',
    backgroundColor: '#FFF85B',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 60,
  },
  btnContent: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Category;
