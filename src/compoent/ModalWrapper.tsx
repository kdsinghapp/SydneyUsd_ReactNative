import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
 
const ModalWrapper = ({ visible, onDismiss, children }) => {
  return (
       <Modal visible={visible} onDismiss={onDismiss} transparent>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    maxHeight: '80%',
  },
});

export default ModalWrapper;
