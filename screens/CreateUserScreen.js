import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateUserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create User Screen</Text>
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

export default CreateUserScreen;