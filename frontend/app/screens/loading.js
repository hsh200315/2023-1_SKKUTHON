import {StyleSheet, View, Text, StatusBar} from 'react-native';
import React from 'react';

const main = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.textE}>E</Text>
            <Text style={styles.textZ}>Z</Text>
          </View>
          <Text style={styles.subTitle}>delivery</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3530',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    width: '100%',
  },
  title: {
    flexDirection: 'row',
  },
  textE: {
    fontSize: 240,
    fontFamily: 'Campton-Bold',
    fontWeight: '800',
    color: '#F6CECC',
  },
  textZ: {
    fontSize: 240,
    fontFamily: 'Campton-Bold',
    fontWeight: '800',
    color: '#F6ED5D',
  },
  subTitle: {
    fontSize: 80,
    color: '#FFFFFF',
    fontFamily: 'Campton-Bold',
    marginTop: -80,
  },
});

export default main;
