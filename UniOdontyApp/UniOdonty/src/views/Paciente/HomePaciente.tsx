import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';

const HomePaciente = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
        <Text>HomePaciente</Text>
      </View>
    )
}

export default HomePaciente

const styles = StyleSheet.create({})