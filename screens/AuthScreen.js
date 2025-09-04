import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

const AuthScreen = ({ navigation }) => {
  // For the prototype, this button will just navigate to the next step.
  // In the real app, this is where you would trigger the Google Sign-in flow.
  const handleGoogleSignIn = () => {
    console.log('Simulating Google Sign-in...');
    navigation.navigate('Verification'); // Navigate to the verification screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>
        <Button
          title="Sign in with Google"
          onPress={handleGoogleSignIn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 50,
  },
});

export default AuthScreen;