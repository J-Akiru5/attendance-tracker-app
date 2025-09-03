import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

// We will receive the onLogout function as a prop from App.js
const SettingsScreen = ({ onLogout }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>

        {/* This is a placeholder for future profile settings */}
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Profile</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
        </View>

        {/* The Logout Button */}
        <View style={styles.logoutButtonContainer}>
          <Button title="Log Out" onPress={onLogout} color="red" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 18,
  },
  logoutButtonContainer: {
    marginTop: 50,
  }
});

export default SettingsScreen;