import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
 
 
import ModalWrapper from './ModalWrapper';
import TokenItem from './TokenItem';
import imageIndex from '../assets/imageIndex';

const tokens = [
   { icon: imageIndex.Btc, name: 'BTC', subName: 'Bitcoin', price: '23.00', change: '-1.14' },
  { icon: imageIndex.Matici, name: 'MATIC', subName: 'Polygon', price: '5,910', change: '-1.14' },
  { icon: imageIndex.Ethereum, name: 'ETH', subName: 'Ethereum', price: '23.00', change: '-1.14' },
 ];

const TokenSelectModal = ({ visible, onDismiss,onPress }) => {
  return (
    <ModalWrapper visible={visible} onDismiss={onDismiss}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Tokens</Text>
        <TouchableOpacity onPress={onDismiss}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {tokens.map((token, index) => (
          <TouchableOpacity onPress={onPress}>
          <TokenItem key={index} {...token} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
     fontSize: 14,
    color:"#9E9E9E"
  },
  closeButton: {
    fontSize: 22,
    color: 'red',
  },
});

export default TokenSelectModal;
