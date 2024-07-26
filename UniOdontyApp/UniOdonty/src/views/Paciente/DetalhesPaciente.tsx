import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Fragments/Header/Header'

const DetalhesPaciente = () => {
  return (
    <View>
      <Header titulo='Detalhes Paciente' voltar={true} config={true}/>
    </View>
  )
}

export default DetalhesPaciente

const styles = StyleSheet.create({})