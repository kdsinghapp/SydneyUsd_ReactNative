// hooks/useSignup.ts

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { RegistrationStackParamList } from '../../../navigators/RegistrationRoutes';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
type UserType = 'User' | 'Admin';

export default function useSignup() {
  const navigation = useNavigation<NativeStackNavigationProp<RegistrationStackParamList>>();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState<string | undefined>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fname, setFname] = useState('')
  const [lName, setLName] = useState('')
  const [fnameError, setFnameError] = useState('')
  const [lNameError, setLNameError] = useState('')
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phone, setPhone] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('')
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false)
  const [type, setType] = useState<UserType>('');
  useEffect(() => {
    (async () => {
      const userType = await AsyncStorage.getItem('selectedRole');

      setType(userType);
    })();
  }, []);

  const handlefNameChange = (value: string) => {
    setFname(value);
   };
  const handleLNameChange = (value: string) => {
    setLName(value);
   };
  const handleEmailChange = (value: string) => {
    setEmail(value);
   };
  const handlePhoneChange = (value: string) => {
    setPhone(value);
   };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    // setPasswordError(validatePassword(value));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    // setConfirmPasswordError(validateConfirmPassword(password, value));
  };

  const handleSignup = async () => {
    // const emailErr = validateEmail(email);
    // const passErr = validatePassword(password);
    // // const confirmErr = validateConfirmPassword(password, confirmPassword);
    // const fnameErr = validateFirstName(fname)
    // // const lNameErr = validateLastName(lName)
    // // const phoneErr = validateMobileNumber(phone)

    setFnameError(fnameErr)
    // setLNameError(lNameErr)
    // setPhoneError(phoneErr)
    setEmailError(emailErr);
    setPasswordError(passErr);
    // setConfirmPasswordError(confirmErr);

    if (emailErr || passErr || fnameErr) return;
    setLoading(true)
    try {
      const params = {
        email,
        password,
        // phone,
        fname,
        // lName,
        navigation,
        type,
        doctor_type:type == "User" ? type : credential?.replace(/\s+/g, '')
      };
      // await SinupCustomer(params, setLoading);

      // Navigate on success
      // navigation.navigate('SomeScreen');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return {
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
    credential, setCredential
  };
}
