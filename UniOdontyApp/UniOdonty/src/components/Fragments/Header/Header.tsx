import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Chip, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const Header = ({titulo}) => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation();

  return (
    <>
        <Appbar.Header style={{backgroundColor: theming.backgroundTab, height: 50}}>                            
            <Appbar.Action icon="arrow-left" color={theming.iconActive} onPress={() => {navigation.goBack()}} />
        </Appbar.Header>
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