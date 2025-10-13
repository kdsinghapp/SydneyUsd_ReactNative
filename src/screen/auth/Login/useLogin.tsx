import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegistrationStackParamList } from '../../../navigators/RegistrationRoutes';
import ScreenNameEnum from '../../../routes/screenName.enum';
   // import messaging, { getToken } from '@react-native-firebase/messaging';

type UserType = 'User' | 'Driver';

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<UserType>();
const [token, setToken] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<RegistrationStackParamList>>();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {

      // const userType = await AsyncStorage.getItem('selectedRole');
      // setType(userType)
      // console.log("userType",userType)
       // await getFcmToken()
    })();
  }, []);
 console.log("type",type)
  const handleEmailChange = (value: string) => {
  setEmail(value.trim());
  // const error = validateEmail(value);
  setEmailError(error);
};

const handlePasswordChange = (value: string) => {
  setPassword(value);
  // const error = validatePassword(value);
  setPasswordError(error);
};

const handleLogin = async () => {
   navigation.replace(ScreenNameEnum.TabNavigator) 
 
    const role = await AsyncStorage.getItem('selectedRole');
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

 
    try {
      const params = {
        email,
        password,
        roleType: role,
        navigation,
        token,
      };
      // await LoginCustomer(params, setLoading, dispatch);
    } catch (error) {
      // console.error("Login error:", error);
    }
  };
  return {
    email,
    password,
    emailError,
    passwordError,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    navigation,
    type
  };
}
