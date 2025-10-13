import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Loading from '../../../utils/Loader';
import StatusBarCompoent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import CustomButton from '../../../compoent/CustomButton';
import ScreenNameEnum from '../../../routes/screenName.enum';
import CustomInput from '../../../compoent/CustomInput';
import Icon from '../../../compoent/Icon';
import { color } from '../../../constant';
import useSignup from './useSignup';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDropdown from '../../../compoent/CustomDropdown';
import CustomHeader from '../../../compoent/CustomHeader';

export default function Signup() {


  const {
    email,
    password,
    confirmPassword,
    emailError,
    passwordError,
    confirmPasswordError,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSignup,
    navigation,
    checked,
    setChecked,
    type,
    fname,
    lName,
    fnameError,
    lNameError,
    handlefNameChange,
    handleLNameChange,
    phone,
    phoneError,
    handlePhoneChange,
    credential,
    setCredential
  } = useSignup();

  return (
    <SafeAreaView edges={['top']}
      style={styles.bgContainer}
    >
      {loading && <Loading />}

      <StatusBarCompoent />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
                      <CustomHeader label="Back" />
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.mainContainer}>
          <Image source={imageIndex.Logo1} style={styles.logo} resizeMode='contain' />
              <Text allowFontScaling={false} style={styles.txtHeading}>Sign Up</Text>
              <Text allowFontScaling={false} style={styles.txtDes}>Let's get started by creating your account</Text>
              <View style={styles.inputContainer}>
                <CustomInput
                  placeholder={"Email Address"}
      leftIcon={<Image source={imageIndex.Email}  style={{
                    height:20,
                    width:20,
                   }}
                   resizeMode='contain'
                   />}                  value={email}
                  keyboardType='email-address'

                  onChangeText={handleEmailChange}
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
<CustomDropdown
  data={[
     { label: "Current Account", value: "current" },
    { label: "Salary Account", value: "salary" },
    { label: "Fixed Deposit Account", value: "fixed_deposit" },
    { label: "Recurring Deposit Account", value: "recurring_deposit" },
    { label: "NRI Account", value: "nri" },
   ]}
  placeholder="Select Account Type"
  onSelect={(value) => console.log("Selected Account Type:", value)}
  search={true}
/>


                <CustomInput

                  placeholder={"Password"}
                  secureTextEntryToggle
      leftIcon={<Image source={imageIndex.lock}  style={{
                    height:20,
                    width:20,
                   }}
                   resizeMode='contain'
                   />}                  value={password}
                  onChangeText={handlePasswordChange}
                />


               
 


               
 
              </View>



              <View style={{ width: '100%', marginTop: 20, marginBottom: 20, flexDirection: 'row', }}>
                <Image source={imageIndex.Check1} style={{ height: 22, width: 22, }} />
                <Text allowFontScaling={false} style={[styles.signupText, { textAlignVertical: 'center', lineHeight: 30 }]}>
                  {" "} By Creating an Account, you agree to our  <Text style={{ color: color.primary }}>  Terms of Service</Text> and
                  <Text allowFontScaling={false} style={{ color: color.primary }}> Privacy Policy </Text> </Text>
              </View>
              <CustomButton
                title={"Sign Up"}
                // onPress={handleSignup}
              onPress={() => navigation.navigate(ScreenNameEnum.Verify)}
              />

              <TouchableOpacity style={{ alignItems: 'center', marginTop: 15 }} onPress={() => navigation.navigate(ScreenNameEnum.Login)}>
                <Text allowFontScaling={false} style={styles.signupText}>Alrady have an account? <Text style={{ color: color.primary }}> Login</Text> </Text>
              </TouchableOpacity>

            </View>
            
          </ScrollView>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
