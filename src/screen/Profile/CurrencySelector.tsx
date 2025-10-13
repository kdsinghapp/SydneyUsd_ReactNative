import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import imageIndex from '../../assets/imageIndex';
import SearchBar from '../../compoent/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
 
const currencies = [
  { id: '1', symbol: 'BTC', name: 'Native Evmos', icon: imageIndex.Btc },
  { id: '2', symbol: 'MATIC', name: 'Stargaze',icon: imageIndex.Matici},
  ];

export default function CurrencySelector() {
  const [selected, setSelected] = useState('ETH');
  const [search, setSearch] = useState('');

  const filteredCurrencies = currencies.filter(c =>
    c.symbol.toLowerCase().includes(search.toLowerCase()) ||
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.currencyItem} onPress={() => setSelected(item.symbol)}>
      <Image source={item.icon} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={[styles.radioOuter, selected === item.symbol && styles.radioSelected]}>
        {selected === item.symbol && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      
      <StatusBarComponent />
      <CustomHeader label="Select Currency" />

      {/* Search */}
      <View style={{
        paddingHorizontal: 16
      }}>
<SearchBar onSearchChange={setSearch}

  placeholder="Search for a currency..."
          value={search}
/>
</View>
      {/* Currency List */}
      <FlatList
        data={filteredCurrencies}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{
            paddingHorizontal: 16
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white',  },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 40, marginBottom: 20 },
  headerText: { fontSize: 18, fontWeight: '600', marginLeft: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: { flex: 1, fontSize: 16 },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  icon: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  symbol: { fontSize: 16, fontWeight: '600' },
  name: { fontSize: 13, color: '#9DB2BF' ,marginTop:2},
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#58cc6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#08D774',
  },
  radioSelected: { borderColor: '#08D774' },
});
