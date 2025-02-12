import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fitness_background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.home}>
        <Text style={styles.appTitle}>HomeFlex</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.subtitle}>
            Your ultimate guide to building strength and muscle from the comfort of your home. 
            No equipment needed!
          </Text>
        </View>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  home: { flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 40 },
  appTitle: { fontSize: 32, color: '#fff', fontWeight: 'bold', marginTop: 55 },
  descriptionContainer: { alignItems: 'center', marginTop: 340 },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#fff', textAlign: 'center', paddingHorizontal: 20 },
  getStartedButton: { backgroundColor: '#7a2c34', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 10, alignItems: 'center', marginBottom: 80 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});