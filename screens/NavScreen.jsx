import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function NavScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

 const handleStart = () => {
  setLoading(true);
  setTimeout(() => {
    navigation.replace('MainApp', { screen: 'login' });
// ✅ Correct screen name
  });
};

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/fonts/m.png')}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Viorra</Text>
        <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonLoading]}
        onPress={handleStart}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Get Started</Text>
        )}
      </TouchableOpacity>

      <View style={styles.pagination}>
        <View style={styles.dotActive} />
        <View style={styles.dotInactive} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFC1BB',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: '60%',
  

    
  },
  textContainer: {
    alignItems: 'center',
    marginTop:20,
  },
  title: {
    fontSize: 50,
    color: '#5A2F2F',
    fontFamily: 'Italiana-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#9A7878',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#C25559',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 25,
    elevation: 2,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonLoading: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
   
  },
  dotActive: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  dotInactive: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f1cfcf',
  },
});
