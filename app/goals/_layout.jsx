import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { GoalsProvider } from '../../contexts/GoalsContext'

export default function GoalsLayout() {

  return (
    <GoalsProvider>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Your Announcements',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'home' : 'home-outline'} 
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create announcement"
        options={{
          title: 'Create Announcement',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'create' : 'create-outline'} 
              color="black"
            />
          ),
        }}
      />
    </Tabs>
    </GoalsProvider>
  )
}
