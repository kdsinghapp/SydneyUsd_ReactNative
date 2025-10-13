import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
  Platform,
  TextInput,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import StatusBarComponent from "../../../compoent/StatusBarCompoent";
import CustomHeader from "../../../compoent/CustomHeader";
import imageIndex from "../../../assets/imageIndex";
import CustomButton from "../../../compoent/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenNameEnum from "../../../routes/screenName.enum";
import { useNavigation, useRoute } from "@react-navigation/native";
 
const wallets = [
  { id: "1", name: "Wallet 1", limit: "$10,000.00" },
  { id: "2", name: "Wallet 2", limit: "$5,000.00" },
  { id: "3", name: "Wallet 3", limit: "$2,500.00" },
];

const BuyNow = () => {
  const route = useRoute()

  const{newitem} =route.params ||""
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);
  const [showDropdown, setShowDropdown] = useState(false);
const navigation = useNavigation()
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
       <StatusBarComponent/>
     
             <CustomHeader label={newitem} />
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
          
      

      {/* Bitcoin Card */}
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View >
            <Text style={styles.coinName}>Bitcoin</Text>
            <Text style={styles.available}>$265,46.00 available</Text>
          </View>
          <Image source={imageIndex.Btc}/>
        </View>
        <TextInput
        style={styles.amount}
        placeholder="$"
        keyboardType="decimal-pad"
        placeholderTextColor={"black"}
        />
       </View>

      {/* Wallet Dropdown */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowDropdown(true)}
        >
          <View style={styles.dropdownLeft}>
            <Image source={imageIndex.Waliert} style={{
              height:76,
              width:76,
              resizeMode:"contain"
            }}/>
             <View style={{
              marginLeft:10
             }}> 
              <Text style={styles.walletName}>{selectedWallet.name}</Text>
              <Text style={styles.walletLimit}>{selectedWallet.limit} Limit</Text>
            </View>
          </View>
                      <Image  
                      
                      style={{
              height:24,
              width:24,
              resizeMode:"contain"
            }}
                      source={imageIndex.dounArroww}/>

         </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <View style={styles.bottomButton}>
        <CustomButton
            title={"Continue"}
            style={{
              marginTop: 15,
             }}
            onPress={() => navigation.replace(ScreenNameEnum.SwapScreen)}
            // onPress={() => navigation.replace("MainDrawer")}
            // onPress={handleLogin}
          // onPress={handleLogin}
          />
        
      </View>

      {/* Dropdown Modal */}
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalDropdown}>
          <FlatList
            data={wallets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedWallet(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BuyNow;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    borderWidth:1,
    borderColor:"#EDEDED"
    },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
            backgroundColor:"#E6FFF3",
            padding:11,
            borderRadius:15
  },
  coinName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  available: {
    color: "#8A8A8A",
    fontSize: 13,
    marginTop: 5,
  },
  coinIcon: {
     borderRadius: 25,
    padding: 10,
  },
  coinSymbol: {
    fontSize: 18,
    color: "#F7931A",
    fontWeight: "bold",
  },
  amount: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 25,
    color: "#000",
  },
  dropdownContainer: {
    marginTop: 25,
  },
  dropdownButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00FF85",
  },
  dropdownLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  walletName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  walletLimit: {
    fontSize: 12,
    color: "#8A8A8A",
    marginTop:5
  },
  bottomButton: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    marginHorizontal:15
  },
  gradientButton: {
    width: "90%",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalDropdown: {
    position: "absolute",
    bottom: 150,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  dropdownText: {
    fontSize: 15,
    color: "#000",
  },
});
