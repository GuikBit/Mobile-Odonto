import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderPaciente from '../../components/Fragments/Header/HeaderPaciente';
import { ActivityIndicator, AnimatedFAB, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGetPacientesAuth } from '../../services/Query/QueryPaciente';
import CardPaciente from '../../components/CardPaciente';

type Paciente = {
  id: number;
  nome: string;
  telefone: string;
  numPasta: string;
  cpf: string;
  dataNascimento: Date;
};
const HomePaciente = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  const { data, isLoading } = useGetPacientesAuth();
  const navigation = useNavigation();
  const [isExtended, setIsExtended] = useState(true);

  const handlerTema = () =>{
    setSettings({...settings, theming: 'dark'});
  }

  const handlerTemaClaro = () =>{
    setSettings({...settings, theming: 'light'});
  }
  
  // const gerarPacientes = (quantidade: number): Paciente[] => {
  //   const pacientes: Paciente[] = [];
  //   const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda", "Felipe", "Gabriela", "Hugo", "Isabela", "João", "Karina", "Leonardo", "Mariana", "Nathan", "Olivia", "Pedro", "Quintino", "Rafaela", "Sofia", "Thiago"];
  
  //   const gerarTelefone = (): string => {
  //     const prefixo = "(11) 9";
  //     const numero = Math.floor(Math.random() * 90000000 + 10000000).toString();
  //     return prefixo + numero;
  //   };
  
  //   const gerarCpf = (): string => {
  //     const gerarNumero = () => Math.floor(Math.random() * 9);
  //     return `${gerarNumero()}${gerarNumero()}${gerarNumero()}.${gerarNumero()}${gerarNumero()}${gerarNumero()}.${gerarNumero()}${gerarNumero()}${gerarNumero()}-${gerarNumero()}${gerarNumero()}`;
  //   };
  
  //   const gerarDataNascimento = (): Date => {
  //     const ano = Math.floor(Math.random() * 50 + 1970); // entre 1970 e 2020
  //     const mes = Math.floor(Math.random() * 12); // entre 0 e 11
  //     const dia = Math.floor(Math.random() * 28) + 1; // entre 1 e 28
  //     return new Date(ano, mes, dia);
  //   };
  
  //   for (let i = 0; i < quantidade; i++) {
  //     const paciente: Paciente = {
  //       id: i + 1,
  //       nome: nomes[Math.floor(Math.random() * nomes.length)],
  //       telefone: gerarTelefone(),
  //       numPasta: `P${(i + 1).toString().padStart(4, '0')}`,
  //       cpf: gerarCpf(),
  //       dataNascimento: gerarDataNascimento()
  //     };
  //     pacientes.push(paciente);
  //   }
  
  //   return pacientes;
  // };
  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  

    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theming.background }}>           
      
      <HeaderPaciente />
      
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator animating={true} color={theming.primary} size={60} />
        </View>
      ) : (
        <>   
                
          <FlatList                
            data={data}
            keyExtractor={(item) => item.id.toString()}
            onScroll={onScroll}
            renderItem={({ item }) => (
              <CardPaciente
                usuario={item}
                onPress={() => {
                  navigation.navigate('Main', { screen: 'DetalhesConsulta', params: { id: item.id } });
                }}
              />
            )}
          />

      

        </>
      )}   
      <AnimatedFAB
        icon={'plus'}
        label={'Novo'}
        extended={isExtended}
        onPress={() => {navigation.navigate('NovoPaciente')}}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        color={theming.iconActive}
        style={[{position:'absolute', bottom: 15, right: 10, backgroundColor: theming.primary }, ]}
      />     
    </GestureHandlerRootView>
    )
}

export default HomePaciente

const styles = StyleSheet.create({})