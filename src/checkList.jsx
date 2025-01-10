import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text, Animated, Easing } from 'react-native';
import colors from './assets/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SkipModal from './skipModal'; 

function CheckList({ navigation }) {
  const [progress, changeProgress] = useState(0);
  const [checkListTitle, changeCheckListTitle] = useState("해당하는 사항이 있나요?");
  const [checkList, changeCheckList] = useState([[
    [{
      text: "수유 중",
      isCheck: false
    }], [{
      text: "임신 중",
      isCheck: false
    }], [{
      text: "폐경",
      isCheck: false
    }], [{
      text: "자녀 계획이 있어요",
      isCheck: false
    }],
  ], [
    [{
      text: "원인 알 수 없음",
      isCheck: false
    }], [{
      text: "땅콩",
      isCheck: false
    }], [{
      text: "갑각류",
      isCheck: false
    }], [{
      text: "에스트로겐 민감",
      isCheck: false
    }], [{
      text: "옻",
      isCheck: false
    }], [{
      text: "소맥/보리",
      isCheck: false
    }], [{
      text: "카페인 민감",
      isCheck: false
    }], [{
      text: "특정 알러지",
      isCheck: false
    }], [{
      text: "대두",
      isCheck: false
    }], [{
      text: "호박씨",
      isCheck: false
    }], [{
      text: "유제품/유당불내증",
      isCheck: false
    }], [{
      text: "무화과",
      isCheck: false
    }], [{
      text: "호프추출물",
      isCheck: false
    }], [{
      text: "사상자",
      isCheck: false
    }], [{
      text: "산수유",
      isCheck: false
    }], [{
      text: "달맞이꽃종자유",
      isCheck: false
    }], [{
      text: "밀",
      isCheck: false
    }], [{
      text: "난황/계란",
      isCheck: false
    }], [{
      text: "프로폴리스",
      isCheck: false
    }], [{
      text: "홍삼",
      isCheck: false
    }], [{
      text: "국화과/쑥갓/카모마일/해바라기씨",
      isCheck: false
    }],    
  ], [
    [{
      text: "고칼슘혈증",
      isCheck: false
    }], [{
      text: "고혈압",
      isCheck: false
    }], [{
      text: "갑상선",
      isCheck: false
    }], [{
      text: "골다공증",
      isCheck: false
    }], [{
      text: "담낭",
      isCheck: false
    }], [{
      text: "뼈/관절",
      isCheck: false
    }], [{
      text: "알레르기",
      isCheck: false
    }], [{
      text: "신장",
      isCheck: false
    }], [{
      text: "당뇨",
      isCheck: false
    }], [{
      text: "저혈압",
      isCheck: false
    }], [{
      text: "혈관/이상지질혈증",
      isCheck: false
    }], [{
      text: "질환/비염/결막염",
      isCheck: false
    }], [{
      text: "각종 암",
      isCheck: false
    }], [{
      text: "천식",
      isCheck: false
    }], [{
      text: "혈액응고관련 질환",
      isCheck: false
    }], [{
      text: "위장",
      isCheck: false
    }], [{
      text: "피부 광과민성",
      isCheck: false
    }], [{
      text: "수술 전후",
      isCheck: false
    }], [{
      text: "심장질환/심근경색/스텐트 시술",
      isCheck: false
    }], 
  ], [
    [{
      text: "고지혈증",
      isCheck: false
    }], [{
      text: "고혈압약",
      isCheck: false
    }], [{
      text: "호르몬제",
      isCheck: false
    }], [{
      text: "면역억제제",
      isCheck: false
    }], [{
      text: "부정맥 치료제",
      isCheck: false
    }], [{
      text: "신경안정제",
      isCheck: false
    }], [{
      text: "위산분비억제제",
      isCheck: false
    }], [{
      text: "비스테로이드성 항염증제",
      isCheck: false
    }], [{
      text: "항혈전제",
      isCheck: false
    }], [{
      text: "중추신경억제제",
      isCheck: false
    }], [{
      text: "항우울증약",
      isCheck: false
    }], [{
      text: "항응고증약",
      isCheck: false
    }], [{
      text: "항혈소판제",
      isCheck: false
    }], [{
      text: "당뇨약",
      isCheck: false
    }], [{
      text: "수면유도제",
      isCheck: false
    }], [{
      text: "혈전용해제",
      isCheck: false
    }], [{
      text: "신장에 영향을 미치는 약품",
      isCheck: false
    }]
  ], [
    [{
      text: "잠들기 어렵거나 자주 깸",
      isCheck: false
    }], [{
      text: "스트레스",
      isCheck: false
    }], [{
      text: "기억력 감퇴",
      isCheck: false
    }], [{
      text: "예민",
      isCheck: false
    }], [{
      text: "우울",
      isCheck: false
    }], 
  ]]);
  const [modalVisible, setModalVisible] = useState(false);
  //TODO: 이름 가져오기
  const name = "성현";
  const yValue = useRef(new Animated.Value(100)).current;
  const y = yValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  function pressCheckList(progress, index){
    let copiedArray = [...checkList];
    let content = [...checkList[progress][index]];
    content[0].isCheck = !content[0].isCheck;
    copiedArray[progress][index] = content;
    changeCheckList(copiedArray);
  }
  function next(){
    switch(progress){
      case 0:
        changeCheckListTitle("알러지가 있으신가요?");
        break;
      case 1:
        changeCheckListTitle("기저질환이 있으신가요?");
        break;
      case 2:
        changeCheckListTitle("복용 중인 약기 있으신가요?");
        break;
      case 3:
        changeCheckListTitle("건강 문제로 일상에 불편함이 있으신가요?");
        break;
      case 4:
        //TODO: 서버로 checkList 데이터 전송
        Animated.timing(yValue, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: false
        }).start();
        return;
    }
    changeProgress(progress+1);
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={cL1.safeAreaView} edges={['top', 'left', 'right']}>
        <View style={cL1.mainDiv}>
          <View style={cL1.checkListDiv}>
            <Text style={cL1.checkListTitle}>건강 상태 체크리스트</Text>
            <View style={cL1.checkList}>
              {/* //TODO: 진행 애니메이션 추가 */}
              <View style={progress === 0 ? [cL1.checkListBar, cL1.active] : cL1.checkListBar}/>
              <View style={progress === 1 ? [cL1.checkListBar, cL1.active] : cL1.checkListBar}/>
              <View style={progress === 2 ? [cL1.checkListBar, cL1.active] : cL1.checkListBar}/>
              <View style={progress === 3 ? [cL1.checkListBar, cL1.active] : cL1.checkListBar}/>
              <View style={progress === 4 ? [cL1.checkListBar, cL1.active] : cL1.checkListBar}/>
            </View>
          </View>
          <View style={cL1.checkListMainDiv}>
            <View style={cL1.checkListProgressTextDiv}>
              <Text style={cL1.checkListProgressText}>{progress+1}</Text>
            </View>
            <Text style={cL1.checkListContentText}>{checkListTitle}</Text>
            <View style={cL1.checkListContentDiv}>
              {
                checkList[progress].map((data, index) => {
                  return(
                    <TouchableWithoutFeedback key={index} onPress={() => pressCheckList(progress, index)}>
                      <View style={data[0].isCheck ? [cL1.checkListContent, cL1.active] : cL1.checkListContent}>
                        <Text style={data[0].isCheck ? [cL1.checkListContentText2, cL1.active] : cL1.checkListContentText2}>{data[0].text}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )
                })
              }
            </View>
          </View>
          <View style={cL1.checkListButtonDiv}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
              <Text style={cL1.sugButtonTextJump}>건너뛰기</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={next}>
              <View style={cL1.sugButton}>
                <Text style={cL1.sugButtonText}>다음</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Animated.View style={[cLResult.mainView, { transform: [{ translateY: y }]}]}>
          <Text style={cL1.checkListTitle}>건강 상태 체크리스트</Text>
          <View style={cLResult.checkListResultDiv}>
            <View style={cLResult.checkListTextDiv}>
              <Text style={cLResult.checkLIstResultText}>
                <Text style={cLResult.checkLIstResultTextBold}>{name}님</Text>의 <Text style={cLResult.checkLIstResultTextBold}>건강 상태</Text>
              </Text>
              <View style={cLResult.checkListResultHr}/>
              <Text style={cLResult.checkLIstResultText}>체크가 완료되었어요!</Text>
            </View>
            <Image style={cLResult.checkListImage} source={require('./assets/img/checkListResult.png')}/>
          </View>
          <View style={cL1.checkListButtonDiv}>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('home')}}>
              <Text style={cL1.sugButtonTextJump}>홈으로 가기</Text>
            </TouchableWithoutFeedback>
            {/* //TODO: 맞춤형 추천 페이지 개발시 추가 */}
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('')}}>
              <View style={cL1.sugButton}>
                <Text style={cL1.sugButtonText}>맞춤형 추천 받기</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>
        <SkipModal navigation={navigation} visible={modalVisible} onClose={() => setModalVisible(false)}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const cL1 = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 40
  }, 
  mainDiv: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  checkListDiv: {
    // height: 50,
    width: '100%',
    // backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  checkListTitle: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 18,
    color: colors.strongGray
  },
  checkList: {
    height: 6,
    width: '100%',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkListBar: {
    height: '100%',
    width: '18%',
    backgroundColor: colors.lightGray,
    borderRadius: 50
  },
  active: {
    backgroundColor: colors.purple,
    color: colors.white
  },
  checkListMainDiv:{
    width: '100%',
    // backgroundColor: 'red',
    display: 'flex',
    gap: 6,
    marginTop: 40
  },
  checkListProgressTextDiv: {
    height: 22,
    width: 22,
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkListProgressText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: colors.purple,
    fontSize: 16
  },
  checkListContentText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 22,
    color: colors.black
  },
  checkListContentDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6
  },
  checkListContent: {
    // height: 36,
    width: 'auto',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkListContentText2: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 18,
    color: colors.black
  },
  checkListButtonDiv: {
    marginTop: 'auto',
    marginBottom: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  sugButtonTextJump: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 18,
    color: colors.gray,
    textDecorationColor: colors.gray,
    textDecorationLine: 'underline'
  },
  sugButtonText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 22,
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
});

const cLResult = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center'
  }, 
  checkListResultDiv: {
    height: '50%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '40%'
  },
  checkListTextDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  checkLIstResultText: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    fontSize: 26,
    color: colors.black
  },
  checkLIstResultTextBold: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  checkListResultHr: {
    height: 4,
    width: '80%',
    backgroundColor: colors.yellow,
    borderRadius: 50,
    marginBottom: 10
  },
  checkListImage:{
    height: '80%',
    width: '100%',
    objectFit: 'contain'
  }
})

export default CheckList;