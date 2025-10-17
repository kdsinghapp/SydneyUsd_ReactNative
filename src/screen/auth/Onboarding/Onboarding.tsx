import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { styles } from './style';
import CustomButton from '../../../compoent/CustomButton';
import { color } from '../../../constant';
import SlideButton from '../../../compoent/SlideRightButton/SlideRightButton';
import ScreenNameEnum from '../../../routes/screenName.enum';

const { width, height } = Dimensions.get('window');

interface Slide {
  id: string;
  title: string;
  description: string;
  img: any;
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Welcome to Sydney USDT',
    description: 'Your trusted bridge between AUD and stablecoins secure, simple, and smart..',
    img: imageIndex.sp2,
  },
  // {
  //   id: '2',
  //   title: 'Welcome to Sydney USDT',
  //   description: 'Your trusted bridge between AUD and stablecoins secure, simple, and smart..',
  //   img: imageIndex.sp2,
  // },
  // {
  //   id: '3',
  //   title: 'Welcome to Sydney USDT',
  //   description: 'Your trusted bridge between AUD and stablecoins secure, simple, and smart..',
  //   img: imageIndex.sp2,
  // },
];


const OnboardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const updateCurrentIndex = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== currentIndex) setCurrentIndex(index);
  };

  const handleNextPress = () => {

    navigation.navigate(ScreenNameEnum.Login);

  };

  const handleSkip = () => {
    navigation.navigate(ScreenNameEnum.Login);
  };

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={[styles.slide,]}>
      <ImageBackground source={item.img} style={styles.image} >
        <Image source={imageIndex.cosrimge}

          style={{
            height: 360,
            width: 286,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
      </ImageBackground>
      {/* Dots */}
      <View style={styles.dotsContainer}>
        {/* {slides.map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: isActive ? '#00FF85' : "#76889A",
                  width: isActive ? 15 : 9,
                  height: isActive ? 5 : 9,
                  justifyContent: "center",
                  marginHorizontal: 5,
                  borderRadius: isActive ? 10 : 10,



                },
              ]}
            />
          );
        })} */}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>
        Your trusted bridge between AUD and stablecoins {"\n"}secure, simple, and smart.
      </Text>

    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBarComponent />

      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        {/* <Text style={styles.skipText}>Skip</Text> */}
      </TouchableOpacity>

      <Animated.FlatList
        data={slides}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderSlide}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: updateCurrentIndex }
        )}
        scrollEventThrottle={16}
      />

      <View style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 50,
        marginHorizontal: 80
      }}>
        <CustomButton title={"Continue"} onPress={handleNextPress} />

      </View>



    </View>
  );
};

export default OnboardingScreen;
