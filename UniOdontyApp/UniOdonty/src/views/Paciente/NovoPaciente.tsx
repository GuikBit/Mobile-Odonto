import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../components/Fragments/Header/Header'
import { GlobalContext } from '../../globals/GlogalContext'
import CustomTextInput from '../../components/Fragments/CustomTextInput'
import CadastroPaciente from '../../components/Fragments/Cadastro/CadastroPaciente'
import Stepper from 'react-native-stepper-ui';
import CadastroResponsavel from '../../components/Fragments/Cadastro/CadastroResponsavel'
import CadastroEndereco from '../../components/Fragments/Cadastro/CadastroEndereco'
import CadastroAnamnese from '../../components/Fragments/Cadastro/CadastroAnamnese'

const NovoPaciente = () => {

  const {theming, settings, useScaledFontSize, fontsSize} = useContext(GlobalContext);
  const [active, setActive] = useState(0);
  const content = [
    <CadastroPaciente subTitulo="Informações Pessoais" />,    
    <CadastroResponsavel subTitulo="Responsável" />,
    <CadastroEndereco subTitulo="Endereço" />,
    <CadastroAnamnese subTitulo="Anamnese" />,
  ];
  const subTitulo = {
    0: "Informações Pessoais",
    1: "Responsável",
    2: "Endereço",
    3: "Anamnese"
  }

  const handlePostPaciente = () => {
    
    // if(validaDados()){
    //   //mutate(paciente);
    //   //limpaPaciente();
    //   verificaRetorno();
    // }
    
  };

  // function  verificaRetorno() {

  //   if(route.params.interno === true){
  //     navigation.navigate('Lista Pacientes', {novo: true})
  //   }
  //   else{
  //     navigation.navigate('Login', {novo: true})
  //   }
    
    
  // }
  // function validaDados(){
  //   if(paciente.nome === '' || paciente.login === '' || paciente.senha === '' ){
  //     setVazio(true)
  //     return false
  //   }
  //   return true
  // }


  // useFocusEffect(
  //   useCallback(() => {
  //     if(!isLoading){
  //       preenchePacienteDetalhes()

  //     }
  //     return() =>{}
  //   }, []));

  //   function preenchePacienteDetalhes(){
  //     if(!isLoading){
  //       // console.log(datashoppi)
  //       setPaciente(data)
  //     }
      
  //   }

  return (
    <View style={{flex: 1, backgroundColor: theming.background}}>
      <Header titulo="Novo Paciente" voltar={true}  config={false}/>

      <View style={{marginHorizontal: 20, marginVertical: 40}}>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={handlePostPaciente}
          onNext={() => setActive((p) => p + 1)}
          buttonStyle={styles.btn}
          buttonTextStyle={styles.btnText}
          stepStyle={styles.teste}
          lineBtn={theming.linebtn}
        />
      </View>
    </View>
  )
}

export default NovoPaciente

const styles = StyleSheet.create({
  btnStepper: {
    backgroundColor: '#16181b', //Cor de Fundo
    borderColor: '#24AAE3', //Azul Claro
    borderWidth: 1,
    width: 155,
    height: 45,
    paddingTop: 5,
    borderRadius: 50,
  },
  btn: {
    marginTop: 20,
    width: 100,
    borderRadius: 50,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  teste: {
    backgroundColor: '#2070B4',
  }, 
  titulo: {

  }, titulo:{
    fontWeight: 600,
    alignSelf: 'center',
    
}
})