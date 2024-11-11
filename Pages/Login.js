// Login.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.10.138:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem('access', data.access);
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate('BMIInput'); // Navigate to BMI input page after login
      } else {
        Alert.alert('Login failed', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['#b04d56', '#a03a42', '#8f323a']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Register</Text>
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
  submitButton: { paddingVertical: 15, borderRadius: 5, alignItems: 'center', backgroundColor: '#7a2c34', marginTop: 20 },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  linkText: { marginTop: 15, color: '#fff', textDecorationLine: 'underline' },
});
