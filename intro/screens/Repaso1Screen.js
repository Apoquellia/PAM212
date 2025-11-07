import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, StyleSheet, Dimensions, ImageBackground,TextInput, Alert, Button, Switch, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";

const { height } = Dimensions.get("window");

export default function Repaso1Screen() {
  const [showMain, setShowMain] = useState(false);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };


  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const enviarDatos = () => {
    if (nombre.trim() === "" || correo.trim() === "") {
      mostrarAlerta("Error", "Por favor llena todos los campos");
      return;
    }

    if (!validarCorreo(correo.trim())) {
      mostrarAlerta("Error", "Ingresa un correo electrónico válido");
      return;
    }

    if (!aceptaTerminos) {
      mostrarAlerta(
        "Error",
        "Debes aceptar los términos y condiciones para continuar."
      );
      return;
    }

    mostrarAlerta(
      "Registro exitoso",
      `Nombre: ${nombre}\nCorreo: ${correo}`
    );
  };

  useEffect(() => {
    const prepararSplash = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };
    prepararSplash();

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

    const timer = setTimeout(() => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(() => {
        SplashScreen.hideAsync().then(() => setShowMain(true));
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
        source={require("../assets/fondoblanco.jpeg")} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu  nombre"
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
              <Text style={styles.itemtitle}>Términos y condiciones</Text>
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

          <Button color="black" title="Enviar" onPress={enviarDatos} />
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
},
  input: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    borderRadius: 8,
},
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#000",
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
    color: "black",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 5,
  },
  itemBox: {
    flex: 1,
    marginRight: 10,
  },
  itemtitle: {
    fontSize: 16,
  },
  switch: {},
});
