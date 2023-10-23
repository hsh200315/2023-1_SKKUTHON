import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MainLayout = ({ children, onBack, onInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../assets/leftArrow.png')}
            style={styles.leftArrow}
          />
        </TouchableOpacity>
        <Text style={styles.appName}>EZ</Text>
        <TouchableOpacity onPress={onInfo} >
          <Image source={require('../assets/myInfo.png')} style={styles.myInfo}/>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFA3E5',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftArrow: {
    width: 50,
    height: '70%',
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 3,
  },
  appName: {
    fontSize: 50,
    fontFamily: 'Campton-Bold',
    fontWeight: '800',
    color: 'black',
  },
  myInfo: {
    width: 50,
    height: '70%',
    resizeMode: 'contain',
    marginRight: 5,
    marginTop: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default MainLayout;
