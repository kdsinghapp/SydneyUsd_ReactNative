import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from '../../../utils/Loader';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomButton from '../../../compoent/CustomButton';
import CustomInput from '../../../compoent/CustomInput';
import Icon from '../../../compoent/Icon';
import { styles } from './style';
import { useCreateNewPassword } from './usePersonalInfo';
import CustomHeader from '../../../compoent/CustomHeader';
import StepProgressBar from '../../../compoent/StepProgressBar';

export default function PersonalInfo() {
  const {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    isLoading,
    handlePassText,
    handleCPassText,
    handleSetPassword,
    navigation
  } = useCreateNewPassword()
  const [shipmentType, setShipmentType] = useState<string>("");

  const shipmentOptions = [
    { label: "Standard", value: "standard" },
    { label: "Express", value: "express" },
    { label: "Same Day", value: "same_day" },
  ];
  return (

    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      {isLoading && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader label="Personal Info" />

        <StepProgressBar step={1} totalSteps={5} />
        <View style={{
          marginHorizontal: 15
        }}>

          <View style={styles.formContainer}>
            <CustomInput
              placeholder={"First name "}


            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <CustomInput
              placeholder={"Preferred first name"}

            />
            <CustomInput
              placeholder={"Middle name"}

            />
            <CustomInput
              placeholder={"Last name"}

            /><CustomInput
              placeholder={"Date of birth "}

            />

          </View>
        </View>
      </ScrollView>
      <View style={{
        marginHorizontal: 15
      }}>
        <CustomButton title={"Next"} onPress={handleSetPassword} />
      </View>
    </SafeAreaView>
  );
}
