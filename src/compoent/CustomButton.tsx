import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // ✅ import this

type AlignType = 'left' | 'center' | 'right';

interface CustomButtonProps {
  title: string;
  txtcolor?: string;
  bgColor?: string[]; // ✅ Now supports gradient array
  leftIcon?: React.ReactNode;
  alignItm?: AlignType;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  height?: number;
  onPress?: (event: GestureResponderEvent) => void;
  disable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  txtcolor = '#000000',
  bgColor = ['#00FF85', '#2AB673'], // ✅ default gradient
  leftIcon,
  alignItm = 'center',
  style,
  textStyle,
  height = 60,
  onPress,
  disable = false,
}) => {
  const alignment: Record<AlignType, 'flex-start' | 'center' | 'flex-end'> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable} style={[styles.button, style]}>
      <LinearGradient
        colors={bgColor} // ✅ gradient colors
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }} // ✅ horizontal gradient
        style={[styles.gradient, { height, borderRadius: height / 1 }]}
      >
        <View style={[styles.content, { justifyContent: alignment[alignItm] }]}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text allowFontScaling={false} style={[styles.text, { color: "white" }, textStyle]}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  gradient: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight:"800"
   },
});

export default CustomButton;
