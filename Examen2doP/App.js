import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView, Switch, Alert } from 'react-native-web';

export default function App() {

const mandarAlerta = () => {

alert('Compartir \nGuardar \nCerrar')

}

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
      <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>
                         <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
      </View>
      
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 30}}> Cristiano supera los 1000 goles</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 03/04/2019</Text>
      <Text style = {{color: 'white', fontSize: 15}}> Para sorpresa de nadie, el grandioso futbilista Cristiano Ronaldo, logra superar la meta de los 1000 goles.  </Text>
            <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>

                         <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
      
      </View>
      
      <Text style = {{color: 'black', fontSize: 20}}> Videojuegos</Text>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 30}}> GTA 6 se vuelve a retrasar</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 12/05/2025</Text>
      <Text style = {{color: 'white', fontSize: 15}}> Rockstar comunica a sus fanáticos que GTA 6 se retrasará hasta noviembre del 2026, lo cual enfurece a los jugadores...</Text>
                               <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>

                         <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
      </View>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 30}}> El equipo Faze gana el mundial de Videojuegos</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 27/04/2025</Text>
      <Text style = {{color: 'white', fontSize: 15}}> Invicto, Faze vuelve a ganar la copa mundial de Videojuegos</Text>
                                <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>

                          <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
      </View>

      <Text style = {{color: 'black', fontSize: 20}}> Política</Text>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 30}}> Fuertes manifestaciones en EE UU</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 30/09/2018</Text>
      <Text style = {{color: 'white', fontSize: 15}}> Causa de la muerte de George Floyd, los ciudadanos estadounidenses se levantan en contra del gobierno</Text>
                                     <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>

                               <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
      </View>
      <View style = {styles.carta}>
      <Text style = {{color: 'white', fontSize: 30}}> México quiere protestar contra su presidenta</Text>
      <Text style = {{color: 'white', fontSize: 20}}> fecha de publicación: 13/05/2021</Text>
      <Text style = {{color: 'white', fontSize: 15}}> Debido a las recientes opiniones de la presidenta Claudia Sheinbaun acerca de lo ocurrido en Michoacán, {'\n'}el pueblo mexicano se enfurece... </Text>
                                     <Text style = {{color: 'white', fontSize: 15}}> Ver más</Text>

                               <Switch
                            trackColor={"#81b0ff" }
                            thumbColor={"#f4f3f4"}
                            onValueChange={() => {mandarAlerta()}}
                         />
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
    width: 800,
    backgroundColor: '#000000ff',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
    background: {
    flex: 1, 
    width: "100%", 
    height: "100%", 
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
