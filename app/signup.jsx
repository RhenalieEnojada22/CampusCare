import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const key = `user_${email.toLowerCase()}`;
      const existingUser = await AsyncStorage.getItem(key);

      if (existingUser !== null) {
        Alert.alert("User already exists", "Please log in instead.");
        return;
      }

      const user = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };

      await AsyncStorage.setItem(key, JSON.stringify(user));

      Alert.alert("✅ Account created!", "Please log in.");
      router.replace("../login"); // Redirect to login screen
    } catch (error) {
      Alert.alert("❌ Signup failed", "Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your CampusCare Account</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.push("../login")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f3f0ff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#296a95ff",
  },
  input: {
    width: "90%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#8bc6f6ff",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 16,
    color: "#295b95ff",
  },
  button: {
    width: "90%",
    backgroundColor: "#68b1bbff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#72adddff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    color: "#1b529aff",
    marginTop: 15,
    textDecorationLine: "underline",
    fontSize: 15,
  },
});
