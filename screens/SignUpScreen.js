import React from "react";
import { StyleSheet } from "react-native";
import SignInSignUpView from "../components/SignInSignUpView";

export default function SignUpScreen({ navigation }) {
  return <SignInSignUpView navigation={navigation} isSignIn={false} />;
}

const styles = StyleSheet.create({});

// import React from "react";
// import { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Platform,
//   ActivityIndicator,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const API = "https://milton488.pythonanywhere.com";
// const API_LOGIN = "/auth";
// const API_SIGNUP = "/newuser";

// export default function SignUpScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorText, setErrorText] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function signup() {
//     console.log("---- Signing up ----");
//     Keyboard.dismiss();

//     try {
//       setLoading(true);
//       const response = await axios.post(API + API_SIGNUP, {
//         username,
//         password,
//       });

//       if (response.data.Error === "User already exists") {
//         setErrorText("This user exists");
//         setLoading(false);
//         return;
//       }

//       console.log("Success signing up!");
//       login();
//     } catch (error) {
//       setLoading(false);
//       console.log("Error signing up!");
//       console.log(error.response);
//       setErrorText(error.response.data.description);
//     }
//   }

//   async function login() {
//     console.log("---- Login ----");
//     Keyboard.dismiss();

//     try {
//       setLoading(true);
//       const response = await axios.post(API + API_LOGIN, {
//         username,
//         password,
//       });
//       console.log("Success logging in!");
//       console.log(response);

//       await AsyncStorage.setItem("token", response.data.access_token);
//       setLoading(false);
//       navigation.navigate("Account");
//     } catch (error) {
//       setLoading(false);
//       console.log("Error logging in!");
//       console.log(error.response);

//       setErrorText(error.response.data.description);
//     }
//   }

//   function dismissKeyboard() {
//     if (Platform.OS !== "web") {
//       Keyboard.dismiss();
//     }
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Sign Up for New Account</Text>
//         <Text style={styles.fieldTitle}>Username</Text>
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           autoCorrect={false}
//           value={username}
//           onChangeText={(input) => setUsername(input)}
//         />
//         <Text style={styles.fieldTitle}>Password</Text>
//         <TextInput
//           style={styles.input}
//           autoCapitalize="none"
//           autoCompleteType="password"
//           autoCorrect={false}
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(input) => setPassword(input)}
//         />
//         <View style={{ flexDirection: "row" }}>
//           <TouchableOpacity onPress={signup} style={styles.loginButton}>
//             <Text style={styles.buttonText}>Sign Up</Text>
//           </TouchableOpacity>

//           {loading ? (
//             <ActivityIndicator size="large" color="red" /> //adjust
//           ) : null}
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("SignIn");
//           }}
//           style={styles.switchButton}
//         >
//           <Text style={styles.switchText}>Sign In</Text>
//         </TouchableOpacity>
//         <Text style={styles.errorText}>{errorText}</Text>
//         <View style={{ height: 20, alignItems: "left" }}></View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 24,
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: "bold",
//     marginBottom: 24,
//   },
//   fieldTitle: {
//     fontSize: 18,
//     marginBottom: 12,
//   },
//   input: {
//     borderColor: "#999",
//     borderWidth: 1,
//     marginBottom: 24,
//     padding: 4,
//     height: 36,
//     fontSize: 18,
//     backgroundColor: "white",
//   },
//   loginButton: {
//     backgroundColor: "blue",
//     width: 120,
//     alignItems: "center",
//     padding: 18,
//     marginTop: 12,
//     marginBottom: 36,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   errorText: {
//     color: "red",
//     height: 40,
//   },
//   switchText: {
//     color: "blue",
//   },
// });
