import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderAdm from '../../components/Fragments/Header/HeaderAdm';
import Header from '../../components/Fragments/Header/Header';

const HomeAdm = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, backgroundColor: theming.background}}>
        {/* <HeaderAdm /> */}
        <Header titulo="Área Adminstrativa" config={true} voltar={false}/>
      </View>
    )
}

export default HomeAdm

const styles = StyleSheet.create({})