import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Chip, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const HeaderDentista = () => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation()
    const [buscar, setBuscar] = useState('');
    const [ativo, setAtivo] = useState(true);

  return (
    <>
        <View style={{backgroundColor: theming.backgroundTab, flexDirection: 'row', height: 40, alignContent: 'center', alignItems: 'center', zIndex: 1}}>
            <View style={{width: '100%'}}>
                <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>Dentistas</Text>
            </View>
        </View>
        <Appbar.Header style={{backgroundColor: theming.backgroundTab, justifyContent: 'space-around', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>        
           <View style={{width: '75%',alignItems: 'center'}}>
                <Searchbar
                    placeholder="Buscar..."
                    onChangeText={setBuscar}
                    value={buscar}
                    style={[styles.seach,{backgroundColor: theming.searchBackg, color: theming.searcIcon}]}
                    inputStyle={{paddingBottom: 20, color: theming.searcIcon}}   
                    placeholderTextColor={theming.searcIcon} 
                    iconColor={theming.searcIcon}  
                    loading={false}
                />
           </View>
           <View style={{width: '25%', alignItems: 'center'}}>           
                <Chip 
                    icon={()=>(<Icon source={ativo?'check-circle-outline':'block-helper'} size={ativo? 14:12} color={theming.iconActive} />)} 
                    onPress={() => {setAtivo(!ativo)}}
                    style={{backgroundColor: ativo? theming.success : theming.error, width: 75}}
                >
                    <Text style={{color: theming.iconActive}}>{ ativo ? "Ativo": "Inativo"} </Text>
                </Chip>            
           </View>
            
        </Appbar.Header>
        <View style={{position: 'absolute', top: 0, right:5, zIndex: 2}}>
            <IconButton icon='menu' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.navigate('Config')}} />
        </View>
    </>
  )


}

export default HeaderDentista

const styles = StyleSheet.create({
    seach:{
        width: '95%',
        height: 35,
        padding: 0,
        margin: 0,
        backgroundColor: 'white',

    }, titulo:{
        fontWeight: 600,
        alignSelf: 'center',
        
    }, containerStyle:{
        backgroundColor: 'white', padding: 20
    }
})