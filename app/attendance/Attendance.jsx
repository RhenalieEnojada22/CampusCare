import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function AttendanceScreen() {
  const handleCheck = () => {
    alert("📊 Opening Attendance Tracker...");
  };

  return (
    <LinearGradient
      colors={["#1e3a8a", "#1e40af", "#0f172a"]}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="calendar-outline" size={30} color="#3b82f6" />
          <Text style={styles.title}>Attendance</Text>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Track and manage your class attendance easily 📊
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <LinearGradient
            colors={["#3b82f6", "#1d4ed8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Check Attendance</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)", // semi-transparent glass effect
    borderRadius: 24,
    padding: 28,
    width: "100%",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#1e293b",
  },
  subtitle: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 22,
    textAlign: "center",
  },
  button: {
    borderRadius: 14,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 14,
    shadowColor: "#1d4ed8",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
