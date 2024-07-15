import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../globals/GlogalContext';
import { Button } from 'react-native-paper';
import CustomTextInput from '../../components/Fragments/CustomTextInput';
import { AuthContext } from '../../globals/AuthContext';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

// const image = { uri: 'https://img.lovepik.com/background/20211029/medium/lovepik-simple-technology-mobile-phone-wallpaper-background-image_400290776.jpg' };

const HomeLogin = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  const { user, setUser } = useContext(AuthContext);
  const [isSenha, setIsSenha] = useState(true);
  const handlerTema = () => {
    if (settings.theming === 'dark') {
      setSettings({ ...settings, theming: 'light' });
    } else {
      setSettings({ ...settings, theming: 'dark' });
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../../assets/img/Fundo2.png')}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center'}}
      >
        <ScrollView style={{ flex: 1}}>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 70 }}>
            <Image style={styles.logo} source={require('../../../assets/img/odonto.png')} />
          </View>

          <View style={[styles.containerForm, {backgroundColor: '#00000009'}]}>

            <View style={{  }}>
              <CustomTextInput label="Login" iconLeft='account' error={false} onChange={(e: any) => setUser({ ...user, login: e })} value={user.login} height={50} />
              <CustomTextInput label="Senha" iconLeft='key' iconRight={isSenha ? "eye" : "eye-off"} error={false} onChange={(e: any) => setUser({ ...user, password: e })} value={user.password} isSecure={isSenha} handlerSenha={() => { setIsSenha(!isSenha) }} height={50} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
              {/* <Button onPress={handlerTema} mode='contained' icon='theme-light-dark'>Modo</Button> */}
              <Button onPress={() => { }} mode='contained' elevation={3} labelStyle={{fontSize: 16}} icon='account-plus'>Cadastrar</Button>
              <Button onPress={() => { }} mode='contained' elevation={3} labelStyle={{fontSize: 16}} icon='login' contentStyle={{ flexDirection: 'row-reverse'}}>Acessar</Button>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 35}}>
              <View style={{width: 45, height:45, justifyContent: 'center', alignItems: 'center', elevation: 3, backgroundColor: '#FFF', borderRadius: 50}}>
                <Image style={styles.google} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png'}} />
              </View>
              <View style={{width: 45, height:45, justifyContent: 'center', alignItems: 'center',elevation: 3, backgroundColor: '#FFF', borderRadius: 50}}>
                <Image style={styles.insta} source={{uri:'https://images.vexels.com/media/users/3/137197/isolated/preview/fb944c570182b6e89eb21f41f8c4522b-silhueta-colorida-do-instagram.png'}} />
              </View>
              <View style={{width: 45, height:45, justifyContent: 'center', alignItems: 'center',elevation: 3, backgroundColor: '#FFF', borderRadius: 50}}>
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
    marginTop: 15,
    marginHorizontal: 25,
    padding: 35,
    paddingTop: 55,
    borderRadius: 20,
    
  },google:{
    width: 30,
    height: 30
  }, insta:{
    width: 35,
    height: 35,

  }, face:{
    width: 50,
    height: 50
  }
});
