import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderPaciente from '../../components/Fragments/Header/HeaderPaciente';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomePaciente = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  const navigation = useNavigation();
  const handlerTema = () =>{
    setSettings({...settings, theming: 'dark'});
  }

  const handlerTemaClaro = () =>{
    setSettings({...settings, theming: 'light'});
  }
    return (
      <View style={{flex: 1, backgroundColor: theming.background}}>
        <HeaderPaciente /> 

        <View style={{flexDirection: 'row'}}>
          <Button onPress={handlerTema} mode='contained'>Mudar o Tema escuro</Button>
          <Button onPress={handlerTemaClaro} mode='contained'>Mudar o Tema claro</Button>
          <Button onPress={()=>{navigation.navigate('DetalhesPaciente')}} mode='contained'>Mudar o Tema claro</Button>
        </View>
      </View>
    )
}

export default HomePaciente

const styles = StyleSheet.create({})