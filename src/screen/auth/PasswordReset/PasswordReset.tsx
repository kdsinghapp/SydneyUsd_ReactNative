import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ImageBackground } from 'react-native';
import React from 'react';
import Loading from '../../../utils/Loader';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomButton from '../../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
 import { styles } from './style';
import { usePasswordReset } from './usePasswordReset';
// import CustomBackHeader from '../../../compoent/CustomBackHeader';
import { hp } from '../../../utils/Constant';
import CustomInput from '../../../compoent/CustomInput';
import Icon from '../../../compoent/Icon';
import ScreenNameEnum from '../../../routes/screenName.enum';
import CustomHeader from '../../../compoent/CustomHeader';
export default function PasswordReset() {
  const {
    email,
    phone,
    emailError,
    loading,
    handleIdentityText,
    setPhone,
    passFunction,
    navigation
  } = usePasswordReset();
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBarComponent />
            <CustomHeader label="Back" />

      {loading && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* <CustomBackHeader menuIcon={imageIndex.back} label={"Back"} /> */}
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text allowFontScaling={false} style={styles.titleText}>Password Reset</Text>
            <Text allowFontScaling={false} style={styles.descriptionText}>Please put your mobile number to reset your password</Text>
          </View>
        </View>
        <View style={{
          marginTop: 28
        }}>
          <CustomInput
            placeholder={"Email Address"}
            leftIcon={<Image source={imageIndex.Email}  style={{
              height:20,
              width:20,
              resizeMode:"contain"
            }} />}
            value={email}
            onChangeText={handleIdentityText}
            keyboardType='email-address'

          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        </View>
        <Image source={imageIndex.smsImg} style={{ width: 327, top: 40, height: 280, alignSelf: 'center', marginTop: 30 }} />

      </ScrollView>

      <CustomButton title={"Send"}
        // onPress={passFunction}
        onPress={() => navigation.navigate(ScreenNameEnum.OtpScreen)}         
        style={{ marginBottom: 25 }} />
    </SafeAreaView>
  );
}
