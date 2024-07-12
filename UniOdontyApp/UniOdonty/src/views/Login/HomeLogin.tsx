import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';

const HomeLogin = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
        <Text>HomeLogin</Text>
      </View>
    )
}

export default HomeLogin

const styles = StyleSheet.create({})