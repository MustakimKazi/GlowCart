import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingScreen({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerBox}>
        <Text style={{ fontSize: 35,
  
    color: '#803333',
    lineHeight: 36,
    fontFamily: 'Italiana-Regular',}}>Join The Glow!</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#666"
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#666"
            style={styles.input}
            keyboardType="email-address"
          />
          <Icon name="email-outline" size={22} color="#666" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666"
            style={styles.input}
            secureTextEntry={securePassword}
          />
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            <Icon
              name={securePassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            style={styles.input}
            secureTextEntry={secureConfirm}
          />
          <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
            <Icon
              name={secureConfirm ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.createBtn}>
          <Text style={styles.createBtnText}>Create Account</Text>
        </TouchableOpacity>

        {/* Log In button */}
        <TouchableOpacity
          style={styles.loginRow}
          onPress={() => navigation.navigate('Login')} // navigate to LoginScreen
        >
          <Text style={styles.loginText}>
            Already a Member?{' '}
            <Text style={styles.loginHighlight}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFE7E3',
  },
  headerBox: {
    backgroundColor: '#F3B0B0',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // headerTitle: {
   
  
  // },
  form: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  createBtn: {
    backgroundColor: '#C25559',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
    marginTop: 10,
  },
  createBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginRow: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#855353',
    fontSize: 15,
  },
  loginHighlight: {
    color: '#C25559',
    fontWeight: '600',
  },
});
