import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text, TextInput, Pressable, Animated, Easing } from 'react-native';
import colors from './assets/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import dist from 'react-native-bouncy-checkbox';

function Suggestion({ navigation }) {
  const [text, changeText] = useState({
    text1: "맞춤형 영양제 추천을 위해서 건강 상태 체크리스트를 진행해보시겠어요?",
    text2: "건너뛰더라도 맞춤형 추천을 제외한 모든 영양제 열람이 가능해요."
  });
  function skipSuggestion(){
    //TODO: 추천 스킵 구현
    console.log('skip suggestion');
  }
  function suggestion(){
    changeText({
      text1: "영양제의 성분이 건강 상태에 따라 안 좋은 영향을 미칠 수 있어요.",
      text2: "건강 상태를 참고해서 영양제를 추천해 드릴 수 있게 건강 상태를 입력해 주시겠어요?"
    })
    console.log('suggestion');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={sug1.safeAreaView} edges={['top', 'left', 'right']}>
        <Image style={sug1.sugImage} source={require('./assets/img/suggestion1.png')}/>
        <View style={sug1.sugDiv}>
          <View style={sug1.sugTextDiv}>
            <Text style={sug1.sugText}><Text style={sug1.sugTextAccent}>*</Text>{text.text1}</Text>
            <Text style={sug1.sugText}>{text.text2}</Text>
          </View>
          <View style={sug1.sugButtonDiv}>
            <TouchableWithoutFeedback onPress={skipSuggestion}>
              <Text style={sug1.sugButtonTextJump}>건너뛰기</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={suggestion}>
              <View style={sug1.sugButton}>
                <Text style={sug1.sugButtonText}>맞춤형 추천 받기</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const sug1 = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.purple,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  sugImage: {
    height: '19%',
    width: '50%',
    objectFit: 'contain'
  },
  sugDiv: {
    height: '74%',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sugTextDiv: {
    width: '100%',
    display: 'flex',
    gap: 26
  },
  sugText: {
    width: '98%',
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 22,
    color: 'black',
    textAlign: 'left'
  },
  sugTextAccent: {
    color: colors.red
  },
  sugButtonDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 16
  },
  sugButtonText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 20,
    color: colors.white
  },
  sugButton: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sugButtonTextJump: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 16,
    color: colors.gray,
    textDecorationColor: colors.gray,
    textDecorationLine: 'underline'
  }
});

export default Suggestion;