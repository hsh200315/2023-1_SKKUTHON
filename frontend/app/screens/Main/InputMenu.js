import React, {useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import MainLayout from '../MainLayout';

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

const InputMenu = ({navigation}) => {
  const [inputMethod, setInputMethod] = useState(null);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  const onBack = () => {
    navigation.navigate('MainPage');
  };
  const onInfo = () => {
    navigation.navigate('myInfo');
  };
  const handleKeyboardPress = () => {
    if (inputMethod === 'keyboard') {
      navigation.navigate('ReInputMenu', {food: inputText});
    } else {
      setInputMethod('keyboard');
      inputRef.current.focus();
    }
  };
  const handleVoicePress = () => {
    setInputMethod('voice');
  };
  const handleSubmit = () => {
    if (inputMethod === 'keyboard') {
      navigation.navigate('ReInputMenu', {food: inputText});
    } else if (inputMethod === 'voice') {
      navigation.navigate('ReInputMenu', {food: inputText});
    }
  };

  return (
    <>
      <MainLayout onBack={onBack} onInfo={onInfo}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <BubbleText style={styles.text}>
            안녕하세요, 챗봇 EZ입니다. 원하시는 옵션을 선택해주세요.
          </BubbleText>
          <UserText style={styles.text}>메뉴입력</UserText>
          <BubbleText style={styles.text}>메뉴를 입력해주세요.</BubbleText>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="메뉴 입력란"
            value={inputText}
            onChangeText={text => setInputText(text)}
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={() => handleSubmit()}
          />
          <View style={styles.container}>
            <View style={buttonStyles.buttonContainer}>
              <TouchableOpacity
                style={buttonStyles.button}
                onPress={handleVoicePress}>
                <Image source={require('../../assets/mic_none.png')} />
              </TouchableOpacity>
              <Text style={buttonStyles.text}>음성</Text>
            </View>
            <View style={buttonStyles.buttonContainer}>
              <TouchableOpacity
                style={buttonStyles.button}
                onPress={handleKeyboardPress}>
                <Image source={require('../../assets/keyboard_alt.png')} />
              </TouchableOpacity>
              <Text style={buttonStyles.text}>키보드</Text>
            </View>
          </View>
        </ScrollView>
      </MainLayout>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
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
  input: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    borderRadius: 30,
    paddingHorizontal: '20%',
    paddingVertical: '4%',
    maxWidth: '90%',
    width: '90%',
    marginTop: '10%',
    marginBottom: '-5%',
    marginRight: '5%',
    borderWidth: 3,
    borderColor: '#FFA3E5',
    alignSelf: 'flex-end',
    fontSize: 30,
    color: '#FFA3E5',
  },
  container: {
    marginTop: '10%',
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
});

export default InputMenu;
