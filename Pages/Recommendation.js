// Recommendation.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Recommendation({ route }) {
  const { bmi = 0 } = route.params || {};  // Default to 0 if bmi is undefined

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Recommendation</Text>
      <Text style={styles.bmiText}>Your BMI: {bmi.toFixed(2)}</Text>
      <Text style={styles.recommendationText}>
        {bmi < 18.5 ? "Underweight: Consider a balanced diet with more calories." :
         bmi < 25 ? "Normal weight: Maintain your current lifestyle!" :
         bmi < 30 ? "Overweight: Try regular exercise and a healthy diet." :
                    "Obesity: Consult a healthcare provider for personalized advice."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bmiText: { fontSize: 18, color: '#333', marginBottom: 20 },
  recommendationText: { fontSize: 16, color: '#555', textAlign: 'center', paddingHorizontal: 10 },
});
