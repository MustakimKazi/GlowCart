// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import BottomTabs from './BottomTabs';
// import SettingsScreen from '../screens/SettingsScreen';
// import NextScreen from '../screens/NavScreen';
// import AboutScreen from '../screens/LoginScreen';
// // import AboutScreen from '../screens/AboutScreen';
// import StackNavigator from './StackNavigator';
// import ProductDetailScreen from '../screens/ProfileDetailScreen';
// import LoginScreen from '../screens/LoginScreen';
// // import NavScreen from '../screens/NavScreen';

// const Drawer = createDrawerNavigator();

// export default function DrawerNavigator() {
//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: false }} >
//       <Drawer.Screen name="LoginScreen" component={LoginScreen}/>
 
//       <Drawer.Screen name="Main" component={BottomTabs}/>
//       <Drawer.Screen name="signup" component={SettingsScreen} />
//             <Drawer.Screen name="Home" component={StackNavigator} />
//   <Drawer.Screen name="ProductDetailScreen" component={ProductDetailScreen} />

    

//       {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
//     </Drawer.Navigator>
//   );
// }



import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from './BottomTabs';
import SettingsScreen from '../screens/SettingsScreen';
import ProductDetailScreen from '../screens/ProfileDetailScreen';
import LoginScreen from '../screens/LoginScreen';
// import NavScreen from '../screens/NavScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Main" component={BottomTabs} />
      <Drawer.Screen name="Signup" component={SettingsScreen} />
      <Drawer.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Drawer.Navigator>
  );
}
