import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../globals/GlogalContext'
import { Button } from 'react-native-paper';

const HomeConsulta: React.FC = () => {

    const { mudarTheming,setSettings, settings, theming } = useContext(GlobalContext);

    const handlerTema = () =>{
        setSettings({...settings, theming: 'dark'});
    }
    const handlerTemaClaro = () =>{
        setSettings({...settings, theming: 'light'});
    }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
      <Button onPress={handlerTema}>Mudar o Tema escuro</Button>
      <Button onPress={handlerTemaClaro}>Mudar o Tema claro</Button>
    </View>
    
  )
}

export default HomeConsulta

const styles = StyleSheet.create({})