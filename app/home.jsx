import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient
      colors={["#e0f7fa", "#f1f8ff", "#fff"]} // gradient colors
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🏫 CampusCare</Text>
        <Text style={styles.subtitle}>
          Manage your campus life with ease ✨
        </Text>

        {/* Announcements */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎯 Announcements</Text>
          <Link href="/goals" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Your Annoucements</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/goals/create" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonText}>Add a New Announcements</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Attendance */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📅 Attendance</Text>
          <Link href="/attendance" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Check Attendance</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Notes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📚 Notes</Text>
          <Link href="/notes" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Click Here</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
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
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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
    marginVertical: 8,
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#50c8b2ff",
    paddingVertical: 14,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Home;
