// style.ts
import { Dimensions, Platform, StyleSheet } from 'react-native';
import font from '../../../theme/font';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
     flex: 1,
    },
  image: {
    width: 448,
    height: 620,
    resizeMode: 'contain',
    marginBottom: 30,
    justifyContent:"center"
  },
  title: {
    fontSize: 24,
     color: '#000',
    textAlign: 'center',
    marginBottom: 12,
     marginTop:20 ,
     fontWeight:"bold"
  },
  description: {
    fontSize: 14,
    color: '#76889A',
    textAlign: 'center',
    marginTop:4 ,
    lineHeight:20,
    fontWeight:"600"
 
  },
  skipButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 55,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#2AB673',
    fontWeight:"600"
    },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, 
    alignItems:"center"
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  footerButton: {
     marginBottom: Platform.OS === 'ios' ? 0 : 10,
      justifyContent:"center" ,
     alignItems:"center" ,
     flex:1 ,
     marginHorizontal:45
   },
});
