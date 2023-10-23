import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MainLayout from '../MainLayout';
import MyBtn from '../yellowBigBtn';
import {useState} from 'react';
import axios from 'axios';

const myInfo = ({navigation}) => {
  const [clicked, setClicked] = useState(0);
  const [name, setName] = useState('오이지');
  const [address, setAddress] = useState('경기도 수원시 장안구 천천동 584');
  const [data, setData] = useState({name: '', address: ''});
  const onBack = () => {
    navigation.navigate('MainPage');
  };
  const onSubmit = async () => {
    axios.post(
      'http://ec2-44-217-88-206.compute-1.amazonaws.com:3000/users/setting',
      {name: name, address: address},
    );
    navigation.navigate('MainPage');
  };

  const handleClickEvent = () => {
    setClicked(1);
  };

  return (
    <View style={styles.container}>
      <MainLayout onBack={onBack}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={handleClickEvent}>
            <Text style={styles.updateData}>내 정보 수정</Text>
          </TouchableOpacity>

          <View style={styles.nameBox}>
            <Text style={styles.dataTitle}>닉네임</Text>
            {clicked == 1 ? (
              <TextInput
                style={styles.table}
                onChangeText={text => setName(text)}></TextInput>
            ) : (
              <Text style={styles.dataContent}>{name}</Text>
            )}
          </View>
          <View style={styles.addressBox}>
            <Text style={styles.dataTitle}>상세주소</Text>
            {clicked == 1 ? (
              <TextInput
                style={styles.table}
                onChangeText={text => setAddress(text)}></TextInput>
            ) : (
              <Text style={styles.dataContent}>{address}</Text>
            )}
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
            <Text style={styles.btnContent}>저장하기</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
  },
  table: {
    width: '50%',
    height: '10%',
    backgroundColor: '#CECECE',
    color: 'black',
  },
  updateData: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    width: '45%',
    textAlign: 'center',
    marginTop: 20,
  },
  nameBox: {
    alignItems: 'center',
    width: '100%',
  },
  addressBox: {
    alignItems: 'center',
    width: '100%',
  },
  dataTitle: {
    color: '#FFA0DF',
    textDecorationLine: 'underline',
    fontSize: 48,
    width: '45%',
    textAlign: 'center',
  },
  dataContent: {
    fontSize: 40,
    color: 'white',
    fontWeight: '400',
    width: '90%',
    textAlign: 'center',
  },
  btn: {
    width: '80%',
    height: '15%',
    backgroundColor: '#FFF85B',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 60,
  },
  btnContent: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default myInfo;
