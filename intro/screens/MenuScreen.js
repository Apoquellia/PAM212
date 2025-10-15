import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';


export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones': 
            return <BotonesScreen/>;
        case 'menu':
            default:
                return(
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>
                <View style={styles.contenedorBotones}>
        <Button onPress={()=>setScreen('contador')} title = 'Pract:Contador'/>
        <Button onPress={()=>setScreen('botones')} title = 'Pract:Botones' />
        <Button onPress={()=>setScreen('textImput')} title = 'Pract:TextImput' />
        <Button onPress={()=>setScreen('imageBackground')} title = 'Pract:ImageBackground' />
        <Button onPress={()=>setScreen('scrollView')} title = 'Pract:ScrollView' />
        <Button onPress={()=>setScreen('flatList')} title = 'Pract:FlatList' />
        <Button onPress={()=>setScreen('modal')} title = 'Pract:Modal' />
        <Button onPress={()=>setScreen('bottomSheet')} title = 'Pract:BottomSheet' />
                </View>
    </View>
                    )
                }
            }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    contenedorBotones:{
        marginTop:15,
        flexDirection:'line',
        gap:20,
    },

    });
