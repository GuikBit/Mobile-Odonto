import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext'
import { Button } from 'react-native-paper';
import HeaderDashboard from '../../components/Fragments/Header/HeaderDashboard';

const HomeDashboard = () => {
    const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);

    const handlerTema = () =>{
      setSettings({...settings, theming: 'dark'});
    }

    const handlerTemaClaro = () =>{
      setSettings({...settings, theming: 'light'});
    }
  return (
    <View style={{flex: 1, backgroundColor: theming.background}}>
      <HeaderDashboard />
      
      <View style={{flexDirection: 'row', marginTop: 15}}>
          <Button onPress={handlerTema} mode='contained'>Mudar o Tema escuro</Button>
          <Button onPress={handlerTemaClaro} mode='contained'>Mudar o Tema claro</Button>
        </View>
    </View>
  )
}

export default HomeDashboard

const styles = StyleSheet.create({})