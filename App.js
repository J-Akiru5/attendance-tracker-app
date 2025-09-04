import React, { useState, useEffect } from 'react';
import { Button } from 'react-native'; // Import Button for the header
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer

// Import all screens
import SplashScreen from './screens/SplashScreen';
import AdminDashboard from './screens/AdminDashboard';
import UserListScreen from './screens/UserListScreen';
import AttendanceReportScreen from './screens/AttendanceReportScreen';
import UserDashboard from './screens/UserDashboard';
import UserAttendanceLog from './screens/UserAttendanceLog';
import SettingsScreen from './screens/SettingsScreen';
import VerificationScreen from './screens/VerificationScreen';
import AuthScreen from './screens/AuthScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); // Create the Drawer

// --- The Tab Navigators remain the same ---

function UserTabs({ navigation }) { // Receive navigation prop
  return (
    <Tab.Navigator
      screenOptions={{
        // Add the hamburger menu button to the header
        headerRight: () => (
          <Button onPress={() => navigation.openDrawer()} title="Menu" />
        ),
      }}
    >
      <Tab.Screen name="Dashboard" component={UserDashboard} />
      <Tab.Screen name="My Attendance" component={UserAttendanceLog} />
    </Tab.Navigator>
  );
}

function AdminTabs({ navigation }) { // Receive navigation prop
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <Button onPress={() => navigation.openDrawer()} title="Menu" />
        ),
      }}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboard} />
      <Tab.Screen name="Users" component={UserListScreen} />
      <Tab.Screen name="Reports" component={AttendanceReportScreen} />
    </Tab.Navigator>
  );
}

// --- NEW: The Main Drawer Navigator ---
// This is the main navigator when a user is logged in.
// It receives the onLogout function to pass to the Settings screen.

function MainDrawer({ userRole, onLogout }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" options={{ headerShown: false }}>
        {/* The "Home" screen in the drawer is actually the entire Tab navigator */}
        {/* We use a function to pass props down to the Tab Navigators */}
        {(props) => (
          userRole === 'admin'
            ? <AdminTabs {...props} />
            : <UserTabs {...props} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Settings">
        {/* We pass the onLogout function to the SettingsScreen */}
        {(props) => <SettingsScreen {...props} onLogout={onLogout} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}


// --- Main App Component ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  // Create the logout handler to pass to Settings
  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // If logged in, show the MAIN DRAWER, passing role and logout function
        <MainDrawer userRole={userRole} onLogout={handleLogout} />
      ) : (
        // If not logged in, show the Login Stack
        <Stack.Navigator
          initialRouteName='Auth'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          {/* Pass the onLogin function to VerificationScreen */}
          <Stack.Screen name="Verification">
            {(props) => <VerificationScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}