import {TouchableOpacity} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

const yellowBigBtn = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnContent}>선택하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default yellowBigBtn;