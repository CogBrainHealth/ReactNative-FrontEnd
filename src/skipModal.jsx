import React from 'react';
import colors from './assets/colors';
import { Modal, Pressable, TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';


function MyModal({ navigation, visible, onClose }) {
  function next(){
    onClose(false);
    navigation.navigate('home');
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={() => {}}>
          <Text style={styles.title}>응답을 건너뛰시겠어요?</Text>
          <Text style={styles.content}>
            [설정] 화면에서 다시 응답할 수 있어요.
          </Text>
          <View style={styles.buttonDiv}>
            <TouchableWithoutFeedback onPress={onClose}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>아니요</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={next}>
              <View style={[styles.button, styles.active]}>
                <Text style={[styles.buttonText, styles.active]}>네</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    gap: 16
  },
  title: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 22,
    textAlign: 'center'
  },
  content: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: colors.gray,
    fontSize: 16,
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#FF6666',
    paddingVertical: 12,
    borderRadius: 8
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 40,
    width: '40%',
    backgroundColor: colors.lightGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  active: {
    backgroundColor: colors.purple,
    color: colors.white,
    opacity: 1
  },
  buttonText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 18,
    color: colors.black,
    opacity: 0.5
  }
});

export default MyModal;