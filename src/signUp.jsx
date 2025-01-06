import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text, TextInput, Pressable, Animated, Easing } from 'react-native';
import colors from './assets/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function SignUp({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [gender, changeGender] = React.useState(1);
  const [policy, changePolicy] = React.useState(false);
  const [birthDate, chagneBirthDate] = React.useState({
    year: 2000,
    month: 1,
    date: 1
  });
  const yValue = useRef(new Animated.Value(100)).current;
  const y = yValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  function startAnimation(){
    Animated.timing(yValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }
  function nextForm() {
    // navigation.navigate('adminScreen');
    startAnimation();
  };
  function signUp(){
    console.log("request signUp API")
  };

  useEffect(() => {
    setTimeout(() => {
      startAnimation();
    }, 3000)
  }, []); 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView} edges={['top', 'left', 'right']}>
        <TouchableWithoutFeedback onPress={nextForm}>
          <View style={styles.main}>
            <View style={styles.titleDiv}>
              <Image style={styles.titleImage} source={require('./assets/img/signUp1Title.png')} />
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.image} source={require('./assets/img/signUp1.png')}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[popUp.popUpDiv, { transform: [{ translateY: y }]}]}>
          <Image style={popUp.image} source={require('./assets/img/signUp6.png')}/>
          <View style={popUp.contentDiv}>
            <View style={popUp.contentTitleDiv}>
              <Text style={popUp.contentTitle}>개인 정보 입력</Text>
              <View style={popUp.contentHr} />
            </View>
            <View style={popUp.contentInputDiv}>
              <View style={popUp.contentInputSort}>
                <View>
                  <Text style={popUp.contentInputTitle}>이름</Text>
                  <TextInput style={popUp.contentInput} onChangeText={onChangeText} value={text} placeholder='이름을 입력해주세요.'/>
                </View>
                <View>
                  <Text style={popUp.contentInputTitle}>성별</Text>
                  <View style={popUp.contentGenderDiv}>
                    <TouchableWithoutFeedback onPress={() => changeGender(1)}>
                      <View style={gender === 1 ? [popUp.contentGender, popUp.selected] : [popUp.contentGender, popUp.contentGenderMale]}>
                        <Text style={gender === 1 ? [popUp.contentGenderText, popUp.selected] : popUp.contentGenderText}>남성</Text>
                      </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => changeGender(2)}>
                      <View style={gender === 2 ? [popUp.contentGender, popUp.selected] : popUp.contentGender}>
                        <Text style={gender === 2 ? [popUp.contentGenderText, popUp.selected] : popUp.contentGenderText}>여성</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
                <View>
                  <Text style={popUp.contentInputTitle}>생년월일</Text>
                  <View style={popUp.contentBirthDateDiv}>
                    <TextInput style={popUp.contentBirthDate} onChangeText={text => chagneBirthDate({year: text})} value={birthDate.year} placeholder='2000년' placeholderTextColor={colors.strongGray} maxLength={4} returnKeyType='done' keyboardType="number-pad" />
                    <TextInput style={popUp.contentBirthDate} onChangeText={text => chagneBirthDate({month: text})} value={birthDate.month} placeholder='1월' placeholderTextColor={colors.strongGray} maxLength={2} returnKeyType='done' keyboardType="number-pad" />
                    <TextInput style={popUp.contentBirthDate} onChangeText={text => chagneBirthDate({date: text})} value={birthDate.date} placeholder='1일' placeholderTextColor={colors.strongGray} maxLength={2} returnKeyType='done' keyboardType="number-pad" />
                  </View>
                </View>
                <BouncyCheckbox
                  size={25}
                  fillColor={colors.purple}
                  unFillColor={colors.white}
                  text="개인정보이용약관"
                  iconStyle={{ borderRadius: 6 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 6 }}
                  textStyle={{ fontFamily: "SpoqaHanSansNeo-Medium", textDecorationLine: 'none', fontSize: 18, color: colors.purple }}
                  onPress={(policy) => { changePolicy(policy) }}
                  textContainerStyle={{ marginLeft: 8 }}
                />
              </View>
              <Pressable onPress={signUp}>
                <View style={policy ? [popUp.buttonDiv, popUp.active] : popUp.buttonDiv}>
                  <Text style={popUp.buttonText}>회원가입</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const popUp = StyleSheet.create({
  popUpDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    height: '8%',
    objectFit: 'contain'
  },
  contentDiv: {
    height: '80%',
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: 'flex',
  },
  contentTitleDiv: {
    width: '100%',
    display: 'flex',
    padding: 20,
    gap: 10
  },
  contentTitle: {
    textAlign: 'center',
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 28,
    color: colors.black
  },
  contentHr: {
    height: 2,
    width: '100%',
    backgroundColor: colors.gray,
    opacity: 0.5,
    borderRadius: 1
  },
  contentInputDiv: {
    height: '80%',
    width: '100%',
    paddingHorizontal: 40,
    display: 'flex',
    justifyContent: 'space-between'
  },
  contentInputSort: {
    width: '100%',
    display: 'flex',
    gap: 20,
    color: colors.black,
  },
  contentInputTitle: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 22
  },
  contentInput: {
    height: 40,
    width: '100%',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 16,
    color: colors.strongGray,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
    padding: 12,
    marginTop: 2
  },
  contentGenderDiv: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: 2
  },
  contentGender: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5
  },
  contentGenderText: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 16,
    color: colors.strongGray
  },
  selected: {
    color: colors.white,
    backgroundColor: colors.purple,
    borderRadius: 50,
    opacity: 1
  },
  contentBirthDateDiv: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
    padding: 10,
    marginTop: 2
  },
  contentBirthDate: {
    height: '100%',
    width: '33%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  buttonDiv: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.gray,
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 24,
    color: colors.white
  },
  active: {
    backgroundColor: colors.purple,
    opacity: 1
  }
})

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.purple
  },
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.purple,
    display: 'flex',
    flexDirection: 'column'
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '50%',
    width: '100%'
  },
  titleImage: {
    height: '26%',
    width: '40%',
    marginBottom: 40
  },
  imageDiv: {
    height: '50%',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  }
});

export default SignUp;
