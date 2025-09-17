import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Notes = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialIcons name="library-books" size={28} color="#4f46e5" />
          <Text style={styles.title}>Notes</Text>
        </View>

        {/* View Notes Button */}
        <TouchableOpacity onPress={() => router.push("/notes/view")}>
          <LinearGradient
            colors={["#6366f1", "#7c3aed"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>View Notes</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Add Note Button */}
        <TouchableOpacity onPress={() => router.push("/notes/add")}>
          <LinearGradient
            colors={["#14b8a6", "#22c55e"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add New Note</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9", // softer background
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#1e293b",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
