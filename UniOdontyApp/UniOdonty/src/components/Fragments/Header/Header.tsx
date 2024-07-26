import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Chip, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const Header = ({titulo, voltar, config}) => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation();

  return (
    <>
        <View style={{backgroundColor: theming.backgroundTab, flexDirection: 'row', height: 60, alignContent: 'center', alignItems: 'center', zIndex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
            <View style={{width: '100%'}}>
                <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>{titulo}</Text>
            </View>
        </View>
        {/* <Appbar.Header style={{backgroundColor: theming.backgroundTab, justifyContent: 'space-around', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>        
            <View style={{backgroundColor: theming.backgroundTab, flexDirection: 'row', height: 40, alignContent: 'center', alignItems: 'center', zIndex: 1}}>
                <View style={{width: '100%'}}>
                    <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>{titulo}</Text>
                </View>            
            </View>
        </Appbar.Header> */}

        {config === true && (
            <View style={{position: 'absolute', top: 0, right:5, zIndex: 2}}>
                <IconButton icon='cog' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.navigate('Config')}} />
            </View>
        )}

        {voltar === true && (
            <View style={{position: 'absolute', top: 0, left:5, zIndex: 2}}>
                <IconButton icon='arrow-left' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.goBack()}} />
            </View>
        )}

    </>
  )


}

export default Header

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