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
 import { useCreateNewPassword } from './useCreateNewPassword';
import CustomHeader from '../../../compoent/CustomHeader';

export default function Success() {
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

  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBarComponent />
        {isLoading && <Loading />}
        <ScrollView showsVerticalScrollIndicator={false}>
                     <CustomHeader label="Back" />

          <View style={styles.headerContainer}>
            <Text  allowFontScaling={false}   style={styles.title}>Verification Submitted</Text>
            <Text  allowFontScaling={false}   style={styles.description}>Our team will review your information shortly. You’ll be notified once verified.</Text>
          </View>

          <View style={styles.formContainer}>
 
<Image source={imageIndex.Success} style={{alignSelf:"center",marginTop:20,

height:266,
width:340 ,
resizeMode:"contain"

}} />
 </View>
        </ScrollView>

        <CustomButton title={"Go to Home"} onPress={handleSetPassword} />
      </SafeAreaView>
   );
}
