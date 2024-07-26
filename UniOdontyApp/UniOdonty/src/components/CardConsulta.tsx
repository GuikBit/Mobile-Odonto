import { StyleSheet, View, Text } from 'react-native';
import { Card, Chip, Icon } from 'react-native-paper';
import React, { useContext } from 'react';
import { AuthContext } from '../globals/AuthContext';
import { GlobalContext } from '../globals/GlogalContext';

const CardConsulta = ({ consulta, onPress }) => {
  //const { userLogged } = useContext(AuthContext);
  const { theming } = useContext(GlobalContext);

  const dataAtual = new Date();
  const dataConsulta = new Date(consulta.dataConsulta);

  const formatDateTime = (dateConsulta: any, datePrevista: any) => {
    const date = new Date(dateConsulta);
    const datePrev = new Date(datePrevista);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const hoursPrev = datePrev.getHours().toString().padStart(2, '0');
    const minutesPrev = datePrev.getMinutes().toString().padStart(2, '0');
    
    return {
      formattedDate: `${day}/${month}/${year}`,
      formattedTime: `${hours}:${minutes}`,
      formattedTimeTermino:  `${hoursPrev}:${minutesPrev}`
    };
  };

  const { formattedDate, formattedTime, formattedTimeTermino } = formatDateTime(consulta.dataConsulta, consulta.dataConsultaReserva);

  const getStatusStyles = () => {
    if (consulta.ausente) return { style: {borderColor: theming.cardAusente}, text: 'Ausente', color: theming.cardAusente, icon: 'account-off' };
    if (consulta.dataHoraInicioAtendimento && consulta.dataHoraFimAtendimento) return { style: {borderColor: theming.cardAtendida,}, text: 'Atendida', color: theming.cardAtendida,icon: 'check-circle-outline' };
    if (consulta.dataHoraInicioAtendimento) return { style: {borderColor: theming.cardAtendimento,}, text: 'Atendendo', color: theming.cardAtendimento,icon: 'progress-clock' };
    return { style: {borderColor: theming.cardAgendado,}, text: 'Agendada', color: theming.cardAgendado, icon: 'clock-outline' };
  };

  const status = getStatusStyles();

  return (
    <Card style={[ styles.card, status.style, {backgroundColor: theming.cardBackg} ]} onPress={onPress}>
      <View style={{position: 'absolute', top: 5, left: 5}}>
        <Icon source="account" size={60} color={theming.cardIconeBg}  />
      </View>

      <View style={{marginLeft: 60, paddingTop: 10, flexDirection: 'row', alignItems:  'center'}}>         
        <Text style={[styles.nome, {color: theming.cardText}]}>
        {
          consulta.paciente && consulta.paciente.nome 
            ? consulta.paciente.nome 
            : consulta.nomePaciente 
        }
          </Text>
          {consulta.nomePaciente &&(
            <View style={{transform: [{ rotate: '20deg' }]}}>
              <Icon source="lightning-bolt" size={18} color={theming.secondary}/>
            </View>
          )}
      </View>

      <View style={{marginTop: 7,marginLeft: 73, paddingBottom: 10, flexDirection: 'row', alignItems:  'center'}}>
        <Icon source="calendar-outline" size={16} color='#7a7d7a'/>
        <Text style={[styles.texto, {color: theming.cardText }]}>{ formattedDate } </Text>

        <Icon source="clock-outline" size={16} color='#7a7d7a'/>
        <Text style={[styles.texto, {color: theming.cardText}]}>{ formattedTime } - { formattedTimeTermino } </Text>
        
      </View>
      <View style={{position: 'absolute', top: 25, right: 10}}>
        <Icon source="tooth" size={20} color={consulta.dentista.corDentista+'c9'}  />
      </View>
    </Card>
  );
};

export default CardConsulta;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 7,
    marginTop: 10,
    borderRadius: 10,
    borderLeftWidth: 5,  
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 18,
    marginHorizontal: 3,
    marginRight: 13

  },nome:{
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 3
  },
  
});
