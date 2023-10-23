// mainPage.js
import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MainLayout from '../MainLayout';

const marketBox = () => {
  // const handleMenuInputPress = () => {
  //   console.log("메뉴 입력 버튼 클릭됨");
  //   navigation.navigate('InputMenu');
  // };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.marketName}>윤실장초밥</Text>
        <Image
          source={require('../../assets/volume_up.png')}
          style={styles.volume}
        />
        <View style={styles.marketList}>
          <View style={styles.menu}>
            <Text style={styles.menuList}>특모둠 초밥</Text>
            <Text style={styles.menuprice}>15000원</Text>
          </View>
        </View>

        <View style={styles.price}>
          <Text style={styles.priceText}>총 33,000원</Text>
        </View>
        <TouchableOpacity>
          <Text style={buttonStyles.menu}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 30,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    maxWidth: '90%',
    marginTop: '25%',
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
  },
  container: {
    marginTop: '5%',
    alignItems: 'center',
  },
  marketName: {
    fontSize: 48,
    color: '#FFA0DF',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  volume: {
    marginTop: 10,
    marginBottom: 10,
  },
  marketList: {
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '80%',
    minHeight: '35%',
    maxHeight: '40%',
  },
  price: {
    backgroundColor: 'gray',
    width: '80%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 5,
  },
  priceText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 48,
  },
  menu: {
    width: '80%',
    height: '30%',
    marginLeft: 20,
    marginTop: 20,
  },
  menuList: {
    fontSize: 48,
    color: 'black',
  },
  menuprice: {
    fontSize: 48,
    fontWeight: '600',
    color: 'black',
  },
});
const buttonStyles = StyleSheet.create({
  category: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 70,
    paddingHorizontal: '25%',
    paddingVertical: '8%',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '90%',
    marginTop: '3%',
    borderWidth: 5,
    borderColor: '#FFF85B',
    alignSelf: 'center',
    fontSize: 40,
    color: '#FFF85B',
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#FFF85B',
    borderRadius: 70,
    paddingHorizontal: '25%',
    paddingVertical: '8%',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '90%',
    marginTop: '3%',
    borderWidth: 5,
    borderColor: '#FFF85B',
    alignSelf: 'center',
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default marketBox;
