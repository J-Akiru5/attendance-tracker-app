import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default UserDetailsScreen;