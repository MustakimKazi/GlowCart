import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wish List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9a69cff', // Match the main app background
  },
  text: {
    fontSize: 30,
    fontFamily: 'Italiana-Regular',
    color: '#333',
  },
});
