import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    setMenuVisible(false);
    Alert.alert("Logged Out", "You have been logged out.");
    router.replace("login");
  };

  return (
    <LinearGradient
      colors={["#e0f7fa", "#f1f8ff", "#fff"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        {/* Menu Icon */}
        <View style={styles.menuIconContainer}>
          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <View style={styles.bar} />
            <View style={styles.bar} />
            <View style={styles.bar} />
          </TouchableOpacity>

          {/* Dropdown Menu */}
          {menuVisible && (
            <View style={styles.menuDropdown}>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.menuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>🏫 CampusCare</Text>
          <Text style={styles.subtitle}>
            Manage your campus life with ease ✨
          </Text>

          {/* Attendance */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📅 Attendance System</Text>
            <Link href="attendance" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Open Attendance</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Announcements */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📢 Announcements</Text>
            <Link href="announcement" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Announcements</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Class Schedule */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📚 Class Schedule</Text>
            <Link href="schedule" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Schedule</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Payments */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>💰 Payments</Text>
            <Link href="payments" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Manage Payments</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
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
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#2a4d69",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4f6d7a",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1f3c88",
  },
  button: {
    backgroundColor: "#4abce2ff",
    paddingVertical: 14,
    borderRadius: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  // Menu icon and dropdown
  menuIconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 20,
  },
  bar: {
    width: 25,
    height: 3,
    backgroundColor: "#4abce2ff",
    marginVertical: 2,
    borderRadius: 2,
  },
  menuDropdown: {
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuItem: {
    fontSize: 16,
    color: "#e53935",
    fontWeight: "600",
  },
});
