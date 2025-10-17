   import OnboardingScreen from "../screen/auth/Onboarding/Onboarding";
  import ScreenNameEnum from "./screenName.enum";
 import TabNavigator from "../navigators/TabNavigation";
 import NotificationsScreen from "../screen/Notification/Notification";
  import ChangePassword from "../screen/Profile/ChangePassword/ChangePassword";
import HelpScreen from "../screen/Profile/Help/Helps";
import Splash from "../screen/auth/Splash/Splash";
import UploadDocumentsScreen from "../screen/auth/UploadDocumentsScreen/UploadDocumentsScreen";
 import OtpScreen from "../screen/auth/OTPScreen/OtpScreen";
 import LegalPoliciesScreen from "../screen/Profile/LegalPoliciesScreen";
import PrivacyPolicy from "../screen/Profile/PrivacyPolicy";
import EditProfile from "../screen/Profile/EditProfile/EditProfile";
 import ChatScreen from "../screen/BottomTab/ChatScreen/ChatScreen";
import OrdersPrfile from "../screen/Profile/OrdersPrfile/OrdersPrfile";
  import Login from "../screen/auth/Login/Login";
import PasswordReset from "../screen/auth/PasswordReset/PasswordReset";
import CreatePassword from "../screen/auth/CreateNewPassword/CreateNewPassword";
import Verify from "../screen/auth/Verify/Verify";
import PersonalInfo from "../screen/auth/Personal/PersonalInfo";
import GovernmentDoc from "../screen/auth/GovernmentDoc/GovernmentDoc";
 import FaceNewPassword from "../screen/auth/FaceNewPassword/FaceNewPassword";
import Success from "../screen/auth/Success/Success";
import Signup from "../screen/auth/Signup/SignUp";
 
import SawapSen from "../screen/BottomTab/SwapSend/SawapSen";
import Sendcoin from "../screen/BottomTab/Sendcoin/Sendcoin";
import SendMoney from "../screen/BottomTab/SendMoney/SendMoney";
import CurrencySelector from "../screen/Profile/CurrencySelector";
import NotificationsSetting from "../screen/Profile/NotificationsSetting/NotificationsSetting";
import HelpSupport from "../screen/Profile/HelpSupport/HelpSupport";
import FaceRecognition from "../screen/auth/FaceRecognition/FaceRecognition ";
import Buy from "../screen/BottomTab/DashBoard/Buy";
import BuyNow from "../screen/BottomTab/DashBoard/BuyNow";
import SwapScreen from "../screen/BottomTab/Swap/Swap";
import ContactUS from "../screen/Profile/HelpSupport/ContactUS";
import TokenDetailScreen from "../screen/BottomTab/DashBoard/CointDetail";
// import BuyNow from "../screen/BottomTab/Dashboard/BuyNow";
// import Buy from "../screen/BottomTab/Dashboard/Buy";
// import SwapScreen from "../screen/BottomTab/swap/Swap";


 const _routes: any = {
  REGISTRATION_ROUTE: [
    {
      name: ScreenNameEnum.SPLASH_SCREEN,
      Component: Splash,
    },
 
    {
      name: ScreenNameEnum.Login,
      Component: Login,
    },
    
 
 
    
    {
      name: ScreenNameEnum.UploadDocumentsScreen,
      Component: UploadDocumentsScreen,
    },
    {
      name: ScreenNameEnum.OnboardingScreen,
      Component: OnboardingScreen,
    },
 
    
    {
      name: ScreenNameEnum.OrdersPrfile,
      Component: OrdersPrfile,
    },
    {
      name: ScreenNameEnum.ChatScreen,
      Component: ChatScreen,
    },
    {
      name: ScreenNameEnum.EditProfile,
      Component: EditProfile,
    },
    {
      name: ScreenNameEnum.OtpScreen,
      Component: OtpScreen,
    },
        {
      name: ScreenNameEnum.CreatePassword,
      Component: CreatePassword,
    },

   
    {
      name: ScreenNameEnum.changePassword,
      Component: ChangePassword,
    },
    
    {
      name: ScreenNameEnum.Help,
      Component: HelpScreen,
    },
     {
      name: ScreenNameEnum.cointDetail,
      Component: TokenDetailScreen,
    },
     {
      name: ScreenNameEnum.ContactUS,
      Component: ContactUS,
    },
       {
      name: ScreenNameEnum.TabNavigator,
      Component: TabNavigator,
    },
     
       {
      name: ScreenNameEnum.PrivacyPolicy,
      Component: PrivacyPolicy,
    },
       {
      name: ScreenNameEnum.LegalPoliciesScreen,
      Component: LegalPoliciesScreen,
    },
 
       {
      name: ScreenNameEnum.PasswordReset,
      Component: PasswordReset,
    },
 
  
     {
      name: ScreenNameEnum.NotificationsScreen,
      Component: NotificationsScreen,
    },
  
     {
      name: ScreenNameEnum.Verify,
      Component: Verify,
    },


      {
      name: ScreenNameEnum.Signup,
      Component: Signup,
    },
     {
      name: ScreenNameEnum.PersonalInfo,
      Component: PersonalInfo,
    },
       {
      name: ScreenNameEnum.GovernmentDoc,
      Component: GovernmentDoc,
    },

       {
      name: ScreenNameEnum.FaceRecognition,
      Component: FaceRecognition,
    },
          {
      name: ScreenNameEnum.FaceNewPassword,
      Component: FaceNewPassword,
    },
     {
      name: ScreenNameEnum.Success,
      Component: Success,
    },
      {
      name: ScreenNameEnum.Buy,
      Component: Buy,
    },
      {
      name: ScreenNameEnum.BuyNow,
      Component: BuyNow,
    },
      {
      name: ScreenNameEnum.SwapScreen,
      Component: SwapScreen,
    },

     {
      name: ScreenNameEnum.SawapSen,
      Component: SawapSen,
    },
      {
      name: ScreenNameEnum.Sendcoin,
      Component: Sendcoin,
    },
     {
      name: ScreenNameEnum.SendMoney,
      Component: SendMoney,
    },
      
       {
      name: ScreenNameEnum.CurrencySelector,
      Component: CurrencySelector,
    },
         {
      name: ScreenNameEnum.NotificationsSetting,
      Component: NotificationsSetting,
    },
      {
      name: ScreenNameEnum.HelpSupport,
      Component: HelpSupport,
    },
    
  ],


};

export default _routes;
