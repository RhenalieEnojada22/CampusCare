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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const trimmedEmail = email.trim().toLowerCase();
      const key = `user_${trimmedEmail}`;
      const storedUser = await AsyncStorage.getItem(key);

      if (!storedUser) {
        Alert.alert("User not found", "Please sign up first.");
        return;
      }

      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.password !== password.trim()) {
        Alert.alert("Incorrect password", "Please try again.");
        return;
      }

      Alert.alert("✅ Login successful!");
      // Navigate to your home or dashboard screen
      router.replace("home"); // Replace with your actual path
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("❌ Login failed", "Something went wrong.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to CampusCare</Text>

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

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.push("signup")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
