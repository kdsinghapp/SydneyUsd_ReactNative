// WalletScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { Fetch_CointAPI } from '../../../Api/apiRequest';


const Dashboard = () => {
  const actions = [
    { id: '1', label: 'Send', screen: ScreenNameEnum.SendMoney, icon: imageIndex.Polygon },
    { id: '2', label: 'Received', screen: ScreenNameEnum.Buy, icon: imageIndex.Received },
    { id: '3', screen: ScreenNameEnum.Buy, label: 'Buy', icon: imageIndex.Buy },
    { id: '4', label: 'Sell', screen: ScreenNameEnum.Buy, icon: imageIndex.Sell },
    { id: '5', screen: ScreenNameEnum.SwapScreen, label: 'Swap', icon: imageIndex.Swap },
  ];

  const tokens = [
    { id: '1', name: 'BTC', sub: 'Bitcoin', price: '$ 23.00', change: '-1.14%', color: '#F7931A', icon: imageIndex.Btc },
    { id: '2', name: 'MATIC', sub: 'Polygon', price: '$ 05,910', change: '-1.14%', color: '#8247E5', icon: imageIndex.Matici },
    { id: '3', name: 'ETH', sub: 'Ethereum', price: '$ 23.00', change: '-1.14%', color: '#627EEA', icon: imageIndex.Ethereum },
    { id: '4', name: 'BNB', sub: 'BNB', price: '$ 23.00', change: '-1.14%', color: '#F0B90B', icon: imageIndex.Bnb },
  ];
  const navgation = useNavigation()
 const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState()
  const [balance, setBalance] = useState(0)
  const isLogin = useSelector((state: any) => state?.auth);
  console.log(isLogin)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    // AsyncStorage.removeItem('wallet')
    const data = await Fetch_CointAPI(setLoading)
    // const ww = await AsyncStorage.getItem('wallet')
    // const nn = await ww != null ? JSON.parse(ww) : null;
    // console.log(nn)
    // setWallet(nn)

    // if (nn) {
    //   setConnected(true)
    //   const bb = await getWalletBalance()
    //   console.log(bb)
    // }
    setCoins(data)
  };
  const renderAction = ({ item }: any) => (
    <TouchableOpacity style={styles.actionItem}
      onPress={() => {
        navgation.navigate(item.screen, {
          item: item
        })
      }}
    >
      <View style={styles.actionCircle}>
        <Image source={item.icon} style={{ width: 55, height: 55 }} resizeMode="contain" />

      </View>
      <Text style={styles.actionText}>{item.label}</Text>
    </TouchableOpacity>
  );
  //  const renderToken = ({ item }: any) => (
  //     <TouchableOpacity style={styles.tokenRow} onPress={() => navigation.navigate(ScreenNameEnum.cointDetail, { id: item?.id })}>
  //       <Image source={{ uri: item.image.thumb || item.image }} style={styles.tokenIcon} />
  //       <View style={styles.tokenInfo}>
  //         {/* <Text style={styles.tokenName}>{item.name}</Text> */}
  //         <Text style={styles.tokenName}>{item?.symbol}</Text>
  //         <Text style={styles.tokenFullname}>{item.name}</Text>
  //       </View>
  //       <View style={styles.tokenPriceSection}>
  //         <Text style={styles.tokenPrice}>${parseFloat(item.current_price)}</Text>
  //         <Text style={[styles.tokenChange, { color: item.price_change_percentage_24h >= 0 ? "green" : "red" },]}>{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  const renderToken = ({ item }: any) => (
    <View style={styles.tokenRow}>
      <View style={styles.tokenLeft}>
        <View style={[styles.tokenIcon, { backgroundColor: item.color + '40' }]}>
          <Image source={{uri: item.image}} style={{ width: 44, height: 44 }} resizeMode="contain" />
        </View>
        <View>
          <Text style={styles.tokenName}>{item.name}</Text>
          <Text style={styles.tokenSub}>{item.sub}</Text>
        </View>
      </View>
      <View style={styles.tokenRight}>
        <Text style={styles.tokenPrice}>${item.current_price}</Text>
        <Text style={[styles.tokenChange,{ color: item.price_change_percentage_24h >= 0 ? "green" : "red" }]}>{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} style={styles.avatar} />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Ashlynn Korsgaard</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <Image source={imageIndex.Scanning} style={{
            height: 25,
            width: 25,
            resizeMode: "cover",
            right: 15
          }} />
          {/* <Ionicons name="qr-code-outline" size={22} color="#00C389" style={{ marginRight: 12 }} /> */}
          <View style={styles.notification}>
            <Image source={imageIndex.Nofiication} style={{
              height: 38,
              width: 38,
              resizeMode: "cover"

            }} />            {/* <View style={styles.badge} /> */}
          </View>
        </View>
      </View>

      {/* Balance */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>$ 150.00</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <FlatList
          data={actions}
          horizontal
          renderItem={renderAction}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.sectionTitle}>Popular tokens</Text>
        <Image source={imageIndex.More} style={{
          height: 20,
          width: 20
        }} />
      </View>
      <FlatList
        data={coins}
        showsVerticalScrollIndicator={false}
        renderItem={renderToken}
        keyExtractor={(item) => item.id}
        style={{
          marginTop: 11
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    marginTop: 3
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
    color: '#9CA3AF',
    marginTop: 5
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginTop: 8
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
    marginTop: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
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
