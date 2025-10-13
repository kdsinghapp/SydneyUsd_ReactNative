import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { color } from '../../../constant';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { restoreLogin } from '../../../redux/feature/authSlice';
import { getAuthData } from '../../../Api/apiRequest';

type RootStackParamList = {
  Home: undefined;
};

const Splash: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  // Fade animation reference
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // ✅ Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // ✅ Timer for navigation
    const timer = setTimeout(async () => {
      try {
        const storedAuth = await getAuthData();
console.log("storedAuth",storedAuth.userData.type)
        if (storedAuth?.token) {

          if(storedAuth.userData.type =="Delivery"){
             dispatch(restoreLogin(storedAuth));
          navigation.replace(ScreenNameEnum.DeliveryTabNavigator);
          }
          else{
             dispatch(restoreLogin(storedAuth));
          navigation.replace(ScreenNameEnum.OnboardingScreen);
          }
          // 🔥 User is logged in — restore to Redux and go to main app
        
        } else {
          // 🚪 Not logged in — go to Onboarding/Login screen
          navigation.replace(ScreenNameEnum.OnboardingScreen);
        }
      } catch (error) {
        console.error('Splash check failed:', error);
        navigation.replace(ScreenNameEnum.OnboardingScreen);
      }
    }, 2000);

    // ✅ Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation, dispatch]);

  return (
    <ImageBackground
      style={styles.container}
      source={imageIndex.bag} // your splash background image
      resizeMode="cover"
    >
      <StatusBarComponent backgroundColor={color.white} />
    </ImageBackground>
  );
};

export default Splash;
