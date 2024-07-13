import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import { Button } from 'react-native-paper';

const HomeLogin = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);

  const handlerTema = () =>{
    setSettings({...settings, theming: 'dark'});
  }

  const handlerTemaClaro = () =>{
    setSettings({...settings, theming: 'light'});
  }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
        <Text>HomeLogin</Text>

        <View style={{flexDirection: 'row'}}>
          <Button onPress={handlerTema} mode='contained'>Mudar o Tema escuro</Button>
          <Button onPress={handlerTemaClaro} mode='contained'>Mudar o Tema claro</Button>
        </View>
      </View>
    )
}

export default HomeLogin

const styles = StyleSheet.create({})