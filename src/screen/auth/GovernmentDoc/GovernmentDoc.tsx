import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomButton from '../../../compoent/CustomButton';
import CustomInput from '../../../compoent/CustomInput';
  
import CustomHeader from '../../../compoent/CustomHeader';
import { styles } from './style';
import imageIndex from '../../../assets/imageIndex';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import StepProgressBar from '../../../compoent/StepProgressBar';

export default function GovernmentDoc() {
   
const Nav = useNavigation()
  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBarComponent />
         <ScrollView showsVerticalScrollIndicator={false}>
                     <CustomHeader label="Back" />
                         <StepProgressBar step={2} totalSteps={4} />
<View style={{
  marginHorizontal:15
}}>
            


          <View style={styles.cardContainer}>
      <Text style={styles.title}>Identity Document</Text>
      <Text style={styles.subtitle}>
Take a driver's license, national identity card or passport photo   

   </Text>

         <Image
          source={imageIndex.docSlied}
          style={styles.image}
          resizeMode="contain"
        />
     </View>
     </View>
        </ScrollView>
<View style ={{
  marginHorizontal:15
}}>


        <CustomButton title={"Verify my identity"} onPress={()=>{
Nav.navigate(ScreenNameEnum.FaceRecognition)
        }} />
        </View>
      </SafeAreaView>
   );
}
