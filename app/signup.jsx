import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    console.log("Signup screen: handleSignup called");
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    console.log({ trimmedName, trimmedEmail, trimmedPassword });

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      Alert.alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const key = `user_${trimmedEmail}`;
      const existing = await AsyncStorage.getItem(key);
      console.log("Existing user for key", key, ":", existing);

      if (existing !== null) {
        Alert.alert("⚠️ Email already in use", "Please log in instead.");
        return;
      }

      const newUser = {
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      };

      await AsyncStorage.setItem(key, JSON.stringify(newUser));
      console.log("User saved:", newUser);
      Alert.alert("✅ Account created! Please login.");

      // Clear inputs
      setName("");
      setEmail("");
      setPassword("");

      router.replace("login");
    } catch (err) {
      console.error("Signup error:", err);
      Alert.alert("❌ Error", "Something went wrong. Try again later.");
    }
  };

  return (
    <View style={signupStyles.wrapper}>
      <View style={signupStyles.container}>
        <Text style={signupStyles.title}>Create Account</Text>

        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          style={signupStyles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={signupStyles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={signupStyles.input}
        />

        <Pressable style={signupStyles.button} onPress={handleSignup}>
          <Text style={signupStyles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("Signup screen: go to Login");
            router.push("login");
          }}
        >
          <Text style={signupStyles.link}>Already have an account? Log In</Text>
        </Pressable>
      </View>
    </View>
  );
}

const signupStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",  // white background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#353596ff",
  },
  input: {
    width: "90%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#000000",
  },
  button: {
    width: "90%",
    backgroundColor: "#70a8b3ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    color: "#4285f4",
    marginTop: 10,
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
