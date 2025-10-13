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
 import { useFaceNewPassword } from './useFaceNewPassword';
import CustomHeader from '../../../compoent/CustomHeader';

export default function FaceNewPassword() {
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
  } = useFaceNewPassword()

  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBarComponent />
        {isLoading && <Loading />}
        <ScrollView showsVerticalScrollIndicator={false}>
                     <CustomHeader label="Back" />

          <View style={styles.headerContainer}>
            <Text  allowFontScaling={false}   style={styles.title}>Create New Password</Text>
            <Text  allowFontScaling={false}   style={styles.description}>Your new password must be different from previous used passwords.</Text>
          </View>

          <View style={styles.formContainer}>
            <CustomInput
              placeholder={"New Password"}
              leftIcon={<Icon source={imageIndex.lock} size={20} colorIcon="#A59F9F" />}
              value={password}
              onChangeText={handlePassText}
              secureTextEntryToggle
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <CustomInput
              placeholder={"Confirm Password"}
              leftIcon={<Icon source={imageIndex.lock} size={20} colorIcon="#A59F9F" />}
              value={confirmPassword}
              onChangeText={handleCPassText}
              secureTextEntryToggle
            />
            {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
          </View>
        </ScrollView>

        <CustomButton title={"Save"} onPress={handleSetPassword} />
      </SafeAreaView>
   );
}
