import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Payments() {
  const router = useRouter();

  const [payments, setPayments] = useState([
    { id: "1", description: "Tuition Fee", amount: "₱ 20,000", status: "Paid" },
    { id: "2", description: "Library Fee", amount: "₱ 1,000", status: "Unpaid" },
    { id: "3", description: "Laboratory Fee", amount: "₱ 2,500", status: "Paid" },
  ]);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Unpaid");

  const handleAddPayment = () => {
    if (!description || !amount) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const newPayment = {
      id: (payments.length + 1).toString(),
      description,
      amount: `₱ ${amount}`,
      status,
    };

    setPayments([...payments, newPayment]);
    setDescription("");
    setAmount("");
    setStatus("Unpaid");
  };

  const toggleStatus = (id) => {
    const updatedPayments = payments.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "Paid" ? "Unpaid" : "Paid",
          }
        : item
    );
    setPayments(updatedPayments);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>💰 Payments</Text>

        {/* Input Box - moved to top */}
        <View style={styles.inputBox}>
          <Text style={styles.inputTitle}>➕ Add New Payment</Text>
          <TextInput
            style={styles.input}
            placeholder="Description (e.g. Exam Fee)"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount (e.g. 1500)"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addBtn} onPress={handleAddPayment}>
            <Text style={styles.addBtnText}>Add Payment</Text>
          </TouchableOpacity>
        </View>

        {/* Payments List */}
        {payments.map((item) => (
          <View key={item.id} style={styles.paymentCard}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text
              style={[
                styles.status,
                { color: item.status === "Paid" ? "#22c55e" : "#ef4444" },
              ]}
            >
              {item.status}
            </Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => toggleStatus(item.id)}
            >
              <Text style={styles.editText}>
                Mark as {item.status === "Paid" ? "Unpaid" : "Paid"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#A2D5AB" }, // spearmint green
  content: { padding: 20 },
  backBtn: {
    color: "#2563eb",
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1f2937",
  },
  paymentCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  description: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  amount: {
    fontSize: 16,
    marginVertical: 6,
    color: "#374151",
  },
  status: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#faebafff",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  editText: {
    color: "#1e293b",
    fontWeight: "600",
  },
  inputBox: {
    marginBottom: 30, // instead of marginTop
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
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
});
