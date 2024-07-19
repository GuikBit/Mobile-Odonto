import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Chip, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const HeaderAdm = () => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation()
    const [buscar, setBuscar] = useState('');
    const [ativo, setAtivo] = useState(true);

  return (
    <>
        <Appbar.Header style={{backgroundColor: theming.backgroundTab, justifyContent: 'space-around', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>        
            <View style={{width: '100%'}}>
                <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>Área Adminstrativa</Text>
            </View>           
        </Appbar.Header>
        <View style={{position: 'absolute', top: 0, right:5, zIndex: 2}}>
            <IconButton icon='menu' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.navigate('Config')}} />
        </View>
    </>
  )


}

export default HeaderAdm

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