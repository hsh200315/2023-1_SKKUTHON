// ReInputMenu.js
import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MainLayout from '../MainLayout';
import {useRoute} from '@react-navigation/native';

const BubbleText = ({children}) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const UserText = ({children}) => {
  return (
    <View style={styles.UserBubble}>
      <Text style={styles.UserText}>{children}</Text>
    </View>
  );
};

const ReInputMenu = ({navigation}) => {
  const route = useRoute();
  const food = route.params.food;
  const onBack = () => {
    navigation.navigate('InputMenu');
  };
  const onInfo = () => {
    navigation.navigate('myInfo');
  };
  const handleBackPress = () => {
    navigation.navigate('InputMenu');
  };
  const handleNextPress = () => {
    navigation.navigate('SelectOrder', {food: food});
  };

  return (
    <MainLayout onBack={onBack} onInfo={onInfo}>
      <UserText style={styles.text}>{food}</UserText>
      <BubbleText style={styles.text}>해당 메뉴로 진행해드릴까요?</BubbleText>
      <View style={styles.container}>
        <View style={buttonStyles.buttonContainer}>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => handleBackPress()}>
            <Text style={buttonStyles.btnText}>X</Text>
          </TouchableOpacity>
          <Text style={buttonStyles.text}>다른 메뉴 선택</Text>
        </View>
        <View style={buttonStyles.buttonContainer}>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => handleNextPress()}>
            <Text style={buttonStyles.btnText}>O</Text>
          </TouchableOpacity>
          <Text style={buttonStyles.text}>해당 메뉴 선택</Text>
        </View>
      </View>
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
    marginTop: '10%',
    marginBottom: '-5%',
    marginLeft: '5%',
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
  UserBubble: {
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 30,
    paddingHorizontal: '20%',
    paddingVertical: '4%',
    maxWidth: '90%',
    marginTop: '10%',
    marginBottom: '-5%',
    marginRight: '5%',
    borderWidth: 3,
    borderColor: '#FFA3E5',
    alignSelf: 'flex-end',
  },
  container: {
    marginTop: '60%',
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  UserText: {
    fontSize: 30,
    color: '#FFA3E5',
  },
});
const buttonStyles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFF85B',
    borderRadius: 999,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFF85B',
  },
  text: {
    fontSize: 20,
    color: '#FFF85B',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ReInputMenu;
