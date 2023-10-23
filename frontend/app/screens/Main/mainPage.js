// mainPage.js
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MainLayout from '../MainLayout';

const BubbleText = ({ children }) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const MainPage = ({ navigation }) => {
  const onInfo = () => {
    navigation.navigate('myInfo');
  };
  const handleCategoryPress = () => {
    navigation.navigate('Category');
  };
  const handleMenuInputPress = () => {
    navigation.navigate('InputMenu');
  };

  return (
    <MainLayout onInfo={onInfo} >
      <BubbleText style={styles.text}>안녕하세요, 챗봇 EZ입니다. 원하시는 옵션을 선택해주세요.</BubbleText>
      <View style={styles.container} >
      <TouchableOpacity style={buttonStyles.category} onPress={() => handleCategoryPress()}>
            <Image
              source={require('../../assets/category.png')}
              style={buttonStyles.image}
            />
          <Text style={buttonStyles.categoryText}>카테고리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles.menu} onPress={() => handleMenuInputPress()}>
            <Image
              source={require('../../assets/input.png')}
              style={buttonStyles.image}
            />
          <Text style={buttonStyles.menuText}>메뉴입력</Text>
        </TouchableOpacity>
      </View>
      
    </MainLayout>
  );
}

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
  },
});
const buttonStyles = StyleSheet.create({
  category: {
    flexDirection: 'row',
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
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginRight: 7,
  },
  categoryText: {
    fontSize: 40,
    color: '#FFF85B',
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
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
    alignItems: 'center',
  },
  menuText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default MainPage;
