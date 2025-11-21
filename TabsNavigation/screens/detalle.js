import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.Texto1}>Detalles Usuario</Text>
      <Text style={styles.Texto2}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Texto1: {
    fontSize: 22,
    color: 'black',
  },
  Texto2: {
    fontSize: 22,
    color: 'blue',
  },
});