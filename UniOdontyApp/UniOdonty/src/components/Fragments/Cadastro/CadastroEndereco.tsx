import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';

const CadastroEndereco = ({subTitulo}) => {
    const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);

  return (
    <View style={{flex: 1, backgroundColor: theming.background, marginTop: 25 }}>
      <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>
      <CustomTextInput label="CEP" iconLeft='map-marker-radius' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, cep: e }})} value={paciente.endereco.cep} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Cidade" iconLeft='city' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, cidade: e }})} value={paciente.endereco.cep} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Bairro" iconLeft='map' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, bairro: e }})} value={paciente.endereco.bairro} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Logradouro" iconLeft='map' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, rua: e }})} value={paciente.endereco.rua} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Numero" iconLeft='numeric' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, numero: e }})} value={paciente.endereco.numero} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Complemento" iconLeft='map-plus' onChange={(e: any) => setPaciente({ ...paciente, endereco: { ...paciente.endereco, complemento: e }})} value={paciente.endereco.complemento} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />



    </View>
  )
}

export default CadastroEndereco

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 600,
        alignSelf: 'center',
        
    }
})