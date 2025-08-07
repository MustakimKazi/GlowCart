// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OffersScreen from '../screens/OffersScreen';

import ProductDetailScreen from '../screens/ProfileDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Offers" component={OffersScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
     <Stack.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  );
}
