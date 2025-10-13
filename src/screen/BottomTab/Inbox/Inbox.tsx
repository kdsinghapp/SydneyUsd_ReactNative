import React from 'react';
import { View, Image,Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../../assets/imageIndex';
 
export default function WalletScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
              start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} // ✅ horizontal gradient
      colors={['#2AB673', '#00FF85']} style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.currency}>🇺🇸 US Dollar ($)</Text>
            <TouchableOpacity>
              <Text style={styles.switchText}>Switch</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceAmount}>$12,256.00</Text>
          <Text style={styles.balanceLabel}>Wallet balance</Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.button}>
              <Image  source={imageIndex.withod} 
              style={{
                height:22,
                width:22,
                resizeMode:"contain"
              }}
              />
                <Text style={styles.buttonText}>Deposit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Image 
              
              
               style={{
                height:22,
                width:22,
                resizeMode:"contain"
              }}
              source={imageIndex.walletw}/>
              <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {/* Transactions */}
      <View style={styles.transactions}>
 
        <Text style={styles.sectionDate}>Today, Mar 20</Text>
        <View style={styles.transactionItem}>
                    <View>

          <Text style={styles.transactionTitle}>Sports</Text>
                    <Text style={{
                       fontSize:12,
     color: '#6B7280',
     marginTop:3
    
                    }}>Payment</Text>

          </View>
          <Text style={styles.transactionAmountNegative}>- $15.99</Text>
        </View>

        <View style={styles.transactionItem}>
          <View>
          <Text style={styles.transactionTitle}>Bank of America</Text>
           <Text style={{
                       fontSize:12,
     color: '#6B7280',
     marginTop:3
    
                    }}>Deposit</Text>
                    </View>
          <Text style={styles.transactionAmountPositive}>+ $2,045.00</Text>
        </View>

        <View style={styles.transactionItem}>
          <View>
          <Text style={styles.transactionTitle}>To Brody Armando</Text>
              <Text style={{
                       fontSize:12,
     color: '#6B7280',
     marginTop:3
    
                    }}>Sent</Text>
                    </View>
          <Text style={styles.transactionAmountNegative}>- $986.00</Text>
        </View>

        <Text style={styles.sectionDate}>Yesterday, Dec 28</Text>
        <View style={styles.transactionItem}>
          <View>
          <Text style={styles.transactionTitle}>Bitcoin</Text>
 
          </View>
          <Text style={styles.transactionAmountNegative}>- $2,550.99</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
    textAlign:"center"
  },
  balanceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 20,
    padding: 20,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currency: {
    color: '#fff',
    fontSize: 14,
  },
  switchText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  balanceAmount: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  balanceLabel: {
    color: 'white',
    opacity: 0.8,
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#08D774',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 6,
  },
  transactions: {
    marginTop: 18,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  sectionDate: {
    fontSize: 15,
    color: '#6B7280',
    marginVertical: 8,
    fontWeight:"600"
  },
  transactionItem: {
    flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  paddingVertical: 16,
   borderRadius: 14,
  borderBottomWidth:1,
  borderColor:"#F3F4F6"
 
   },
  transactionTitle: {
    fontSize:14,
    fontWeight: '600',
    color: '#1D3A70',
 
  },
  transactionAmountPositive: {
    color: '#00FF85',
    fontWeight: '600',
    fontSize:14
  },
  transactionAmountNegative: {
    color: '#1D3A70',
    fontWeight: '600',
        fontSize:14

  },
});
