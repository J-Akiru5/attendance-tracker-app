import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

// Note: We have removed useState and useEffect as they are no longer needed for permissions on load.

const LoginScreen = ({ navigation, onLogin }) => {

  // This new function will handle the entire login attempt process
  const handleLoginAttempt = async (role) => {
    // Step 1: Request Camera Permission
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    if (cameraStatus.status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'You need to grant camera access to log in.',
        [{ text: 'OK' }]
      );
      return; // Stop the login process if permission is denied
    }

    // Step 2: Request Location Permission
    const locationStatus = await Location.requestForegroundPermissionsAsync();
    if (locationStatus.status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'You need to grant location access to log in.',
        [{ text: 'OK' }]
      );
      return; // Stop the login process if permission is denied
    }

    // --- If we reach this point, all permissions were granted! ---

    // For the UI prototype, we can now immediately log the user in.
    // In the real app, this is where you would take a photo and get the GPS coordinates.
    console.log(`Permissions granted for role: ${role}. Proceeding to login.`);

    // Call the onLogin function passed from App.js to change the app's state
    onLogin(role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Face & GPS Verification</Text>

      {/* This is just a visual placeholder for the UI prototype */}
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.placeholderText}>Camera view will appear here</Text>
      </View>

      <Text style={styles.infoText}>
        Press a login button below to start the verification process.
      </Text>

      {/* These buttons now trigger our new handleLoginAttempt function */}
      <View style={styles.buttonContainer}>
        <Button
          title="Login as USER"
          onPress={() => handleLoginAttempt('user')}
        />
        <View style={{ marginTop: 15 }} />
        <Button
          title="Login as ADMIN"
          onPress={() => handleLoginAttempt('admin')}
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cameraPlaceholder: {
    width: 300,
    height: 400,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default LoginScreen;