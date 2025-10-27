import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './botones/BotonesScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import TextScreen from './TextScreen'
import BotonesScreen2 from './botones/BotonesScreen2';
import SplashScreenPro from './ImageBackgroundScreen';
import Repaso1Screen from './Repaso1Screen';
import SimpleScrollView from './ScrollViewVerticalScreen';

export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones': 
            return <BotonesScreen2/>;
        case 'switch':
            return<BotonesScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'textScreen':
            return <TextScreen/>;
        case 'scrollViewH':
            return <SimpleScrollView/>;
        case 'ImageBackground':
            return <SplashScreenPro/>;
        case 'repaso1':
            return <Repaso1Screen/>
        

        case 'menu':
            default:
                return(
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>
                <View style={styles.contenedorBotones}>
        <Button onPress={()=>setScreen('contador')} title = 'Pract:Contador'/>
        <Button onPress={()=>setScreen('botones')} title = 'Pract:Botones' />
        <Button onPress={()=>setScreen('switch')} title = 'Pract:Switch' />
        <Button onPress={()=>setScreen('textScreen')} title = 'Pract:TextInput' />
        <Button onPress={()=>setScreen('ImageBackground')} title = 'Pract:ImageBackground' />
        <Button onPress={()=>setScreen('repaso1')} title = 'Repaso 1' />
        <Button onPress={()=>setScreen('scrollViewH')} title = 'Pract:ScrollView' />
        <Button onPress={()=>setScreen('activityIndicator')} title = 'Pract:ActivityIndicator' />
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

    contenedorBotones: {
        marginTop: 25,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4, 
    },

});
