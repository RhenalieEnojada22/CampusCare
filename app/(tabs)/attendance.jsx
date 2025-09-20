import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router"; // Import router

// Delete function
const deleteStudent = (setStudents, id) => {
  setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
};

export default function Attendance() {
  const router = useRouter(); // Use the router for navigation

  const [students, setStudents] = useState([
    { id: "1", name: "Juan Dela Cruz", status: null },
    { id: "2", name: "Maria Santos", status: null },
    { id: "3", name: "Pedro Reyes", status: null },
  ]);

  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const markAttendance = (id, status) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const handleAddOrUpdate = () => {
    if (!newName.trim() && editingId === null) {
      Alert.alert("Error", "Please enter a name.");
      return;
    }

    if (editingId) {
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingId ? { ...s, name: editingName } : s
        )
      );
      setEditingId(null);
      setEditingName("");
    } else {
      const newStudent = {
        id: (students.length + 1).toString(),
        name: newName.trim(),
        status: null,
      };
      setStudents((prev) => [...prev, newStudent]);
    }

    setNewName("");
  };

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditingName(student.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
  };

  const renderStudent = ({ item }) => (
    <View style={styles.studentCard}>
      {editingId === item.id ? (
        <>
          <TextInput
            style={styles.editInput}
            value={editingName}
            onChangeText={setEditingName}
          />
          <View style={styles.editButtonsRow}>
            <TouchableOpacity style={styles.saveBtn} onPress={handleAddOrUpdate}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={cancelEdit}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.studentName}>{item.name}</Text>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[
                styles.attendanceBtn,
                { backgroundColor: item.status === "Present" ? "#22c55e" : "#e5e7eb" },
              ]}
              onPress={() => markAttendance(item.id, "Present")}
            >
              <Text style={styles.btnText}>Present</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.attendanceBtn,
                { backgroundColor: item.status === "Absent" ? "#ef4444" : "#e5e7eb" },
              ]}
              onPress={() => markAttendance(item.id, "Absent")}
            >
              <Text style={styles.btnText}>Absent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editBtn} onPress={() => startEdit(item)}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => deleteStudent(setStudents, item.id)}
            >
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.replace("home")} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Attendance System</Text>

      {editingId === null && (
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter student name"
            value={newName}
            onChangeText={setNewName}
          />
          <TouchableOpacity style={styles.addBtn} onPress={handleAddOrUpdate}>
            <Text style={styles.addBtnText}>Add Student</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#A2D5AB" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2053a5ff",
  },

  inputBox: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  addBtn: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: "center",
  },
  addBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  studentCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
  },
  studentName: { fontSize: 18, fontWeight: "600", marginBottom: 10 },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  attendanceBtn: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { fontWeight: "600", color: "#1e293b" },

  editBtn: {
    backgroundColor: "#bdf3e4ff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 5,
    marginTop: 5,
  },

  deleteBtn: {
    backgroundColor: "#f78d8dff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 5,
    marginTop: 5,
  },

  editInput: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9fafb",
    marginBottom: 10,
  },

  editButtonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  saveBtn: {
    backgroundColor: "#4ade80",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },

  cancelBtn: {
    backgroundColor: "#f87171",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
