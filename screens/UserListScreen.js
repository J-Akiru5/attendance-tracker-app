import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MOCK_USERS } from '../mockData'; // Import our fake data

const UserListScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.userCard}>
      <Image source={{ uri: item.profileImageUrl }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Users</Text>
      <FlatList
        data={MOCK_USERS.filter(user => user.role !== 'admin')} // Don't show the admin in the list
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  userCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  userInfo: {},
  userName: { fontSize: 18, fontWeight: 'bold' },
  userEmail: { fontSize: 14, color: 'gray' },
});

export default UserListScreen;