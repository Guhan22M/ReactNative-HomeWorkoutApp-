import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register({ navigation }) {
  return (
    <LinearGradient colors={['#b04d56', '#a03a42', '#8f323a']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="User Name" 
            placeholderTextColor="#aaa" 
            autoCapitalize="none" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#aaa" 
            autoCapitalize="none" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#aaa" 
            secureTextEntry={true} 
            autoCapitalize="none" 
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.submitButton, { backgroundColor: '#7a2c34' }]}>
              <Text style={styles.submitButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 30, 
  },
  title: {
    fontSize: 30, 
    color: '#fff', 
    marginBottom: 20,
  },
  formContainer: {
    width: '100%', 
    maxWidth: 300, 
    alignItems: 'center', 
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 10,
    marginVertical: 15, 
    width: '100%', 
    color:'#fff',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    marginTop: 20, 
    width: '100%', 
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 15,
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'center',
  },
});
