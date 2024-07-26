import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';

const CadastroResponsavel = ({subTitulo}) => {
    const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);


  return (
    <View style={{flex: 1, backgroundColor: theming.background, marginTop:25 }}>
       <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>
      <CustomTextInput label="Nome" iconLeft='pencil' onChange={(e: any) => setPaciente({ ...paciente, responsavel: { ...paciente.responsavel, nome: e }})} value={paciente.responsavel.nome} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="CPF" iconLeft='card-account-details' onChange={(e: any) => setPaciente({ ...paciente, responsavel: { ...paciente.responsavel, cpf: e }})} value={paciente.responsavel.cpf} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Telefone" iconLeft='phone' onChange={(e: any) => setPaciente({ ...paciente, responsavel: { ...paciente.responsavel, telefone: e }})} value={paciente.responsavel.telefone} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
    </View>
  )
}

export default CadastroResponsavel

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 600,
        alignSelf: 'center',
        
    }
})