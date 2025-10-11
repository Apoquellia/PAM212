//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function App() {

let[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>
      
      <View style={styles.contenedorBotones}>
      <Button color ="green" title = "Incrementar" onPress={()=> setContador(contador+1)} />

      <Button color ="red" title = "Quitar" onPress={()=> setContador(contador-1)} />

      <Button color ="orange" title = "Reiniciar" onPress={()=> setContador(0)} />
      </View>
      
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

  texto:{
    color:"#4964e7ff",
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  texto2:{
    color:"#13278fff",
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'400',
    textDecorationLine:'underline',
  },


  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:20,


  },
});
