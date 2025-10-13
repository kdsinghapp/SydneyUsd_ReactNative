import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
  import ScreenNameEnum from '../../../routes/screenName.enum';
import { successToast } from '../../../utils/customToast';

export const usePasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
 const [type, setType] = useState('');
  useEffect(() => {
    (async () => {
      const userType = await AsyncStorage.getItem('selectedRole');

      setType(userType);
    })();
  }, []);
  const navigation = useNavigation();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleIdentityText = (value: string) => {
    setEmail(value.trim());

    if (value.trim() === '') {
      // setEmailError(localizationStrings.emailRequired);
      return;
    }

    if (!emailRegex.test(value.trim())) {
      // setEmailError(localizationStrings.emailError);
    } else {
      setEmailError('');
    }
  };

  const passFunction = async () => {
             navigation.navigate(ScreenNameEnum.OtpScreen)

    try {
      if (email.trim() === '') {
        // setEmailError(localizationStrings.emailRequired);
        return;
      }

      if (!emailRegex.test(email.trim())) {
        // setEmailError(localizationStrings.emailError);
      } else {
        setEmailError('');


        const params = {
          email: email,
          type:type,
          navigation,
        };

        // console.log(params);
        // await restEmailOtpScreen(params, setLoading);
        //  navigation.navigate(ScreenNameEnum.OtpScreen)
        // navigation.navigate(ScreenNameEnum.LoginScreen)
      }

    } catch (error) {
      console.error('OTP error:', error);
    }
  };

  return {
    email,
    setEmail,
    phone,
    setPhone,
    emailError,
    loading,
    handleIdentityText,
    passFunction,
    navigation
  };
};
