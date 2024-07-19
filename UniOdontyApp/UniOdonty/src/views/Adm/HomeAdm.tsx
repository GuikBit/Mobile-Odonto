import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderAdm from '../../components/Fragments/Header/HeaderAdm';
import { Card } from 'react-native-paper';

const HomeAdm = () => {
    const { theming } = useContext(GlobalContext);
    return (
      <View style={{flex: 1, backgroundColor: theming.background}}>
        <HeaderAdm />

        <ScrollView style={{flex: 1}}>
          
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Text>Empresa</Text>
          </View>
          <Card style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10,backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Informações empresarias</Text>
          </Card>

          <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <Card style={{flexDirection: 'row', width: '36%',  backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Inventário</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '60%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Ponto Eletronico</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10,marginHorizontal: 10}}>
          <Card style={{flexDirection: 'row', width: '55%', backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Estoque</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '41%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Ponto Eletronico</Text>
            </Card>
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Text>Finanças</Text>
          </View>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
          <Card style={{flexDirection: 'row', width: '48%', backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Entradas</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '48%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Saidas</Text>
            </Card>
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Text>Relatóros</Text>
          </View>
          
          <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <Card style={{flexDirection: 'row', width: '30%', backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Fat. mensal</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '32%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Fat. Trimestral</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '30%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Fat. Anual</Text>
            </Card>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <Card style={{flexDirection: 'row', width: '30%', backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Pendencias</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '32%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>A receber</Text>
            </Card>
            <Card style={{flexDirection: 'row', width: '30%', marginLeft: 10, backgroundColor: theming.cardBackg, height: 100, justifyContent: 'center', alignItems: 'center'}}>
              <Text>A pagar</Text>
            </Card>
          </View>
          <View style={{height: 10}}></View>

        </ScrollView>
        
      </View>
    )
}

export default HomeAdm

const styles = StyleSheet.create({})