import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Goals = () => {
  // Sample array of announcements
  const announcements = [
    { id: "1", text: "📅 Team meeting at 10 AM tomorrow." },
    { id: "2", text: "📝 Please submit your reports by end of the day." },
    { id: "3", text: "💻 New software update coming next week." },
  ];

  return (
    <LinearGradient
      colors={["#e0f2fe", "#f9fafb"]} // gradient background
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>📢 Your Announcements</Text>

        {/* FlatList */}
        <FlatList
          data={announcements}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.announcementCard}>
              <MaterialIcons
                name="campaign"
                size={22}
                color="#2563eb"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.announcementText}>{item.text}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  announcementCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  announcementText: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
    lineHeight: 22,
  },
});
