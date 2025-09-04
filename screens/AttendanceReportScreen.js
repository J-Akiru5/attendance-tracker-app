import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Platform } from 'react-native';

const AttendanceReportScreen = () => {

  const handleGenerateReport = () => {
    // In the real app, this would gather data and generate a CSV/PDF.
    // For the prototype, we just show a confirmation message.
    Alert.alert(
      "Report Generated",
      "The attendance report from Sep 1 to Sep 3 has been successfully generated and is ready for export.",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Generate Report</Text>
          <Text style={styles.subHeaderText}>Select a date range to generate an attendance report.</Text>
        </View>

        {/* Date Range Picker Section */}
        <View style={styles.datePickerContainer}>
          <Text style={styles.label}>Date Range</Text>
          <View style={styles.dateInputs}>
            {/* Start Date - This is a styled placeholder */}
            <TouchableOpacity style={styles.dateInput}>
              <Text style={styles.dateText}>Sept 1, 2025</Text>
            </TouchableOpacity>

            <Text style={styles.dateSeparator}>to</Text>

            {/* End Date - This is a styled placeholder */}
            <TouchableOpacity style={styles.dateInput}>
              <Text style={styles.dateText}>Sept 3, 2025</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Report Type Section */}
        <View style={styles.reportTypeContainer}>
          <Text style={styles.label}>Report Type</Text>
          <View style={styles.chipContainer}>
            <TouchableOpacity style={[styles.chip, styles.chipSelected]}>
              <Text style={styles.chipTextSelected}>Summary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Full Log</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Late/Absent Only</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.generateButton} onPress={handleGenerateReport}>
          <Text style={styles.generateButtonText}>Generate & Export Report</Text>
        </TouchableOpacity>

      </View>
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
    marginBottom: 40,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  datePickerContainer: {
    marginBottom: 30,
  },
  dateInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, // Make inputs take up equal space
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
  dateSeparator: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
  reportTypeContainer: {
    marginBottom: 40,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    marginBottom: 10,
  },
  chipSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  chipText: {
    fontSize: 14,
  },
  chipTextSelected: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#28a745', // A green color for success
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AttendanceReportScreen;