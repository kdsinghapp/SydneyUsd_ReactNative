// WalletScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../compoent/CustomHeader';
 

const SawapSen = () => {
  const actions = [
    { id: '1',  label: 'Send', icon:imageIndex.Polygon},
    { id: '2', label: 'Received', icon: imageIndex.Received },
    { id: '3' , screen:ScreenNameEnum.Buy, label: 'Buy', icon: imageIndex.Buy },
    { id: '4', label: 'Sell', icon: imageIndex.Sell },
    { id: '5', screen:ScreenNameEnum.SwapScreen,  label: 'Swap', icon: imageIndex.Swap },
  ];

  const tokens = [
    { id: '1', name: 'BTC', sub: 'Bitcoin', price: '$ 23.00', change: '-1.14%', color: '#F7931A', icon: imageIndex.Btc },
    { id: '2', name: 'MATIC', sub: 'Polygon', price: '$ 05,910', change: '-1.14%', color: '#8247E5', icon: imageIndex.Matici},
    { id: '3', name: 'ETH', sub: 'Ethereum', price: '$ 23.00', change: '-1.14%', color: '#627EEA', icon: imageIndex.Ethereum},
    { id: '4', name: 'BNB', sub: 'BNB', price: '$ 23.00', change: '-1.14%', color: '#F0B90B', icon: imageIndex.Bnb },
  ];
  const navgation = useNavigation()
 
   const renderToken = ({ item }: any) => (
    <TouchableOpacity style={styles.tokenRow}
     onPress={()=>{
      navgation.navigate(ScreenNameEnum.SendMoney)
    }}
    >
      <View style={styles.tokenLeft}>
        <View style={[styles.tokenIcon, { backgroundColor: item.color + '40' }]}>
          <Image source={item.icon} style={{ width: 44, height: 44 }} resizeMode="contain" />
        </View>
        <View>
          <Text style={styles.tokenName}>{item.name}</Text>
          <Text style={styles.tokenSub}>{item.sub}</Text>
        </View>
      </View>
      <View style={styles.tokenRight}>
        <Text style={styles.tokenPrice}>{item.price}</Text>
        <Text style={styles.tokenChange}>{item.change}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
     <StatusBarComponent />
      <CustomHeader label="Swap" />
      {/* Balance */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
justifyContent:"center"

        }}>
        <Text style={styles.balanceAmount}>$ 150.00</Text>
        <Image source={imageIndex.vivies} style={{
       width: 14,
    height: 14,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
        }}/>
        </View>
      </View>

      {/* Action Buttons */}
     
<View style={{flexDirection:"row",          marginHorizontal:15
,justifyContent:"space-between",alignItems:"center"}}>
       <Text style={styles.sectionTitle}>Popular tokens</Text>
 
       </View>
      <FlatList
        data={tokens}
        showsVerticalScrollIndicator={false}
        renderItem={renderToken}
        keyExtractor={(item) => item.id}
        style={{
          marginTop:11,
          marginHorizontal:15
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
};

export default SawapSen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },
  userName: {
    fontSize: 12,
    color: '#A0A0A0',
    marginTop:3
   },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    position: 'relative',
  },
  badge: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    position: 'absolute',
    right: 2,
    top: 2,
  },
  balanceSection: {
    alignItems: 'center',
    marginVertical: 25,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'black',
    marginTop:5
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginTop:8
   },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  actionItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  actionCircle: {
    width: 55,
    height: 60,
      justifyContent: 'center',
    alignItems: 'center',
   },
  actionText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginTop:15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9E9E9E',
    marginTop: 20,
    marginBottom: 10,
  },
  tokenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  tokenLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenIcon: {
 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tokenName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  tokenSub: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  tokenRight: {
    alignItems: 'flex-end',
  },
  tokenPrice: {
    fontSize: 14,
    fontWeight: '500',
  },
  tokenChange: {
    fontSize: 12,
    color: 'red',
  },
});
