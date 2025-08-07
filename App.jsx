import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '../GlowCart/src/redux/store';

import NavScreen from './screens/NavScreen'; // Make sure this path is correct

import DrawerNavigator from './Navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NavScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavScreen" component={NavScreen} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
      
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';
// import { store } from '../GlowCart/src/redux/store';

// import DrawerNavigator from './Navigation/DrawerNavigator';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <DrawerNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// }
