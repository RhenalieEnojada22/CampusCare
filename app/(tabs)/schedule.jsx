import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const initialSchedule = [
  { id: "1", day: "Monday", subject: "Math", time: "8:00 AM - 9:30 AM" },
  { id: "2", day: "Tuesday", subject: "Science", time: "10:00 AM - 11:30 AM" },
  { id: "3", day: "Wednesday", subject: "English", time: "1:00 PM - 2:30 PM" },
];

export default function Schedule() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!day.trim() || !subject.trim() || !time.trim()) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    if (editingId) {
      const updated = schedule.map((item) =>
        item.id === editingId
          ? { id: editingId, day, subject, time }
          : item
      );
      setSchedule(updated);
      setEditingId(null);
    } else {
      const newSchedule = {
        id: (schedule.length + 1).toString(),
        day,
        subject,
        time,
      };
      setSchedule([...schedule, newSchedule]);
    }

    setDay("");
    setSubject("");
    setTime("");
  };

  const handleEdit = (item) => {
    setDay(item.day);
    setSubject(item.subject);
    setTime(item.time);
    setEditingId(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Schedule</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Day (e.g. Thursday)"
          value={day}
          onChangeText={setDay}
        />
        <TextInput
          style={styles.input}
          placeholder="Subject (e.g. PE)"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={styles.input}
          placeholder="Time (e.g. 2:00 PM - 3:30 PM)"
          value={time}
          onChangeText={setTime}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddOrUpdate}>
          <Text style={styles.addBtnText}>
            {editingId ? "Update Schedule" : "Add Schedule"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scheduleCard}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.time}>{item.time}</Text>

            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEdit(item)}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              {/* Delete button removed */}
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#A2D5AB" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },

  inputBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9fafb",
  },
  addBtn: {
    backgroundColor: "#4ade80",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  scheduleCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
  },
  day: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
  subject: { fontSize: 16, marginBottom: 2 },
  time: { fontSize: 14, color: "#6b7280", marginBottom: 10 },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    backgroundColor: "#facc15",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    color: "#1e293b",
    fontWeight: "600",
  },
});
