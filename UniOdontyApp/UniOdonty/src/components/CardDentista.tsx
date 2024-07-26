import { StyleSheet, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-paper';
import React, { useContext } from 'react';
import { GlobalContext } from '../globals/GlogalContext';

const CardDentista = ({ usuario, onPress }) => {
    const { theming } = useContext(GlobalContext);

    const formataData = () =>{
        const date = new Date(usuario.dataNascimento);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        
        const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;    
    
        return formattedDate;
      }

  return (
    <Card style={[styles.card, {backgroundColor: theming.cardBackg, borderColor: usuario.ativo? theming.primary : theming.cardInativo},]} onPress={onPress}>
        
        <View style={{flexDirection: 'row', alignItems:  'center', marginLeft: 100, marginVertical: 10}}>
            <Icon source="tooth" size={20} color={usuario.ativo?usuario.corDentista+'c9':'#7a7d7a'} />
            <Text style={[styles.nome, {color: theming.cardText}]}>{usuario.nome}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="calendar" size={16} color="#7a7d7a" />
                <Text style={[styles.texto, {color: theming.cardText }]}>
                    {usuario.dataNascimento}
                    {/* {formataData()} */}
                </Text>
            </View>
          
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="card-account-details-outline" size={16} color='#7a7d7a' />
                <Text style={[styles.texto, {color: theming.cardText }]}>          
                    {usuario.cro}
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="phone-outline" size={16} color='#7a7d7a' />
                <Text style={[styles.texto, {color: theming.cardText }]}>          
                    {usuario.telefone}
                </Text>
            </View>
            
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
            <Icon source="briefcase-variant-outline" size={16} color="#7a7d7a" />
            <Text style={[styles.texto, {color: theming.cardText }]}>
                {usuario.especialidade.tipo}
            </Text>
        </View>
    </Card>
  );
};

export default CardDentista;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 7,
        marginTop: 10,
        borderRadius: 10,
        borderLeftWidth: 5,  
        justifyContent: 'space-around',
      },
    
      nome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 3
      },
      texto: {
        fontSize: 18,
        marginHorizontal: 3,
        marginRight: 13
      },
});
