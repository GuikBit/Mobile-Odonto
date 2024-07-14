import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../globals/GlogalContext'
import { Button, FAB, PaperProvider, Portal } from 'react-native-paper';
import HeaderConsulta from '../../components/Fragments/Header/HeaderConsulta';
import { theme } from '../../globals/Theming';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomTextInput from '../../components/Fragments/CustomTextInput';
import { AuthContext } from '../../globals/AuthContext';


const HomeConsulta: React.FC = () => {
    const navigation = useNavigation();
    const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
    
    const handlerTema = () =>{
      setSettings({...settings, theming: 'dark'});
    }

    const handlerTemaClaro = () =>{
      setSettings({...settings, theming: 'light'});
    }

    const navigator = () =>{
      
    }

  return (
  <PaperProvider theme={theme}>
    <Portal>    
          
      <ScrollView style={{backgroundColor: theming.background}}>
        <HeaderConsulta />  
        <View style={{flexDirection: 'row'}}>
          <Button onPress={handlerTema} mode='contained'>Mudar o Tema escuro</Button>
          <Button onPress={handlerTemaClaro} mode='contained'>Mudar o Tema claro</Button>
        </View>

      </ScrollView> 

      <FAB.Group
        open={open}
        visible
        icon={open ? 'close' : 'plus'}
        actions={[
          {
            icon: 'cog',
            label: 'Configurações',
            labelTextColor: theming.fabColorLabel,
            color: theming.fabColorLabel,
            style: {backgroundColor: theming.fabColorBack},
            onPress: () =>{navigation.navigate('Config')},
          },
          {
            icon: 'plus',
            label: 'Nova Consulta',
            labelTextColor: theming.fabColorLabel,
            color: theming.fabColorLabel,
            style: {backgroundColor: theming.fabColorBack},
            onPress: () => {navigation.navigate('Login')},
          },
        ]}
        fabStyle={{ backgroundColor: theming.fabColorBack }}
        color={theming.iconActive}
        backdropColor={'#00000050'}
        onStateChange={onStateChange}
        style={{zIndex: 4}}       
      />
    </Portal> 
  </PaperProvider>
  )
}

export default HomeConsulta

const styles = StyleSheet.create({})