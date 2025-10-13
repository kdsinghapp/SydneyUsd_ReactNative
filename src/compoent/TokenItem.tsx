import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TokenItem = ({ icon, name, subName, price, change }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subName}>{subName}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.change}>{change}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 12,
    resizeMode:"contain"
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
    color:"black"
  },
  subName: {
    fontSize: 12,
    color: '#9DB2BF', // Tailwind gray-400
    marginTop:3
  },
  right: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: '500',
    fontSize: 14,
    color:"#000000"
  },
  change: {
    color: 'red',
    fontSize: 12,
    marginTop:2
  },
});

export default TokenItem;
