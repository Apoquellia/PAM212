//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';

//2. Main: Zona de componentes
export default function App() {

let[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text>Contador: {contador}</Text>
      <Button title = "Incrementar" onPress={()=> setContador(contador+1)} />

      <Button title = "Quitar" onPress={()=> setContador(contador-1)} />

      <Button title = "Reiniciar" onPress={()=> setContador(0)} />


      <StatusBar style="auto" />
    
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
