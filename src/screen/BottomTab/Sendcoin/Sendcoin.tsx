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

 import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomButton from '../../../compoent/CustomButton';
import CustomInput from '../../../compoent/CustomInput';
   import CustomHeader from '../../../compoent/CustomHeader';
import { styles } from './style';
import ScreenNameEnum from '../../../routes/screenName.enum';
 
export default function Sendcoin() {
 const na = useNavigation()
  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBarComponent />
         <ScrollView showsVerticalScrollIndicator={false}>
                     <CustomHeader label="Send ETH" />

          

          <View style={styles.formContainer}>
            <CustomInput
              placeholder={"Recipient Address"}
               
               
            />
 
            <CustomInput
              placeholder={"Amount ETH"}
              
             />
            
           </View>
           <View style={{
            marginHorizontal:15,
            marginTop:120
           }}>
            <CustomButton title={"Next"} onPress={()=>{
          na.navigate(ScreenNameEnum.TabNavigator)
        }} />
        </View>
        </ScrollView>

       
      </SafeAreaView>
   );
}
