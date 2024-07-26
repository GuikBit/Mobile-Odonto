import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../globals/GlogalContext';
import { Button } from 'react-native-paper';
import CustomTextInput from '../../components/Fragments/CustomTextInput';
import { AuthContext } from '../../globals/AuthContext';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../services/Query/QueryAuth';
import showCustomMessage from '../../components/Fragments/FlashMensage';

// const image = { uri: 'https://img.lovepik.com/background/20211029/medium/lovepik-simple-technology-mobile-phone-wallpaper-background-image_400290776.jpg' };
const fundoB = '../../../assets/img/FundoB3.png';
const fundoD = '../../../assets/img/FundoD2.png';
const HomeLogin = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  const { login, user, setUser, userLogged } = useContext(AuthContext);

  const [isSenha, setIsSenha] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [inputErro, setInputErro] = useState({
    login: false,
    password: false,
  })

  const navigation = useNavigation();
  // useEffect(()=>{
  //   handlerTema();
  // },[])

  // const handlerTema = () => {
  //   if (settings.theming === 'dark') {
  //     setSettings({ ...settings, theming: 'light' });
  //   } else {
  //     setSettings({ ...settings, theming: 'dark' });
  //   }
  // };

  const handlerLogin = async () =>{
    setInputErro({...inputErro, login: false, password: false})
    setIsLoading(true);
    try{
      if(user.login !== null && user.password !== null && user.login !== '' && user.password !== ''){  
        const logado = await login();
  
        if(logado){
          if (userLogged && userLogged.role === 'Paciente') {
            navigation.replace('DetalhesPaciente');
          }else if(userLogged && userLogged.role === 'Dentista') {
            navigation.replace('DetalhesDentista');
          } else{
            showCustomMessage("Bem vindo de volta...", "success", false);
            navigation.navigate('Main',{ screen: 'Consulta' });
          }
          setIsLoading(false);
        }else{
          showCustomMessage("Login e ou senha não correspondem, digite novamente...", "error", false);
          setUser({...user, login: null, password: null})
          setIsLoading(false);
        }
      }else{
        if((user.login === null || user.login === '') && (user.password === null || user.password === '')){

          setInputErro({...inputErro, login: true, password: true})
          showCustomMessage("Login e Senha vazios, preencha o campo por favor", "error", false);  

        } else if(user.login === null || user.login === ''){

          setInputErro({...inputErro, login: true})
          showCustomMessage("Login vazio, preencha o campo por favor", "error", false);

        }else{

          showCustomMessage("Opss! Senha vazia, preencha o campo por favor", "error", false);
          setInputErro({...inputErro, password: true})
        }
        setIsLoading(false);
      }
    }catch(error){
      showCustomMessage("Opss! Houve um erro ao fazer o login...", "error", false);
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={settings.theming === 'dark'? require(fundoD):require(fundoB)}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center'}}
      >
        <ScrollView style={{ flex: 1}}>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
            <Image style={styles.logo} source={require('../../../assets/img/odonto.png')} />
          </View>

          <View style={[styles.containerForm, {backgroundColor: settings.theming === 'dark'? 'rgba(32, 112, 180, 0.25)':'"rgba(255, 255, 255, 0.45)"'}]}>

            <View style={{  }}>
              <CustomTextInput label="Login" iconLeft='account' error={inputErro.login} onChange={(e: any) => setUser({ ...user, login: e })} value={user.login} height={50} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
              <CustomTextInput label="Senha" iconLeft='key' iconRight={isSenha ? "eye" : "eye-off"} error={inputErro.password} onChange={(e: any) => setUser({ ...user, password: e })} value={user.password} isSecure={isSenha} handlerSenha={() => { setIsSenha(!isSenha) }} height={50} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
              {/* <Button onPress={handlerTema} mode='contained' icon='theme-light-dark'>Modo</Button> */}
              <Button onPress={() => { }} mode='contained' elevation={3} labelStyle={{fontSize: 16}} icon='account-plus'>Cadastrar</Button>
              <Button onPress={()=>{handlerLogin()}} mode='contained' elevation={3} labelStyle={{fontSize: 16}} icon='login' loading={isLoading}>Acessar</Button>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 35}}>
              <View style={{width: 35, height:35, justifyContent: 'center', alignItems: 'center', elevation: 3, backgroundColor: settings.theming === 'dark'? 'rgba(32, 112, 180, 0.50)':'"rgba(255, 255, 255)"', borderRadius: 50}}>
                <Image style={styles.google} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png'}} />
              </View>
              <View style={{width: 35, height:35, justifyContent: 'center', alignItems: 'center',elevation: 3, backgroundColor: settings.theming === 'dark'? 'rgba(32, 112, 180, 0.50)':'"rgba(255, 255, 255)"', borderRadius: 50}}>
                <Image style={styles.insta} source={{uri:'https://images.vexels.com/media/users/3/137197/isolated/preview/fb944c570182b6e89eb21f41f8c4522b-silhueta-colorida-do-instagram.png'}} />
              </View>
              <View style={{width: 35, height:35, justifyContent: 'center', alignItems: 'center',elevation: 3, backgroundColor: settings.theming === 'dark'? 'rgba(32, 112, 180, 0.50)':'"rgba(255, 255, 255)"', borderRadius: 50}}>
                <Image style={styles.face} source={{uri:'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'}} />
              </View>              
            </View>
          </View>
        
        </ScrollView>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

export default HomeLogin;

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,

  }, containerForm: {
    marginVertical: 15,
    marginHorizontal: 25,
    padding: 35,
    paddingTop: 75,
    borderRadius: 20,

  },google:{
    width: 25,
    height: 25
  }, insta:{
    width: 30,
    height: 30,

  }, face:{
    width: 43,
    height: 43
  }
});
