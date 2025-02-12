// Register.js
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.10.138:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully!');
        navigation.navigate('Login');
      } else {
        const errorData = await response.json();
        Alert.alert('Registration failed', errorData.error || 'An error occurred.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['#b04d56', '#a03a42', '#8f323a']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleRegister} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  title: { fontSize: 30, color: '#fff', marginBottom: 20 },
  input: { borderBottomWidth: 1, borderBottomColor: '#fff', padding: 10, marginVertical: 15, width: '100%', color: '#fff' },
  submitButton: { paddingVertical: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7a2c34', marginTop: 20, width: '100%' },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  linkText: { marginTop: 15, color: '#fff', textDecorationLine: 'underline' },
});