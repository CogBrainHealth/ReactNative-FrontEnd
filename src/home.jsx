import React from 'react';
import colors from './assets/colors';
import { TouchableWithoutFeedback, Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Nav from './nav';

function Home({ navigation }) {
  //TODO: 이름 가져오기
  const name = "안성현";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView} edges={['top', 'left', 'right']}>
        <View style={styles.mainDiv}>
            <View style={styles.topDiv}>
                <View style={styles.home1Div}>
                    <View style={styles.profileDiv}>
                        <Image style={styles.profileImage} source={require('./assets/img/profileImage.png')}/>
                        <Text style={styles.profileText}>{name}</Text>
                    </View>
                    <View style={styles.welcomeDiv}>
                        <Text style={[styles.welcomText, styles.welcomeTextBold]}>{name.split('').slice(1).join('')}님,</Text>
                        <Text style={styles.welcomText}>안녕하세요!</Text>
                    </View>
                </View>
                <View style={styles.home2Div}>
                    <Image style={styles.home2Image} source={require('./assets/img/home1.png')}/>
                </View>
            </View>
            <View style={styles.bottomDiv}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('game')}>
                    <View style={styles.elementDiv}>
                        <View style={styles.elementHr}/>
                        <View style={styles.element}>
                            <Text style={styles.elementDescription}>오늘의 추천 게임은 무엇일까?</Text>
                            <View style={styles.elementGameDiv}>
                                <Text style={styles.elementGameTitle}>오늘의 뇌 훈련</Text>
                                <Image style={styles.elementGameImage} source={require('./assets/img/game1.png')}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('myScore')}>
                    <View style={styles.elementDiv}>
                        <View style={styles.elementHr}/>
                        <View style={styles.element}>
                            <Text style={styles.elementDescription}>나의 점수는?</Text>
                            <View style={styles.elementGameDiv}>
                                <Text style={styles.elementGameTitle}>내 점수 확인하기</Text>
                                <Image style={styles.elementGameImage} source={require('./assets/img/home2.png')}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('suggestionSupplement')}>
                    <View style={styles.elementDiv}>
                        <View style={styles.elementHr}/>
                        <View style={styles.element}>
                            <Text style={styles.elementDescription}>나에게 맞는 영양제는?</Text>
                            <View style={styles.elementGameDiv}>
                                <Text style={styles.elementGameTitle}>추천 영양제 확인하기</Text>
                                <Image style={styles.elementGameImage} source={require('./assets/img/home3.png')}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <Nav navigation={navigation} menu={0}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: colors.purple
    },
    mainDiv: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.purple,
        display: 'flex'
    },
    topDiv: {
        height: '24%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    home1Div: {
        height: '100%',
        width: '50%',
        display: 'flex'
    },
    profileDiv: {
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8
    },
    profileImage: {
        height: '100%',
        width: '20%',
        objectFit: 'contain'
    },
    profileText: {
        fontFamily: 'SpoqaHanSansNeo-Medium',
        fontSize: 20,
        color: colors.white
    },
    welcomeDiv: {
        height: '80%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
    },
    welcomText: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize: 26,
        color: colors.white
    },
    welcomeTextBold: {
        fontFamily: 'SpoqaHanSansNeo-Bold'
    },
    home2Div: {
        height: '100%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    home2Image: {
        height: '34%',
        width: '80%',
        objectFit: 'contain'
    },
    bottomDiv: {
        height: '76%',
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: 'flex',
    },
    elementDiv: {
        height: '30%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    elementHr: {
        height: 30,
        width: 4,
        backgroundColor: colors.purple,
        marginTop: 20,
        borderRadius: 6
    },
    element: {
        height: '100%',
        width: '100%',
        padding: 20,
        display: 'flex',
        gap: 4
    },
    elementDescription: {
        fontFamily: 'SpoqaHanSansNeo-Regular',
        fontSize: 18,
        color: colors.black
    },
    elementGameDiv: {
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    elementGameTitle: {
        height: '100%',
        width: '60%',
        fontFamily: 'SpoqaHanSansNeo-Medium',
        fontSize: 22,
    },
    elementGameImage: {
        height: '100%',
        width: '40%',
        objectFit: 'contain'
    }
});

export default Home;