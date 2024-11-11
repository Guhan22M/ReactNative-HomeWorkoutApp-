// BMIInput.js
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { updateUserProfile } from './api'; // Make sure the path to api.js is correct

export default function BMIInput({ navigation }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleUpdate = async () => {
    try {
      await updateUserProfile(height, weight);
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.navigate('BMIResult', { height: parseFloat(height), weight: parseFloat(weight) });
    } catch (error) {
      Alert.alert('Update failed', 'Could not update profile data.');
    }
  };

  return (
    <LinearGradient colors={['#b04d56', '#a03a42', '#8f323a']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Height and Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TouchableOpacity onPress={handleUpdate} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  title: { fontSize: 24, color: '#fff', marginBottom: 20, textAlign: 'center' },
  input: { borderBottomWidth: 1, borderBottomColor: '#fff', padding: 10, marginVertical: 15, width: '100%', color: '#fff' },
  submitButton: { paddingVertical: 15, borderRadius: 5, alignItems: 'center', backgroundColor: '#7a2c34', marginTop: 20 },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
