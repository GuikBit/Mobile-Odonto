import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';

const HomeDentista = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
        <Text>HomeDentista</Text>
      </View>
    )
}

export default HomeDentista

const styles = StyleSheet.create({})