import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderDentista from '../../components/Fragments/Header/HeaderDentista';
import { ActivityIndicator, AnimatedFAB, Button } from 'react-native-paper';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGetDentistasAuth } from '../../services/Query/QueryDentista';
import { useNavigation } from '@react-navigation/native';
import CardConsulta from '../../components/CardConsulta';
import CardDentista from '../../components/CardDentista';

type Dentista = {
  id: number;
  nome: string;
  telefone: string;
  cro: string;
  especialidade: string;
  dataNascimento: string;
};

const HomeDentista = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  //const { data, isLoading } = useGetDentistasAuth();
  const navigation = useNavigation();
  const [isExtended, setIsExtended] = useState(true);


  const handlerTema = () =>{
    setSettings({...settings, theming: 'dark'});
  }

  const handlerTemaClaro = () =>{
    setSettings({...settings, theming: 'light'});
  }

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const gerarDentistas = (quantidade: number): Dentista[] => {
    const dentistas: Dentista[] = [];
    const nomes = ["Dr. Silva", "Dr. Oliveira", "Dr. Almeida", "Dr. Souza", "Dr. Fernandes", "Dra. Lima", "Dra. Rocha", "Dr. Costa", "Dr. Martins", "Dr. Ribeiro"];
    const especialidades = ["Ortodontia", "Endodontia", "Periodontia", "Prótese", "Odontopediatria"];
  
    const gerarTelefone = (): string => {
      const prefixo = "(11) 9";
      const numero = Math.floor(Math.random() * 90000000 + 10000000).toString();
      return prefixo + numero;
    };
  
    const gerarCro = (): string => {
      const numero = Math.floor(Math.random() * 90000 + 10000).toString();
      return `CRO-${numero}`;
    };

    const gerarDataNascimento = (): string =>{
      const  dataConsulta= new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0];
      return dataConsulta;
    }
  
    for (let i = 0; i < quantidade; i++) {
      const dentista: Dentista = {
        id: i + 1,
        nome: nomes[Math.floor(Math.random() * nomes.length)],
        telefone: gerarTelefone(),
        cro: gerarCro(),
        dataNascimento: gerarDataNascimento(),
        especialidade: especialidades[Math.floor(Math.random() * especialidades.length)]
      };
      dentistas.push(dentista);
    }
  
    return dentistas;
  };

    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theming.background }}>           
      <HeaderDentista  />
      {/* isLoading */}
      {false ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator animating={true} color={theming.primary} size={60} />
        </View>
      ) : (
        <>   
                
          <FlatList
            data={gerarDentistas(5)}
            keyExtractor={(item) => item.id.toString()}
            onScroll={onScroll}
            style={{flex:1,paddingBottom: 5}}
            renderItem={({ item }) => (
              <CardDentista
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
        onPress={() => console.log('Pressed')}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        color={theming.iconActive}
        style={[{position:'absolute', bottom: 15, right: 10, backgroundColor: theming.primary, color: theming.iconActive }, ]}
      />     
    </GestureHandlerRootView>
    )
}

export default HomeDentista

const styles = StyleSheet.create({})