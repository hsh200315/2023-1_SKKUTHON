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
    width: '75%',
    height: '50%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderRadius: 60,
  },
  btnContent: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default yellowBigBtn;
