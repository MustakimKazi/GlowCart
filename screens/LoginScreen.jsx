// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function LoginScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     setError('');
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);

//       if (email === 'growcart@gmail.com' && password === '123456') {
//         navigation.navigate('Main'); // your Main screen (BottomTabs)
//       } else {
//         setError('Please Sign Up First');
//       }
//     }, 800);
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <View style={styles.headerBox}>
//         <Text style={styles.headerTitle}>Hello Again!</Text>
//         <Text style={styles.headerSubtitle}>
//           Welcome back you’ve been missed.
//         </Text>
//       </View>

//       <View style={styles.form}>
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Enter your email Id"
//             placeholderTextColor="#666"
//             style={styles.input}
//             keyboardType="email-address"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <Icon name="email-outline" size={22} color="#666" />
//         </View>

//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#666"
//             style={styles.input}
//             secureTextEntry
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />
//           <Icon name="eye-outline" size={22} color="#666" />
//         </View>

//         <TouchableOpacity style={styles.forgotBtn}>
//           <Text style={styles.forgotText}>Forgot password?</Text>
//         </TouchableOpacity>

//         {error !== '' && (
//           <Text style={styles.errorText}>{error}</Text>
//         )}

//         <TouchableOpacity
//           style={styles.loginBtn}
//           onPress={handleLogin}
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator color="#fff" />
//           ) : (
//             <Text style={styles.loginBtnText}>Log In</Text>
//           )}
//         </TouchableOpacity>

//         <View style={styles.dividerRow}>
//           <View style={styles.divider} />
//           <Text style={styles.divideText}>Or Continue With</Text>
//           <View style={styles.divider} />
//         </View>

//         <View style={styles.socialRow}>
//           <Image
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
//             }}
//             style={styles.socialIcon}
//           />
//           <Image
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/512/732/732229.png',
//             }}
//             style={styles.socialIcon}
//           />
//           <Image
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
//             }}
//             style={styles.socialIcon}
//           />
//         </View>

//         {/* Register Now button */}
//         <TouchableOpacity
//           style={styles.registerRow}
//           onPress={() => navigation.navigate('signup')} // navigate to Profile tab
//         >
//           <Text style={styles.registerText}>
//             Not a Member?{' '}
//             <Text style={styles.registerHighlight}>Register Now</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   safe: {
//     flex: 1,
//     backgroundColor: '#FFE7E3',
//   },
//   headerBox: {
//     backgroundColor: '#F3B0B0',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     paddingVertical: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     height: 220,
//   },
//   headerTitle: {
//     fontSize: 40,
// height: 60,
//     color: '#803333',
//     // lineHeight: 30,
//     fontFamily: 'Italiana-Regular',
//   },
//   headerSubtitle: {
//     fontSize: 20,
//     color: '#A17F7F',
//     textAlign: 'center',
//   },
//   form: {
//     flex: 1,
//     padding: 20,
//     marginTop: 35,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     paddingVertical: 2,
//     elevation: 2,
//   },
//   input: {
//     flex: 1,
//     fontSize: 14,
//     color: '#333',
//   },
//   forgotBtn: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotText: {
//     color: '#C25559',
//     fontSize: 14,
//   },
//   loginBtn: {
//     backgroundColor: '#C25559',
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 50,
//     elevation: 3,
//   },
//   loginBtnText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   dividerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#C4C4C4',
//   },
//   divideText: {
//     marginHorizontal: 10,
//     color: '#888',
//   },
//   socialRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   socialIcon: {
//     width: 30,
//     height: 30,
//     marginHorizontal: 30,
//     borderRadius: 15,
//   },
//   registerRow: {
//     marginTop: 50,
//     alignItems: 'center',
//   },
//   registerText: {
//     color: '#855353',
//     fontSize: 15,
//   },
//   registerHighlight: {
//     color: '#C25559',
//     fontWeight: '600',
//   },
// });


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

useEffect(() => {
  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.navigate('Main');
      }
    } catch (e) {
      console.log('Error checking login state:', e);
    }
  };

  checkLoginStatus();
}, []);

  // ✅ Handle login
  const handleLogin = async () => {
    setError('');
    setLoading(true);

    setTimeout(async () => {
      setLoading(false);

      if (email === 'growcart@gmail.com' && password === '123456') {
        try {
          await AsyncStorage.setItem('isLoggedIn', 'true');
           navigation.navigate('Main');

        } catch (e) {
          console.log('Error storing login state:', e);
        }
      } else {
        setError('Please Sign Up First');
      }
    }, 800);
  };
const [isPasswordVisible, setIsPasswordVisible] = useState(false); // 👈 Add this to state
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Hello Again!</Text>
        <Text style={styles.headerSubtitle}>
          Welcome back you’ve been missed.
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your email Id"
            placeholderTextColor="#666"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Icon name="email-outline" size={22} color="#666" />
        </View>

       <View style={styles.inputWrapper}>
  <TextInput
    placeholder="Password"
    placeholderTextColor="#666"
    style={styles.input}
    secureTextEntry={!isPasswordVisible} // 👈 Use visibility state
    value={password}
    onChangeText={(text) => setPassword(text)}
  />
  <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
    <Icon
      name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} // 👈 Toggle icon
      size={22}
      color="#666"
    />
  </TouchableOpacity>
</View>

        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        {error !== '' && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginBtnText}>Log In</Text>
          )}
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.divideText}>Or Continue With</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialRow}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/732/732229.png',
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
            }}
            style={styles.socialIcon}
          />
        </View>

        <TouchableOpacity
          style={styles.registerRow}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.registerText}>
            Not a Member?{' '}
            <Text style={styles.registerHighlight}>Register Now</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  safe: {
    flex: 1,
    backgroundColor: '#FFE7E3',
  },
  headerBox: {
    backgroundColor: '#F3B0B0',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 220,
  },
  headerTitle: {
    fontSize: 40,
    height: 60,
    color: '#803333',
    fontFamily: 'Italiana-Regular',
  },
  headerSubtitle: {
    fontSize: 20,
    color: '#A17F7F',
    textAlign: 'center',
  },
  form: {
    flex: 1,
    padding: 20,
    marginTop: 35,
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
    fontSize: 14,
    color: '#333',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    color: '#C25559',
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: '#C25559',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
    elevation: 3,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#C4C4C4',
  },
  divideText: {
    marginHorizontal: 10,
    color: '#888',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  registerRow: {
    marginTop: 50,
    alignItems: 'center',
  },
  registerText: {
    color: '#855353',
    fontSize: 15,
  },
  registerHighlight: {
    color: '#C25559',
    fontWeight: '600',
  },
});
