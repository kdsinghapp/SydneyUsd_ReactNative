import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
 import ScreenNameEnum from '../../../routes/screenName.enum';
import { color } from '../../../constant';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
 import { useDispatch } from 'react-redux';
import { styles } from './style';
import CustomButton from '../../../compoent/CustomButton';
import StepProgressBar from '../../../compoent/StepProgressBar';
import CustomHeader from '../../../compoent/CustomHeader';
 

type RootStackParamList = {
  Home: undefined;
};

const FaceRecognition : React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 

  return (
    <ImageBackground
      style={styles.container}
      source={imageIndex.face1} // your splash background image
      resizeMode="cover"
    >
      <StatusBarComponent backgroundColor={color.white} />
      <View style={{
        marginTop:15
      }}>
                             <CustomHeader label="Face Recognition " 
                             
                             textstyle={
                              {
                                color:"white"
                              }
                             }
                             />
 <View style={{
 position: "relative",
    bottom: 12,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
     left: "10%"
  }}>
            <StepProgressBar step={3} totalSteps={1}
            textstyle={{
                                color:"white"
            }}
            
            />
            </View>
</View>
      <View style={{
 position: "absolute",
    bottom: 40,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    left: "10%"
  }}>
            <CustomButton title={"Submit"}
            
            onPress={() => {
              navigation.navigate(ScreenNameEnum.Success)
            } }
            />
  
     
     

    </View>
    </ImageBackground>
  );
};

export default FaceRecognition ;
