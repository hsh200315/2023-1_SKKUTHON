import {View, StyleSheet, Text, Image} from 'react-native';
import MainLayout from '../MainLayout';

const location = () => {
  return (
    <View style={styles.container}>
      <MainLayout>
        <View style={styles.contentBox}>
          <View style={styles.blockBox}></View>
          <View style={styles.messageBox}>
            <Text style={styles.messageContent}>위치 정보를</Text>
            <Text style={styles.messageContent}>허용해 주세요!</Text>
          </View>
          <Image
            source={require('../../assets/downArrow.png')}
            style={styles.myInfo}
          />
          <View style={styles.blockBox}></View>
          <View style={styles.blockBox}></View>
        </View>
      </MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentBox: {
    flex: 1,
    alignItems: 'center',
  },
  blockBox: {
    flex: 1,
  },
  messageBox: {
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'white',
    width: '70%',
    height: '20%',
    borderRadius: 15,
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: -30,
  },
  messageContent: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600',
  },
});

export default location;
