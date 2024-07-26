import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';

const CadastroPaciente = ({subTitulo}) => {

  const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);


  return (
    <View style={{flex: 1, backgroundColor: theming.background , marginTop: 25, paddingVertical: 5 }}>

      <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>

      <CustomTextInput label="Nome" iconLeft='pencil' onChange={(e: any) => setPaciente({ ...paciente, nome: e })} value={paciente.nome} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Login" iconLeft='account' onChange={(e: any) => setPaciente({ ...paciente, login: e })} value={paciente.login} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Senha" iconLeft='key' onChange={(e: any) => setPaciente({ ...paciente, senha: e })} value={paciente.senha} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="E-mail" iconLeft='email' onChange={(e: any) => setPaciente({ ...paciente, email: e })} value={paciente.email} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="CPF" iconLeft='card-account-details' onChange={(e: any) => setPaciente({ ...paciente, cpf: e })} value={paciente.cpf} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Telefone" iconLeft='phone' onChange={(e: any) => setPaciente({ ...paciente, telefone: e })} value={paciente.telefone} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
      <CustomTextInput label="Data Nascimento" iconLeft='calendar-blank' onChange={(e: any) => setPaciente({ ...paciente, dataNasc: e })} value={paciente.dataNasc} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
    </View>
  )
}

export default CadastroPaciente

const styles = StyleSheet.create({
  titulo:{
    fontWeight: 600,
    alignSelf: 'center',
    
}
})