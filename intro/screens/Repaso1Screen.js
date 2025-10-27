import React, { useEffect, useRef, useState } from "react";
import {View,Text,Animated,StyleSheet,Dimensions,ImageBackground,TextInput,Alert,Button, Switch} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import SwitchButton from './botones/SwitchScreen'


SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function Repaso1Screen() {
    const [showMain, setShowMain] = useState(false); 

    const [aceptaTerminos, setAceptaTerminos] = useState(false); 

    const fadeLogo = useRef(new Animated.Value(0)).current;
    const scaleLogo = useRef(new Animated.Value(0.5)).current;
    const rotateLogo = useRef(new Animated.Value(0)).current;
    const slideText = useRef(new Animated.Value(height / 2)).current;
    const fadeOut = useRef(new Animated.Value(1)).current;

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    
    const validarCorreo = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return regex.test(email);
    };
    

    const enviarDatos = () => {
        if (nombre.trim() === "" || correo.trim() === "") {
            alert("Error: Por favor llena todos los campos"); 
            return; 
        }

        if (!validarCorreo(correo.trim())) {
            alert("Error: Ingresa un correo electrónico con un formato válido");
            return; 
        }

        if (!aceptaTerminos) {
            alert("Error: Debes aceptar los términos y condiciones para continuar.");
            return; 
        }
        alert(`Registro exitoso \nNombre: ${nombre} \nCorreo: ${correo}`);
    };


    useEffect(() => {
    
        Animated.parallel([
          Animated.timing(fadeLogo, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
          Animated.spring(scaleLogo, {
            toValue: 1,
            friction: 5,
            useNativeDriver: false,
          }),
          Animated.timing(rotateLogo, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
        ]).start();

    
        Animated.timing(slideText, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
          delay: 800,
        }).start();


        const timer = setTimeout(async () => {
          Animated.timing(fadeOut, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }).start(async () => {
            await SplashScreen.hideAsync(); 
            setShowMain(true); 
          });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const rotateInterpolate = rotateLogo.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "10deg"],
    });

    if (showMain) {
        return (
            <ImageBackground
              source={require("../assets//fondoblanco.jpeg")}
              style={styles.background}
              resizeMode="cover"
            >
              <View style={styles.container}>
                  <Text style={styles.title}>Registro de usuario</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Escribe tu nombre"
                      value={nombre}
                      onChangeText={setNombre}
                  />

                  <TextInput
                      style={styles.input}
                      placeholder="Escribe tu correo"
                      value={correo}
                      onChangeText={setCorreo}
                      keyboardType="email-address" 
                      autoCapitalize="none" 
                  />

                  <View style={styles.item}>
                      <View style={styles.itemBox}>
                          <Text style={styles.itemtitle}>Terminos y condiciones</Text>
                      </View>
                      <View style={styles.switch}>
                         <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={aceptaTerminos ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={setAceptaTerminos}
                            value={aceptaTerminos}
                         />
                      </View>
                  </View>

                  <Button color = 'black' title="Enviar" onPress={enviarDatos} />

              </View>

            </ImageBackground>
        );
    }


    return (
        <Animated.View style={[styles.container, { opacity: fadeOut }]}>
          <Animated.Image
            source={require("../assets/casa.png")}
            resizeMode="contain"
            style={[
              styles.logoImage,
              {
                opacity: fadeLogo,
                transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
              },
            ]}
          />
          <Animated.Text
            style={[styles.text, { transform: [{ translateY: slideText }] }]}
          >
            Cargando...
          </Animated.Text>
          <Animated.View
            style={[
              styles.loader,
              {
                opacity: fadeLogo,
                transform: [
                  {
                    translateX: slideText.interpolate({
                      inputRange: [0, height / 2],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    input: {
        width: "80%",
        borderWidth: 3,
        borderColor: "#000000ff",
        padding: 12,
        borderRadius: 9,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 10,
    },
    loader: {
        width: 60,
        height: 6,
        backgroundColor: "#000000ff",
        borderRadius: 3,
    },
    logoImage: {
        width: 300,
        height: 300,
        marginBottom: 5,
    },
    background: {
        flex: 1, 
        width: "100%", 
        height: "100%", 
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20,
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
    },
    item: { // Estilos usados para el View que contiene el Switch y el texto
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%', 
        marginVertical: 5,
    },
    itemBox: { // Estilos usados para el View que contiene el texto
        flex: 1,
        marginRight: 10,
    },
    itemtitle: { // Estilos para el texto de 'Terminos y condiciones'
        fontSize: 16,
    },
    switch: {
    }
})