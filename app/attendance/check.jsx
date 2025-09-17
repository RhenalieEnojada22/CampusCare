import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CheckAttendance = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>📋 Check Attendance Page</Text>
    </SafeAreaView>
  );
};

export default CheckAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
});
