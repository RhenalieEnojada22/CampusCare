import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      {/* Global Status Bar */}
      <StatusBar style="auto" />

      {/* App Navigation Stack */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Entry Point / Landing Page */}
        <Stack.Screen name="index" />

        {/* Authentication Pages */}
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />

        {/* Main App Pages */}
        <Stack.Screen name="home" />
        <Stack.Screen name="announcement" />
        <Stack.Screen name="attendance" />
        <Stack.Screen name="payments" />
        <Stack.Screen name="schedule" />
        <Stack.Screen name="logout" />

        {/* 404 Not Found Fallback */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
