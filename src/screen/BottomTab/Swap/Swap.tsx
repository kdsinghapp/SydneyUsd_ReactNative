import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarComponent from "../../../compoent/StatusBarCompoent";
import CustomHeader from "../../../compoent/CustomHeader";
import imageIndex from "../../../assets/imageIndex";
import CustomButton from "../../../compoent/CustomButton";
import TokenSelectModal from "../../../compoent/TokenSelectModal";
import ScreenNameEnum from "../../../routes/screenName.enum";
import { useNavigation } from "@react-navigation/native";

const SwapScreen = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  // Example conversion rate
  const conversionRate = 2000; // 1 ETH = 2000 USD

  const handleFromChange = (val: string) => {
    setFromValue(val);
    const num = parseFloat(val) || 0;

    // Calculate based on swap direction
    if (!isSwapped) {
      // ETH → USD
      const converted = (num * conversionRate).toFixed(2);
      setToValue(converted);
    } else {
      // USD → ETH
      const converted = (num / conversionRate).toFixed(6);
      setToValue(converted);
    }
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);

    // Recalculate with swapped direction
    const num = parseFloat(toValue) || 0;
    if (!isSwapped) {
      // After swapping, convert USD → ETH
      const converted = (num / conversionRate).toFixed(6);
      setFromValue(toValue);
      setToValue(converted);
    } else {
      // After swapping, convert ETH → USD
      const converted = (num * conversionRate).toFixed(2);
      setFromValue(toValue);
      setToValue(converted);
    }
  };
    const [modalVisible, setModalVisible] = useState(false);

const nav = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBarComponent />
      <CustomHeader label="Swap" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        {/* FROM Section */}
        <View style={styles.section}>
          <Text style={styles.label}>From</Text>
          <View style={styles.inputCard}>
            <View style={styles.currencyBox}>
              <Image
                source={imageIndex.Ellipsa}
                style={styles.icon}
              />
              <TouchableOpacity style={styles.currencyBtn}>
                <Text style={styles.currencyTxt}>
                  {isSwapped ? "USD" : "ETH"}
                </Text>
                <Image source={imageIndex.arrowDown} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <View style={styles.amountBox}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                style={styles.input}
                value={fromValue}
                onChangeText={handleFromChange}
              />
              <Text style={styles.subText}>
                {isSwapped
                  ? `${(parseFloat(fromValue) / conversionRate || 0).toFixed(6)} ETH`
                  : `$${(parseFloat(fromValue) * conversionRate || 0).toFixed(2)}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Swap Icon */}
        <TouchableOpacity onPress={handleSwap} style={styles.swapIcon}>
          <Image source={imageIndex.conved} style={{ height: 30, width: 30, resizeMode: "contain" }} />
        </TouchableOpacity>

        {/* TO Section */}
        <View style={styles.section}>
          <Text style={styles.label}>To</Text>
          <View style={styles.inputCard}>
            <View style={styles.currencyBox}>
              <Image
                source={imageIndex.Ellipsa}
                style={styles.icon}
              />
              <TouchableOpacity style={styles.currencyBtn}>
                <Text style={styles.currencyTxt}>
                  {isSwapped ? "ETH" : "USD"}
                </Text>
                <Image source={imageIndex.arrowDown} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <View style={styles.amountBox}>
              <TextInput
                placeholder="0"
                editable={false}
                value={toValue}
                style={[styles.input, { color: "#000" }]}
              />
              <Text style={styles.subText}>
                {isSwapped ? `${toValue} ETH` : `$${toValue}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Swap Button */}
        <View style={styles.bottomButton}>
          <CustomButton
            title={"Swap"}
            style={{ marginTop: 15 }}
            onPress={() => setModalVisible(true)} 
          />
        </View>
      </KeyboardAvoidingView>
            <TokenSelectModal
  visible={modalVisible}
  onDismiss={() => {
    setModalVisible(false);
   }}
    onPress={() => {
    setModalVisible(false);
    nav.navigate(ScreenNameEnum.SawapSen);
  }}
  
/>

    </SafeAreaView>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 30,
  },
  label: {
    fontSize: 14,
    color: "#8A8A8A",
    marginBottom: 10,
  },
  inputCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  currencyBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    height: 22,
    width: 22,
    resizeMode: "contain",
  },
  currencyBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  currencyTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  amountBox: {
    alignItems: "flex-end",
  },
  input: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    textAlign: "right",
    minWidth: 80,
  },
  subText: {
    color: "#8A8A8A",
    fontSize: 13,
    marginTop: 4,
  },
  swapIcon: {
    alignSelf: "center",
    marginVertical: 20,
    backgroundColor: "#EEF3FF",
    padding: 8,
    borderRadius: 50,
  },
  bottomButton: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    marginHorizontal: 15,
  },
});
