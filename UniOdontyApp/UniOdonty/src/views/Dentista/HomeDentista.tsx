import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderDentista from '../../components/Fragments/Header/HeaderDentista';
import { Button } from 'react-native-paper';

const HomeDentista = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  //const { data, isLoading } = useGetDentistasAuth();
  
  const handlerTema = () =>{
    setSettings({...settings, theming: 'dark'});
  }

  const handlerTemaClaro = () =>{
    setSettings({...settings, theming: 'light'});
  }
    return (
      <View style={{flex: 1, backgroundColor: theming.background}}>
        <HeaderDentista/>

        <View style={{flexDirection: 'row'}}>
          <Button onPress={handlerTema} mode='contained'>Mudar o Tema escuro</Button>
          <Button onPress={handlerTemaClaro} mode='contained'>Mudar o Tema claro</Button>
        </View>
      </View>
    )
}

export default HomeDentista

const styles = StyleSheet.create({})