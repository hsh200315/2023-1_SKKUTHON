import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

const Item = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.messageContent}>
          원하는 음식의 종류를 골라주세요.
        </Text>
      </View>
      <ImageBackground
        source={require('../../assets/Cafe.png')}
        style={styles.photo}>
        <Text style={styles.photoText}>{name}</Text>
      </ImageBackground>
      <View style={styles.third}>
        <MyBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    alignItems: 'center',
    height: '90%',
    width: '100%',
  },
  messageBox: {
    flex: 2,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    width: '90%',
    height: '20%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    marginTop: 10,
    marginBottom: 30,
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
    color: 'white',
    fontSize: 96,
    color: '#FFF85B',
    marginRight: 40,
  },

  messageContent: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  third: {
    flex: 3,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
});

export default Item;
