import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Offer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: '#d9a69cff',
  },
  text: {
    color: '#333',
    fontFamily: 'Italiana-Regular',
    fontSize: 30,
    // fontWeight: 'bold',
  },
});
