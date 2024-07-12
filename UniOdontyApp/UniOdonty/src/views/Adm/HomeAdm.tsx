import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';

const HomeAdm = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
        <Text>HomeAdm</Text>
      </View>
    )
}

export default HomeAdm

const styles = StyleSheet.create({})