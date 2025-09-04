import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// We will use a mock user for now. Later, this will come from your auth state.
const mockUser = {
  name: 'John Doe',
};

const UserDashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, {mockUser.name}!</Text>
          <Text style={styles.subHeaderText}>Here's your summary for today.</Text>
        </View>

        {/* Card for Today's Attendance Status */}
        <View style={[styles.card, styles.statusCard]}>
          <Text style={styles.cardTitle}>Today's Status</Text>
          <Text style={styles.statusText}>Not Logged In</Text>
          <Text style={styles.cardSubtitle}>Press the verification button on the previous screen to log your attendance.</Text>
        </View>

        {/* Card for Recent Activity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          {/* We will map over mock data here in the next phase */}
          <View style={styles.activityItem}>
            <Text>Yesterday:</Text>
            <Text style={styles.onTime}>On Time (09:01 AM)</Text>
          </View>
          <View style={styles.activityItem}>
            <Text>Sep 2, 2025:</Text>
            <Text style={styles.late}>Late (09:15 AM)</Text>
          </View>
        </View>

        {/* Card for Performance Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monthly Summary</Text>
          <Text style={styles.cardSubtitle}>On-time Percentage: 95%</Text>
          <Text style={styles.cardSubtitle}>Total Late: 1</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8', // A light grey background
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusCard: {
    backgroundColor: '#e9f5ff', // A light blue
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  statusText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff8c00', // Orange for "Not Logged In"
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  onTime: {
    color: 'green',
    fontWeight: 'bold',
  },
  late: {
    color: 'red',
    fontWeight: 'bold',
  }
});

export default UserDashboard;