import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext'

const HomeDashboard = () => {
    const { theming } = useContext(GlobalContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: theming.background}}>
      <Text>HomeDashboard</Text>
    </View>
  )
}

export default HomeDashboard

const styles = StyleSheet.create({})