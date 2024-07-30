import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';
import { hasErrorCPF, hasErrorNome, hasErrorTelefone } from '../../../scripts/Validators';
import { Masks } from 'react-native-mask-input';

const CadastroResponsavel = ({subTitulo}) => {
    const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);

    const [errors, setErrors] = useState({
      nome: false,
      cpf: false,
      telefone: false,
    });

  return (
    <View style={{flex: 1, marginTop:25 }}>

      <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>

      <CustomTextInput
        label="Nome completo"
        iconLeft='pencil'
        error={errors.nome}
        errorLabel=''
        onBlur={hasErrorNome(paciente.responsavel.nome)}
        onChange={(e: any) => setPaciente({ ...paciente, responsavel: { ...paciente.responsavel, nome: e }})} 
        value={paciente.responsavel.nome} 
        height={45}
        //bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
      />
      
      <CustomTextInput
        label="CPF"
        iconLeft='card-account-details'
        keyboardType='decimal-pad'
        error={errors.cpf}
        onBlur={hasErrorCPF(paciente.responsavel.cpf)}
        onChange={(e: any) => setPaciente({ ...paciente, responsavel: { ...paciente.responsavel, cpf: e }})} 
        value={paciente.responsavel.cpf} 
        height={45}
        //bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        maxLeng={14}
        mask={Masks.BRL_CPF}
        
      />
      <CustomTextInput
        label="Telefone"
        iconLeft='phone'
        keyboardType='decimal-pad'
        error={errors.telefone}
        onBlur={hasErrorTelefone(paciente.responsavel.telefone)}
        onChange={(e) => setPaciente({ ...paciente, telefone: e })}
        value={paciente.responsavel.telefone}
        height={45}
        //bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        maxLeng={15}
        mask={Masks.BRL_PHONE}
      />
    </View>
  )
}

export default CadastroResponsavel

const styles = StyleSheet.create({
  titulo:{
    fontWeight: 600,
    alignSelf: 'center',
    marginBottom: 15,
  }
})