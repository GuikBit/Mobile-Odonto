import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../components/Fragments/Header/Header'
import { IconButton } from 'react-native-paper'
import { GlobalContext } from '../../globals/GlogalContext'
import ChevronAnimate from '../../components/Fragments/ChevronAnimated'

const HomeConfiguracao = () => {

  const { theming } = useContext(GlobalContext);

  return (
    <View style={{flex: 1,backgroundColor: theming.background }}>
      <Header titulo='Configurações' voltar={true} config={false}/>
      
      <View style={[styles.card, {borderColor: theming.background, backgroundColor: theming.cardBackg }]} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} > 
          <IconButton
            icon="account"
            iconColor={theming.corTitulo}
            size={20}              
          />
          <Text style={[styles.titulo, {color: theming.corTitulo}]}>Usuário</Text>
          <ChevronAnimate onPress={()=>{}} size={20} reverse={false}/>
        </View>
      </View>

      <View style={[styles.card, {borderColor: theming.background, backgroundColor: theming.cardBackg }]} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} > 
          <IconButton
            icon="bell"
            iconColor={theming.corTitulo}
            size={20}              
          />
          <Text style={[styles.titulo, {color: theming.corTitulo}]}>Notificação</Text>
          <ChevronAnimate onPress={()=>{}} size={20} reverse={false}/>
        </View>
      </View>

      <View style={[styles.card, {borderColor: theming.background, backgroundColor: theming.cardBackg }]} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}} > 
          <IconButton
            icon="dots-vertical"
            iconColor={theming.corTitulo}
            size={20}              
          />
          <Text style={[styles.titulo, {color: theming.corTitulo}]}>Outros</Text>
          <ChevronAnimate onPress={()=>{}} size={20} reverse={false}/>
        </View>
        <View>
          
        </View>
      </View>
    </View>
  )
}

export default HomeConfiguracao

const styles = StyleSheet.create({
 card :{
    marginHorizontal: 5,   
    marginTop: 20,
    padding: 10,           
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,

  }, titulo:{
    fontSize: 20,
    fontWeight: 700,
    alignSelf: 'center',

  }
})