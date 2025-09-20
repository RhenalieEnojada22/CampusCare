import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function LandingPage() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#e0f7fa", "#f1f8ff", "#ffffff"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.inner}>
          <Text style={styles.title}>🏫 CampusCare</Text>
          <Text style={styles.subtitle}>
            Manage your campus life with ease ✨
          </Text>

          <View style={styles.authButtonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.signupButton]}
              onPress={() => {
                console.log("Landing: Sign Up pressed");
                router.push("signup");
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={() => {
                console.log("Landing: Log In pressed");
                router.push("login");
              }}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2a4d69",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4f6d7a",
    textAlign: "center",
    marginBottom: 40,
  },
  authButtonsContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4abce2ff",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    width: 220,
  },
  signupButton: {
    backgroundColor: "#34a853",
  },
  loginButton: {
    backgroundColor: "#4285f4",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
