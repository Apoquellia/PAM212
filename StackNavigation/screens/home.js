import { View, Text, Pressable, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  return (
    
    <ImageBackground 
      source={require("../assets/fondoblanco.jpeg")} 
      resizeMode="cover" 
      style={styles.background} 
    >

    <Image
      source = {require("../assets/casa.png")}
      style={{ width: 100, height: 100, marginBottom: 20 }}
      />

      <Text style={styles.title}>Bienvenido a la pantalla principal</Text>

      <Pressable style={[styles.button, styles.buttonProfile]} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.buttonSettings]} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </Pressable>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonProfile: {
    backgroundColor: '#007BFF',
  },
  buttonSettings: {
    backgroundColor: '#FF8800', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});