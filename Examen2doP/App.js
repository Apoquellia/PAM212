import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style = {styles.encabezado}>
      <Text style = {{color: 'white', fontSize: 20}}> Portal+ App</Text>
      </View>

      <View style = {styles.container}>
        <ScrollView style = {{flex: 1, padding: 20}}>
      <Text style = {{color: 'black', fontSize: 20}}> Deportes</Text>
      <View style = {styles.carta}>

      <Text style = {{color: 'white', fontSize: 30}}> Messi deja a su novia</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      <Text style = {{color: 'white', fontSize: 15}}> En las últimas noticias, el grandioso futbolista Messi, abandona a su novia inesperadamente </Text>
      </View>
      
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 20}}> Cristiano supera los 1000 goles</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      </View>
      
      <Text style = {{color: 'black', fontSize: 20}}> Videojuegos</Text>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 20}}> GTA 6 se vuelve a retrasar</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      </View>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 20}}> El equipo Faze gana el mundial de Videojuegos</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      </View>

      <Text style = {{color: 'black', fontSize: 20}}> Política</Text>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 20}}> EEUU al borde de un golpe de estado</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      </View>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 20}}> México quiere protestar contra su presidenta</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 23/05/2021</Text>
      </View>
      
        </ScrollView>
      </View>

          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    height: 120,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  carta: {
    height: 300,
    width: 700,
    backgroundColor: '#000000ff',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
