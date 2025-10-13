import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import CustomHeader from '../../../compoent/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageIndex from '../../../assets/imageIndex';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../../routes/screenName.enum';
 
const transactions = [
  { id: '1', type: 'Sent', hash: '0x88c77482e45FlF44d...F52C74426C631bDD52', amount: '0 ETH' },
  { id: '2', type: 'Sent', hash: '0x88c77482e45FlF44d...F52C74426C631bDD52', amount: '0 ETH' },
  { id: '3', type: 'Received', hash: '0xF36f148bD6FdEaCD 9D4074109E31110c', amount: '+0.001 ETH' },
  { id: '4', type: 'Received', hash: '0xF36f148bD6FdEaCD 9D4074109E31110c', amount: '+0.001 ETH' },
  { id: '5', type: 'Sent', hash: '0x88c77482e45FlF44d...F52C74426C631bDD52', amount: '0 ETH' },
  { id: '6', type: 'Received', hash: '0xF36f148bD6FdEaCD 9D4074109E31110c', amount: '+0.001 ETH' },
];

const SendMoney = () => {
  const renderTransaction = ({ item }) => (
    <View style={styles.transaction}>
      <Image source={imageIndex.Received} style={{
        height:50,
        width:50,
        resizeMode:"cover"
      }}/>
      {/* <Ionicons
        name={item.type === 'Sent' ? 'arrow-up-circle-outline' : 'arrow-down-circle-outline'}
        size={22}
        color="#4CAF50"
      /> */}
      <View style={styles.txInfo}>
        <Text style={styles.txType}>{item.type}</Text>
        <Text style={styles.txHash}>{item.hash}</Text>
      </View>
      <Text style={[styles.txAmount, { color: item.type === 'Received' ? '#4CAF50' : '#888' }]}>
        {item.amount}
      </Text>
    </View>
  );
const nav = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
                           <CustomHeader label="Send" />
 

      {/* ETH Info */}
      <View style={styles.ethSection}>
        <Image
          source={imageIndex.Matici}
          style={styles.ethIcon}
        />
        <Text style={styles.ethTitle}>ETH</Text>
        <Text style={styles.ethSubtitle}>Ethereum</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} 
        
        onPress={()=>nav.navigate(ScreenNameEnum.Sendcoin)}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        style={{
          marginHorizontal:15
        }}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        contentContainerStyle={styles.transactionList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  ethSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  ethIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  ethTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ethSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   },
  button: {
    backgroundColor: '#08D774',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
     alignItems: 'center',
    justifyContent:"center"
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  transactionList: {
    marginTop: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FDF8',
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
  },
  txInfo: {
    flex: 1,
    marginLeft: 10,
  },
  txType: {
    fontSize: 14,
    fontWeight: '600',
  },
  txHash: {
    fontSize: 11,
    color: '#9DB2BF',
  },
  txAmount: {
    fontSize: 13,
    color:"black"
   },
});

export default SendMoney;
