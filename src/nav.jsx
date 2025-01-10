import React from 'react';
import colors from './assets/colors';
import { TouchableWithoutFeedback, Text, StyleSheet, View, Image } from 'react-native';

function Nav({ navigation, menu }) {
  return (
    <View style={styles.navDiv}>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('home') }}>
            <View style={styles.nav}>
                <Image style={styles.navImage} source={menu === 0 ? require('./assets/img/nav1Active.png') : require('./assets/img/nav1.png')}/>
                <Text style={menu === 0 ? [styles.navTitle, styles.active] : styles.navTitle}>홈</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('training') }}>
            <View style={styles.nav}>
                {/* //TODO: 훈련 활성화 아이콘 적용 필요 */}
                <Image style={styles.navImage} source={menu === 1 ? require('./assets/img/nav2.png') : require('./assets/img/nav2.png')}/>
                <Text style={menu === 1 ? [styles.navTitle, styles.active] : styles.navTitle}>훈련</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('statistic') }}>
            <View style={styles.nav}>
                <Image style={styles.navImage} source={menu === 2 ? require('./assets/img/nav3Active.png') : require('./assets/img/nav3.png')}/>
                <Text style={menu === 2 ? [styles.navTitle, styles.active] : styles.navTitle}>통계</Text>
            </View>            
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('infomation') }}>
            <View style={styles.nav}>
                <Image style={styles.navImage} source={menu === 3 ? require('./assets/img/nav4Active.png') : require('./assets/img/nav4.png')}/>
                <Text style={menu === 3 ? [styles.navTitle, styles.active] : styles.navTitle}>정보</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
    navDiv: {
        height: 80,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingHorizontal: 20
    },
    nav: {
        height: '100%',
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    navImage: {
        height: '40%',
        objectFit: 'contain'
    },
    navTitle: {
        fontFamily: 'SpoqaHanSansNeo-Medium',
        color: colors.black,
        opacity: 0.4,
        fontSize: 16
    },
    active: {
        color: colors.purple,
        opacity: 1
    }
});

export default Nav;