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
import CustomDropdown from '../../../compoent/CustomDropdown';

export default function GovernmentDoc() {
  const country = [
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "UK", value: "UK" },

  ]
  const state = [
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Punjab", value: "Punjab" },
    { label: "Haryana", value: "Haryana" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Bihar", value: "Bihar" },
    { label: "West Bengal", value: "West Bengal" },
    { label: "Odisha", value: "Odisha" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Telangana", value: "Telangana" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Kerala", value: "Kerala" },
    { label: "Goa", value: "Goa" },
    { label: "Assam", value: "Assam" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Manipur", value: "Manipur" },
    { label: "Mizoram", value: "Mizoram" },
  ]

  const [type, setType] = useState<string>("");
  const Nav = useNavigation()
  return (

    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader label="Back" />
        <StepProgressBar step={2} totalSteps={4} />
        <View style={{
          marginHorizontal: 15
        }}>



          {/* <View style={styles.cardContainer}>
            <Text style={styles.title}>Identity Document</Text>
            <Text style={styles.subtitle}>
              Take a driver's license, national identity card or passport photo

            </Text>

            <Image
              source={imageIndex.docSlied}
              style={styles.image}
              resizeMode="contain"
            />
          </View> */}

          <CustomDropdown
            data={[
              { label: "Drivers Licence", value: "Drivers Licence" },
              { label: "Passport", value: "Passport" },
              { label: "ImmiCard and/or Medicare", value: "ImmiCard and/or Medicare" },
              { label: "Proof of Age and/or Medicare", value: "Proof of Age and/or Medicare" },
              { label: "Firearm Licence and Medicare", value: "Firearm Licence and Medicare" },
            ]}
            placeholder="Select Document Type"
            onSelect={(value) => setType(value)}
            leftIcon={false}
            search={true}
          />
          {type == "Drivers Licence" ?
            <View>

              <CustomInput
                placeholder={"Driver's Licence Number"}
              />

              <CustomDropdown
                data={state}
                placeholder="Select State"
                onSelect={(value) => console.log("Selected State:", value)}
                leftIcon={false}
                search={true}
              />

              <CustomInput
                placeholder={"Enter Card Number"}
              />

              <CustomInput
                placeholder={"Date of birth "}

              />
            </View>
            : type == "Passport" ?
              <View>
                <CustomInput
                  placeholder={"Passport Number"}
                />  <CustomDropdown
                  data={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },

                  ]}
                  placeholder="Gender"
                  onSelect={(value) => console.log(value)}
                  leftIcon={false}
                // search={true}
                />
                <CustomDropdown
                  data={country}
                  placeholder="Select Country of Issue"
                  onSelect={(value) => console.log("Selected Country of Issue:", value)}
                  leftIcon={false}
                  search={true}
                />
                <CustomInput
                  placeholder={"Expiry date"}

                />
              </View> :
              type == "ImmiCard and/or Medicare" ?
                <View>
                  <CustomInput
                    placeholder={"Enter proof of age Number"}
                  />
                  <CustomInput
                    placeholder={"Enter card Number"}
                  />
                  <CustomInput
                    placeholder={"Enter person Number"}
                  />
                  <CustomInput
                    placeholder={"Enter card expity (MM/YYYY)"}
                  />
                  {/* <CustomDropdown 
            data={state}
            placeholder="Select State"
            onSelect={(value) => console.log("Selected State:", value)}
          /> */}
                </View> :
                type == "Proof of Age and/or Medicare" ?
                  <View>
                    <CustomInput
                      placeholder={"Card Number"}
                    />
                  </View> :
                  type == "Firearm Licence and Medicare" ?
                    <View>
                      <CustomInput
                        placeholder={"Card Number"}
                      />
                    </View> :
                    null
          }

        </View>
      </ScrollView>
      <View style={{
        marginHorizontal: 15
      }}>


        <CustomButton title={"Verify my identity"} onPress={() => {
          Nav.navigate(ScreenNameEnum.FaceRecognition)
        }} />
      </View>
    </SafeAreaView>
  );
}
