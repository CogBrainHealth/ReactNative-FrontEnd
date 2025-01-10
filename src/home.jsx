import React from 'react';
import colors from './assets/colors';
import { Modal, Pressable, TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Home({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'left', 'right']}>
        <Text>HOME</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default Home;