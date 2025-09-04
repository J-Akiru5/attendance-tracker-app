import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

// Mock data for the dashboard summary
const adminSummary = {
  totalUsers: 25,
  loggedInToday: 18,
  onTimePercentage: '82%',
  issuesToReview: 2, // e.g., someone logged in from an unusual location
};


const AdminDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Admin Dashboard</Text>
          <Text style={styles.subHeaderText}>Overview of system activity.</Text>
        </View>

        {/* Grid of summary cards */}
        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{adminSummary.totalUsers}</Text>
            <Text style={styles.summaryLabel}>Total Users</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{adminSummary.loggedInToday}</Text>
            <Text style={styles.summaryLabel}>Logged In Today</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{adminSummary.onTimePercentage}</Text>
            <Text style={styles.summaryLabel}>On Time %</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={[styles.summaryValue, { color: '#ff8c00' }]}>{adminSummary.issuesToReview}</Text>
            <Text style={styles.summaryLabel}>Issues to Review</Text>
          </View>
        </View>

        {/* Quick Actions section */}
        <View style={styles.actionsContainer}>
          <Text style={styles.actionsTitle}>Quick Actions</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Users')} // Navigate to the Users tab
          >
            <Text style={styles.actionButtonText}>Manage Users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Reports')} // Navigate to the Reports tab
          >
            <Text style={styles.actionButtonText}>Generate Attendance Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}
            onPress={() => navigation.navigate('CreateUser')}>
            <Text style={styles.actionButtonText}>Create New User</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  container: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '48%', // Two cards per row with a small gap
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff', // A primary blue color
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  actionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminDashboard;