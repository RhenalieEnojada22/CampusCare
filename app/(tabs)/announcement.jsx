import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

// Dummy announcements data
const dummyAnnouncements = [
  { id: "1", title: "Campus Clean-up Drive", date: "2025-10-01" },
  { id: "2", title: "Midterm Exam Schedule Released", date: "2025-10-05" },
  { id: "3", title: "New Library Hours", date: "2025-10-10" },
];

export default function Announcements() {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState(dummyAnnouncements);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Add or update announcement
  const handleAddOrUpdateAnnouncement = () => {
    if (!newTitle.trim() || !newDate.trim()) {
      Alert.alert("Error", "Please enter both title and date.");
      return;
    }

    if (editingId) {
      // Update announcement
      setAnnouncements((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, title: newTitle.trim(), date: newDate.trim() }
            : item
        )
      );
      setEditingId(null);
    } else {
      // Add new announcement
      const newAnnouncement = {
        id: (announcements.length + 1).toString(),
        title: newTitle.trim(),
        date: newDate.trim(),
      };
      setAnnouncements((prev) => [newAnnouncement, ...prev]);
    }

    setNewTitle("");
    setNewDate("");
  };

  // Start editing
  const startEditing = (item) => {
    setEditingId(item.id);
    setNewTitle(item.title);
    setNewDate(item.date);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setNewTitle("");
    setNewDate("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>📢 Announcements</Text>

        {/* Input Box for new announcement */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Announcement title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={[styles.input, { marginLeft: 10, flex: 1 }]}
            placeholder="Date (YYYY-MM-DD)"
            value={newDate}
            onChangeText={setNewDate}
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={handleAddOrUpdateAnnouncement}
          >
            <Text style={styles.addBtnText}>
              {editingId ? "Update" : "Add"}
            </Text>
          </TouchableOpacity>
          {editingId && (
            <TouchableOpacity
              style={[styles.addBtn, { backgroundColor: "#a26e6eff", marginLeft: 10 }]}
              onPress={cancelEditing}
            >
              <Text style={styles.addBtnText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Announcement List */}
        {announcements.map((item) => (
          <View key={item.id} style={styles.announcementCard}>
            <Text style={styles.announcementTitle}>{item.title}</Text>
            <Text style={styles.announcementDate}>{item.date}</Text>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => startEditing(item)}
            >
              <Text style={styles.editBtnText}>Edit</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#A2D5AB",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingVertical: 20,
  },
  backBtn: {
    fontSize: 16,
    color: "#2563eb",
    marginBottom: 15,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1f2937",
  },
  inputBox: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    flex: 2,
  },
  addBtn: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  addBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  announcementCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#111827",
  },
  announcementDate: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },
  editBtn: {
    alignSelf: "flex-start",
    backgroundColor: "#faebafff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editBtnText: {
    color: "#1e293b",
    fontWeight: "600",
  },
});
