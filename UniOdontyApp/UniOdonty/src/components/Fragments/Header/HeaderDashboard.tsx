import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const HeaderDashboard = () => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation()
    const [especialidade, setEspecialidade] = useState('');
    const [procedimento, setProcedimento] = useState('');
    const [data, setData] = useState('');
    const [dentista, setDentista] = useState('');   
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    

    const showDatePicker = () => {
        if(data !== ''){
            setData('');
        }else{
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: (event, selectedDate) => {
                if (selectedDate) {
                    setData(selectedDate.toLocaleDateString());
                }
            },
            mode: 'date',
            is24Hour: true,
        });
        }
    };



  return (
    <>
        <View style={{backgroundColor: theming.backgroundTab, flexDirection: 'row', height: 40, alignContent: 'center', alignItems: 'center', zIndex: 1}}>
            <View style={{width: '100%'}}>
                <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>Dashboards</Text>
            </View>
        </View>
        
        <Appbar.Header style={{backgroundColor: theming.backgroundTab, justifyContent: 'space-around', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginTop: 20}}>        
            <View style={{justifyContent: 'center', alignItems: 'center', width: '25%', marginBottom: 5}}>
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeSubTitulo), fontWeight: 600 }}>
                    Data
                </Text>
                <TouchableOpacity onPress={showDatePicker}style={{marginVertical: 5}}>
                    <Icon source={data? 'calendar-remove':'calendar-blank'} size={24} color={theming.iconActive} />
                </TouchableOpacity>     
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeLabel), fontWeight: 600 }}>
                    {data}
                </Text>        
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '25%',marginBottom: 5}}>

                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeSubTitulo), fontWeight: 600 }}>
                    Dentista
                </Text>
                <TouchableOpacity onPress={()=>{}}style={{marginVertical: 5}}>
                    <Icon source={dentista? 'tooth':'tooth-outline'} size={24} color={theming.iconActive} />
                </TouchableOpacity>     
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeLabel), fontWeight: 600 }}>
                    {dentista}
                </Text>               
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '25%',marginBottom: 5}}>

                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeSubTitulo), fontWeight: 600 }}>
                    Procedimento
                </Text>
                <TouchableOpacity onPress={()=>{}}style={{marginVertical: 5}}>
                    <Icon source={procedimento? 'file-document-edit':'file-document-edit-outline'} size={24} color={theming.iconActive} />
                </TouchableOpacity>     
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeLabel), fontWeight: 600 }}>
                    {procedimento}
                </Text> 
                  
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '25%',marginBottom: 5}}>
                
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeSubTitulo), fontWeight: 600 }}>
                    Especialidade
                </Text>
                <TouchableOpacity onPress={()=>{}}style={{marginVertical: 5}}>
                    <Icon source={especialidade? 'wrench':'wrench-outline'} size={24} color={theming.iconActive} />
                </TouchableOpacity>     
                <Text style={{color: theming.iconActive, fontSize: useScaledFontSize(fontsSize.fontSizeLabel), fontWeight: 600 }}>
                    {especialidade}
                </Text> 
                              
            </View>
        </Appbar.Header>
        <View style={{position: 'absolute', top: 0, right:5, zIndex: 2}}>
            <IconButton icon='cog' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.navigate('Config')}} />
        </View>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
      </Portal>
    </>
  )


}

export default HeaderDashboard;

const styles = StyleSheet.create({
    seach:{
        width: '63%',
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