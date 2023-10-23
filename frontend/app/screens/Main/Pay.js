// mainPage.js
import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MainLayout from '../MainLayout';

const BubbleText = ({children}) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const Category = ({children}) => {
  return (
    <TouchableOpacity>
      <Text style={buttonStyles.category}>{children}</Text>
    </TouchableOpacity>
  );
};
const InputMenu = ({children}) => {
  return (
    <TouchableOpacity>
      <Text style={buttonStyles.menu}>{children}</Text>
    </TouchableOpacity>
  );
};

const Pay = () => {
  // const handleMenuInputPress = () => {
  //   console.log("메뉴 입력 버튼 클릭됨");
  //   navigation.navigate('InputMenu');
  // };

  return (
    <MainLayout>
      <BubbleText style={styles.text}>
        원하시는 결제 방법을 선택해주세요.
      </BubbleText>
      <Image
        source={require('../../assets/volume_up.png')}
        style={styles.volume}
      />
      <View style={styles.container}>
        <Category>간편결제</Category>
        <TouchableOpacity>
          <Text style={buttonStyles.menu}>전화결제</Text>
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
    marginTop: '20%',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  volume: {
    marginTop: 10,
    marginLeft: 25,
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

export default Pay;
