// SelectOrder.js
import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MainLayout from '../MainLayout';
import {useRoute} from '@react-navigation/native';

const std = ['랭킹', '리뷰', '배달팁', '별점'];

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
const OrderList1 = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button1}>
      <Image
        source={require('../../assets/thumb_up_alt.png')}
        style={buttonStyles.image}
      />
      <Text style={buttonStyles.button1Text}>{children}</Text>
    </TouchableOpacity>
  );
};
const OrderList2 = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button2}>
      <Image
        source={require('../../assets/article.png')}
        style={buttonStyles.image}
      />
      <Text style={buttonStyles.button2Text}>{children}</Text>
    </TouchableOpacity>
  );
};
const OrderList3 = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button1}>
      <Image
        source={require('../../assets/monetization_on.png')}
        style={buttonStyles.image}
      />
      <Text style={buttonStyles.button1Text}>{children}</Text>
    </TouchableOpacity>
  );
};
const OrderList4 = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button2}>
      <Image
        source={require('../../assets/star_half.png')}
        style={buttonStyles.image}
      />
      <Text style={buttonStyles.button2Text}>{children}</Text>
    </TouchableOpacity>
  );
};

const SelectOrder = ({route, navigation}) => {
  const {food} = route.params;

  const onBack = () => {
    navigation.navigate('ReInputMenu', {food: food});
  };
  const onInfo = () => {
    navigation.navigate('myInfo');
  };
  const handlePress = selectedStd => {
    navigation.navigate('ShowStore', {std: selectedStd, food: food});
  };

  return (
    <MainLayout onBack={onBack} onInfo={onInfo}>
      <UserText style={styles.text}>{food}</UserText>
      <BubbleText style={styles.text}>
        무엇을 기준으로 정렬해드릴까요?
      </BubbleText>
      <View style={styles.container}>
        <OrderList1 onPress={() => handlePress(std[0])}>{std[0]}</OrderList1>
        <OrderList2 onPress={() => handlePress(std[1])}>{std[1]}</OrderList2>
        <OrderList3 onPress={() => handlePress(std[2])}>{std[2]}</OrderList3>
        <OrderList4 onPress={() => handlePress(std[3])}>{std[3]}</OrderList4>
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
    marginTop: '15%',
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
  button1: {
    flexDirection: 'row',
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius: 70,
    paddingHorizontal: '20%',
    paddingVertical: '2%',
    maxWidth: '90%',
    width: '80%',
    marginTop: '1%',
    borderWidth: 5,
    borderColor: '#FFF85B',
    alignSelf: 'center',
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: '#FFF85B',
    borderRadius: 70,
    paddingHorizontal: '20%',
    paddingVertical: '1%',
    maxWidth: '90%',
    width: '80%',
    marginTop: '1%',
    borderWidth: 5,
    borderColor: '#FFF85B',
    alignSelf: 'center',
  },
  button1Text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF85B',
    textAlign: 'center',
  },
  button2Text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 45,
    height: 45,
    marginTop: 5,
    marginRight: 9,
  },
});

export default SelectOrder;
