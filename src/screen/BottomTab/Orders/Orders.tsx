import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import SearchBar from '../../../compoent/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';

const coins = [
   { id: '1', name: 'BTC', fullName: 'Bitcoin', icon:imageIndex.Btc },
  { id: '2', name: 'ETH', fullName: 'Ethereum', icon:imageIndex.Ethereum },
 ];

export default function TradeScreen() {
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [search, setSearch] = useState('');

  const filteredCoins = coins.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <StatusBarComponent/>
      <View style={{
        marginHorizontal:18
      }}>
      <Text style={styles.title}>Trade</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        {['Buy', 'Sell'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.toggleButton,
              selectedTab === tab && styles.activeTab
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.toggleText,
                selectedTab === tab && styles.activeText
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

     <SearchBar/>

       <FlatList

        data={filteredCoins}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.coinRow}>
            <View style={styles.coinInfo}>

              <Image source={item.icon} style={styles.coinIcon} />
              <View>
                <Text style={styles.coinName}>{item.name}</Text>
                <Text style={styles.coinFullName}>{item.fullName}</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.coinAmount}>0</Text>
              <Text style={styles.coinValue}>$0.00</Text>
            </View>
          </View>
        )}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:12,
    color:"black"
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,
    height:55 ,
    justifyContent:"center",
        alignItems:"center",
 borderWidth:0.8,
 borderColor:"#9DB2CE",
 
   },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#08D774',
      height:50 ,
    justifyContent:"center",
    alignItems:"center"
  },
  toggleText: {
    fontSize: 16,
    color: '#08D774',
    fontWeight:"600"
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  coinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  coinName: {
    fontSize: 16,
    fontWeight: '500',
  },
  coinFullName: {
    color: '#777',
    fontSize: 13,
  },
  coinAmount: {
    fontSize: 15,
    fontWeight: '500',
  },
  coinValue: {
    color: '#999',
    fontSize: 13,
  },
});
