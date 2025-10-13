import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 8,
    width: '15%',
  },
  backIcon: {
    height: 32,
    width: 32,
  },
  headerContainer: {
    marginTop: 15,
    height: hp(9),
    justifyContent: 'center',
    alignItems:"center"
  },
 
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(157, 178, 191, 1)',
    lineHeight: 24,
    marginTop: 5,
    textAlign:"center"
   },
  formContainer: {
    marginTop: 20,
    backgroundColor:"#2AB673"
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 4,
  },
  cardContainer: {
    backgroundColor: "#EAF8F1",
    borderRadius: 16,
     paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginTop: 30,
     shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    height:240
 
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop:15
  },
  subtitle: {
    color: "#9DB2BF",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 25,
  },
  imageWrapper: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 60,
    resizeMode:"contain",
    marginTop:10
   },
});
