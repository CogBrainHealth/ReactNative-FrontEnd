import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SkipModal from './skipModal'; 

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>메인 화면</Text>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.openButtonText}>모달 열기</Text>
      </TouchableOpacity>

      <SkipModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  openButton: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  openButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});