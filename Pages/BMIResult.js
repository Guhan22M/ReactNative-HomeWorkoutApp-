// BMIResult.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BMIResult({ route, navigation }) {
  const { height, weight } = route.params;
  const bmi = weight / ((height / 100) ** 2);

  const handleRecommendation = () => {
    navigation.navigate('Recommendation', { bmi });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your BMI</Text>
      <Text style={styles.bmiValue}>{bmi.toFixed(2)}</Text>
      <TouchableOpacity onPress={handleRecommendation} style={styles.button}>
        <Text style={styles.buttonText}>View Recommendations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bmiValue: { fontSize: 48, color: '#333', marginBottom: 20 },
  button: { backgroundColor: '#8f323a', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
