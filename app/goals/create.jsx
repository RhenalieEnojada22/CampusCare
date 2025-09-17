import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  Pressable, 
  Keyboard, 
  View, 
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useGoals } from '../../hooks/useGoals';
import { useRouter } from 'expo-router';

const Create = () => {
  const [goal, setGoal] = useState('');
  const { createGoal } = useGoals();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!goal.trim()) return; // Prevent empty submission
    await createGoal({
      goal,
      progress: 0,
    });
    setGoal('');
    Keyboard.dismiss();
    router.push('/goals');
  };

  return (
    <LinearGradient
      colors={['#f9f9f9', '#e6f7f2']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inner}
        >
          <View style={styles.card}>
            <Text style={styles.title}>📢 Create a New Announcement</Text>
            <Text style={styles.subtitle}>
              Share something important with everyone!
            </Text>

            <TextInput
              style={styles.input}
              placeholder="What do you want to announce?"
              placeholderTextColor="#888"
              value={goal}
              onChangeText={setGoal}
            />

            <Pressable onPress={handleSubmit} style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.98 }] }
            ]}>
              <Text style={styles.buttonText}>➕ Add Announcement</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 6,
    color: '#222',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#f4f6f8',
    padding: 16,
    borderRadius: 12,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
  },
  button: {
    paddingVertical: 16,
    backgroundColor: '#21cc8d',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 4,
    shadowColor: '#21cc8d',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
