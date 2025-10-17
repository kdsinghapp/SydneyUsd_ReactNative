 import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import ScreenNameEnum from '../routes/screenName.enum';
import Dashboard from '../screen/BottomTab/DashBoard/Dashboard';
 
 
 type HomeStackParamList = {
  [ScreenNameEnum.DashBoardScreen]: undefined;
  [ScreenNameEnum.DashBoardTwo]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNameEnum.DashBoardScreen} component={Dashboard} />
    </Stack.Navigator>
  );
}
