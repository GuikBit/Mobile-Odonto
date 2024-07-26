import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Appbar, Icon, IconButton, Modal, Portal, Searchbar } from 'react-native-paper'
import { GlobalContext } from '../../../globals/GlogalContext';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const HeaderConsulta = ({filtro, setFiltro}) => {
    const { theming, useScaledFontSize, fontsSize} = useContext(GlobalContext);
    const navigation = useNavigation()
    const [paciente, setPaciente] = useState('');
    const [data, setData] = useState('');
    const [dentista, setDentista] = useState('');   
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    function valueSearchbar() {
        const values = [];
    
        if (paciente !== '') {
            values.push(paciente);
        }
    
        if (data) {
            values.push(data);
        }
    
        if (dentista) {
            values.push(dentista);
        }
    
        return values.join(', ');
    }

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

    const clearSearchbar = () => {
        setPaciente('');
        setData('');
        setDentista('');
    };
    
    useEffect(()=>{

        setFiltro({...filtro, paciente: paciente, data: data, dentista: dentista})


        // return (()=>{
        //     setBuscar('');
        //     setData('');
        //     setDentista('');
        // });

    },[paciente, data, dentista])
    const handerFiltro = () =>{
        setFiltro({...filtro, buscar: paciente})
    }



  return (
    <>
        <View style={{backgroundColor: theming.backgroundTab, flexDirection: 'row', height: 40, alignContent: 'center', alignItems: 'center', zIndex: 1}}>
            <View style={{width: '100%'}}>
                <Text style={[styles.titulo, { fontSize: useScaledFontSize(fontsSize.fontSizeSeachBar), color: theming.iconActive}]}>Consultas</Text>
            </View>
            
        </View>
        <Appbar.Header style={{backgroundColor: theming.backgroundTab, justifyContent: 'space-around', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>        
            <Searchbar
                placeholder="Buscar..."
                onChangeText={setPaciente}
                value={valueSearchbar()}
                style={[styles.seach,{backgroundColor: theming.searchBackg, color: theming.searcIcon}]}
                inputStyle={{paddingBottom: 20, color: theming.searcIcon}}   
                placeholderTextColor={theming.searcIcon}
                readOnly={data !== '' || dentista !== ''? true : false}  
                onClearIconPress={ clearSearchbar }
                iconColor={theming.searcIcon}  
                loading={false}
            />
            <Appbar.Action icon={data? 'calendar-remove':'calendar-search'} onPress={showDatePicker} color={theming.iconActive} />
            <Appbar.Action icon="account-search" onPress={showModal} color={theming.iconActive} />
        </Appbar.Header>

        <View style={{position: 'absolute', top: 0, right:5, zIndex: 2}}>
            <IconButton icon='cog' size={22} iconColor={theming.iconActive} onPress={()=>{navigation.navigate('Config')}} />
        </View>

        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                <Text>Example Modal.  Click outside this area to dismiss. teste</Text>
            </Modal>
        </Portal>
    </>
  )


}

export default HeaderConsulta

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