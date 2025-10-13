import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Loading from '../../../utils/Loader';
import imageIndex from '../../../assets/imageIndex';
import CustomButton from '../../../compoent/CustomButton';
import ScreenNameEnum from '../../../routes/screenName.enum';
import CustomInput from '../../../compoent/CustomInput';
 import useLogin from './useLogin';
import { styles } from './style';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '../../../constant';
 
export default function Login() {
  const {
    email,
    password,
    emailError,
    passwordError,
    loading,
    handleEmailChange,
    handlePasswordChange,
    navigation,
    handleLogin
  } = useLogin();
  

 
  return (
    <SafeAreaView edges={['top']}
      style={styles.bgContainer}
    >
      <StatusBarComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading && <Loading />}
        <View style={styles.mainContainer}>
          <Image source={imageIndex.Logo1} style={styles.logo} resizeMode='contain' />
          <Text allowFontScaling={false} style={styles.txtHeading}>Login</Text>
          <Text allowFontScaling={false} style={styles.txtDes}>Enter your email and password</Text>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder={"Email Address"}
              leftIcon={<Image source={imageIndex.Email}  style={{
                height:22,
                width:22
              }}               resizeMode='contain'
 />}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType='email-address'
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <CustomInput
              placeholder={'Password'}
              secureTextEntryToggle
              leftIcon={<Image source={imageIndex.lock}  style={{
                height:22,
                width:22
              }}
              secureTextEntryToggle
              resizeMode='contain'
              />}
              value={password}
              onChangeText={handlePasswordChange}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <View style={{
              flexDirection: "row",
              alignItems: "center",
               marginTop: 11,
              marginBottom: 10 ,
              justifyContent:"center"
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenNameEnum.PasswordReset)}
                style={styles.forgotContainer}>
                <Text allowFontScaling={false} style={styles.forgotText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <CustomButton
            title={"Login"}
            style={{
              marginTop: 15
            }}
            // onPress={() => navigation.replace("AdminDrawer")}
            // onPress={() => navigation.replace("MainDrawer")}
            onPress={handleLogin}
          // onPress={handleLogin}
          />
        

       
        </View>
      
      </ScrollView>
        <View style={styles.signupContainer}>
            <Text allowFontScaling={false} style={styles.signUpPrompt}></Text>
            <TouchableOpacity
            // Verify
              onPress={() => navigation.navigate(ScreenNameEnum.Signup)}
            >
              <Text allowFontScaling={false} style={styles.signupText}>Dont have an account?<Text style={{ color: color.primary }}> Sign Up</Text> </Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

