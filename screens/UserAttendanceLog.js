import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const UserAttendanceLog = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Attendance Log</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* These are static, hardcoded examples of log items. */}
        {/* In Phase 3, we will generate these dynamically from mockData.js */}

        {/* Example 1: On Time */}
        <View style={styles.logCard}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateDay}>03</Text>
            <Text style={styles.dateMonth}>SEP</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDate}>Wednesday, September 3, 2025</Text>
            <Text style={styles.infoTime}>Logged in at: 09:01 AM</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, styles.onTime]}>On Time</Text>
          </View>
        </View>

        {/* Example 2: Late */}
        <View style={styles.logCard}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateDay}>02</Text>
            <Text style={styles.dateMonth}>SEP</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDate}>Tuesday, September 2, 2025</Text>
            <Text style={styles.infoTime}>Logged in at: 09:15 AM</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, styles.late]}>Late</Text>
          </View>
        </View>

        {/* Example 3: Absent */}
        <View style={styles.logCard}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateDay}>01</Text>
            <Text style={styles.dateMonth}>SEP</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDate}>Monday, September 1, 2025</Text>
            <Text style={styles.infoTime}>No log found</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, styles.absent]}>Absent</Text>
          </View>
        </View>

        {/* Add more cards here to test scrolling */}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
  },
  logCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 15,
    paddingRight: 15,
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  dateDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dateMonth: {
    fontSize: 14,
    color: '#666',
  },
  infoContainer: {
    flex: 1, // This makes it take up the available space
  },
  infoDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoTime: {
    fontSize: 14,
    color: 'gray',
  },
  statusContainer: {
    marginLeft: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden', // Ensures the borderRadius is applied on Android
  },
  onTime: {
    color: '#006400', // Dark Green
    backgroundColor: '#e6f7e6',
  },
  late: {
    color: '#8b0000', // Dark Red
    backgroundColor: '#ffe6e6',
  },
  absent: {
    color: '#555', // Grey
    backgroundColor: '#f0f0f0',
  },
});

export default UserAttendanceLog;