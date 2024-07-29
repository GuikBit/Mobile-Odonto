import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';
import { HelperText, TextInput } from 'react-native-paper';
import { handlerSenha, hasErrorsEmail, hasErrorSenha, hasErrorLogin, hasErrorNome, hasErrorCPF, hasErrorTelefone, hasErrorDtNasc } from '../../../scripts/Validators';
import MaskInput, { Masks } from 'react-native-mask-input';

const CadastroPaciente = ({subTitulo}) => {

  const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);
  const [isSecure, setIsSecure ] = useState(true);

  const [errors, setErrors] = useState({
    nome: false,
    login: false,
    senha: false,
    email: false,
    cpf: false,
    telefone: false,
    dataNasc: false,
  });

  return (
    <View style={{flex: 1, backgroundColor: theming.background , marginTop: 25, }}>

      <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>

      <CustomTextInput
        label="Nome completo"
        iconLeft='pencil'
        error={errors.nome}
        errorLabel=''
        onBlur={hasErrorNome(paciente.nome)}
        onChange={(e) => setPaciente({ ...paciente, nome: e })}
        value={paciente.nome}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
      />
      <CustomTextInput
        label="Login"
        iconLeft='account'
        error={hasErrorLogin(paciente.login)}
        onChange={(e) => setPaciente({ ...paciente, login: e })}
        value={paciente.login}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
      />
      <CustomTextInput
        label="Senha"
        iconLeft='key'
        iconRight='eye'
        error={hasErrorSenha(paciente.senha)}
        isSecure={isSecure}
        handlerSenha={handlerSenha(isSecure, setIsSecure)}
        onChange={(e) => setPaciente({ ...paciente, senha: e })}
        //onBlur={() => handleBlur('senha', paciente.senha)}
        value={paciente.senha}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
      />
      <CustomTextInput
        label="E-mail"
        iconLeft='email'
        error={hasErrorsEmail(paciente.email)}
        onChange={(e) => setPaciente({ ...paciente, email: e })}
       //onBlur={() => handleBlur('email', paciente.email)}
        value={paciente.email}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        
      />
      <CustomTextInput
        label="CPF"
        iconLeft='card-account-details'
        keyboardType='decimal-pad'
        error={hasErrorCPF(paciente.cpf)}
        onChange={(e) => setPaciente({ ...paciente, cpf: e })}
        //onBlur={() => handleBlur('cpf', paciente.cpf)}
        value={paciente.cpf}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        maxLeng={14}
        mask={Masks.BRL_CPF}
        
      />
      <CustomTextInput
        label="Telefone"
        iconLeft='phone'
        keyboardType='decimal-pad'
        error={hasErrorTelefone(paciente.telefone)}
        onChange={(e) => setPaciente({ ...paciente, telefone: e })}
        //onBlur={() => handleBlur('telefone', paciente.telefone)}
        value={paciente.telefone}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        maxLeng={15}
        mask={Masks.BRL_PHONE}
      />

      <CustomTextInput
        label="Data Nascimento"
        iconLeft='calendar-blank'
        keyboardType='decimal-pad'
        error={hasErrorDtNasc(paciente.dataNasc)}
        onChange={(e) => setPaciente({ ...paciente, dataNasc: e })}
        //onBlur={() => handleBlur('dataNasc', paciente.dataNasc)}
        value={paciente.dataNasc}
        height={45}
        bgLabel={settings.theming === 'dark' ? '#222222' : '#e4e9ef'}
        maxLeng={10}
        mask={Masks.DATE_DDMMYYYY}
      />

      
    </View>
  )
}

export default CadastroPaciente

const styles = StyleSheet.create({
  titulo:{
    fontWeight: 600,
    alignSelf: 'center',
    marginBottom: 15,
}
})