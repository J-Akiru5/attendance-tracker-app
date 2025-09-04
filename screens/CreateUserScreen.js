import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const CreateUserScreen = ({ navigation }) => {

  const handleCreateUser = () => {
    // For the prototype, we just show a success message and go back.
    Alert.alert(
      "Success",
      "New user has been created and an invitation has been sent.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>New User Details</Text>

        {/* Input for Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Jane Smith"
            placeholderTextColor="#999"
          />
        </View>

        {/* Input for Email Address */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., jane.s@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>

        {/* Input for Employee ID */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Employee ID (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 102345"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        {/* Face Data Enrollment Section */}
        <View style={styles.enrollmentSection}>
          <Text style={styles.label}>Face Data Enrollment</Text>
          <Text style={styles.enrollmentSubtitle}>
            An email will be sent to the user with a secure link to enroll their face data on their own device.
          </Text>
          <TouchableOpacity style={styles.enrollmentButton}>
            <Text style={styles.enrollmentButtonText}>Send Enrollment Link</Text>
          </TouchableOpacity>
        </View>

        {/* Final Action Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateUser}>
          <Text style={styles.createButtonText}>Create User Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f4f4f8',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  enrollmentSection: {
    marginTop: 20,
    marginBottom: 40,
    padding: 15,
    backgroundColor: '#e9f5ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccebff',
  },
  enrollmentSubtitle: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
  },
  enrollmentButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollmentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#28a745',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateUserScreen;