import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import MainLayout from '../MainLayout';
import Swiper from 'react-native-swiper';
import MyBtn from '../../screens/yellowBigBtn';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import Loading from '../loading';
import {useEffect, useState} from 'react';

const images = [
  {uri: 'https://example.com/image1.jpg'},
  {uri: 'https://example.com/image2.jpg'},
  {uri: 'https://example.com/image3.jpg'},
  {uri: 'https://example.com/image4.jpg'},
  {uri: 'https://example.com/image5.jpg'},
  {uri: 'https://example.com/image6.jpg'},
  {uri: 'https://example.com/image7.jpg'},
  {uri: 'https://example.com/image8.jpg'},
  {uri: 'https://example.com/image9.jpg'},
  {uri: 'https://example.com/image10.jpg'},
];

const UserText = ({children}) => {
  return (
    <View style={styles.UserBubble}>
      <Text style={styles.UserText}>{children}</Text>
    </View>
  );
};

const ShowStore = ({navigation}) => {
  const route = useRoute();
  const std = route.params.std;
  const food = route.params.food;

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getData = async () => {
    setLoading(true);
    if (std == '랭킹') {
      axios
        .get(
          `http://ec2-44-217-88-206.compute-1.amazonaws.com:3000/menus/menu/${food}/score`,
        )
        .then(function (response) {
          setList(response.data);
        });
    } else if (std == '리뷰') {
      axios
        .get(
          `http://ec2-44-217-88-206.compute-1.amazonaws.com:3000/menus/menu/${food}/review_count`,
        )
        .then(function (response) {
          setList(response.data);
        });
    } else if (std == '배달팁') {
      axios
        .get(
          `http://ec2-44-217-88-206.compute-1.amazonaws.com:3000/menus/menu/${food}/tip`,
        )
        .then(function (response) {
          setList(response.data);
        });
    } else {
      axios
        .get(
          `http://ec2-44-217-88-206.compute-1.amazonaws.com:3000/menus/menu/${food}/review_count`,
        )
        .then(function (response) {
          setList(response.data);
        });
    }
    setTimeout(() => setLoading(false), 3000);
  };

  useEffect(async () => {
    getData();
  }, []);

  const onBack = () => {
    navigation.navigate('SelectOrder', {food: food});
  };
  const onInfo = () => {
    navigation.navigate('myInfo');
  };

  return (
    <>
      <View>{loading ? <Loading /> : null}</View>
      <MainLayout onBack={onBack} onInfo={onInfo}>
        <UserText style={styles.UserText}>{std}</UserText>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          {list &&
            list.map((store, index) => (
              <View key={index} style={styles.photo}>
                <Text style={styles.photoText}>{store.name}</Text>
                {/* <ImageBackground source={image} style={styles.photo}>
          <Text style={styles.photoText}>{index}</Text>
        </ImageBackground> */}
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={styles.photoText}>{store.score}</Text>
                  <Text style={styles.photoText}>{store.menu_name}</Text>
                </View>

                <Text style={styles.photoText}>{store.menu_price}</Text>
              </View>
            ))}
        </Swiper>
        <MyBtn />
      </MainLayout>
    </>
  );
};

const styles = StyleSheet.create({
  UserBubble: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 30,
    paddingHorizontal: '20%',
    paddingVertical: '4%',
    maxWidth: '90%',
    width: '90%',
    marginTop: '10%',
    borderWidth: 3,
    borderColor: '#FFA3E5',
    alignSelf: 'center',
  },
  container: {
    marginTop: '15%',
  },
  UserText: {
    fontSize: 35,
    color: '#FFA3E5',
    textAlign: 'center',
  },
  photo: {
    flex: 4,
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -30,
  },
  photoText: {
    fontSize: 40,
    color: '#FFF85B',
    textAlign: 'center',
  },
  dot: {
    width: 30,
    height: 5,
    backgroundColor: 'gray',
  },
  activeDot: {
    width: 30,
    height: 5,
    backgroundColor: '#FFF85B',
  },
});

export default ShowStore;
