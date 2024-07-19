import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GlobalContext } from '../../globals/GlogalContext';
import { ActivityIndicator, AnimatedFAB, FAB, PaperProvider, Portal } from 'react-native-paper';
import HeaderConsulta from '../../components/Fragments/Header/HeaderConsulta';
import { theme } from '../../globals/Theming';
import { useNavigation } from '@react-navigation/native';
import { useGetConsultasAuth } from '../../services/Query/QueryConsultas';
import { FlatList } from 'react-native-gesture-handler';
import CardConsulta from '../../components/CardConsulta';

type Consulta = {
  id: number;
  dataConsulta: string;
  nomePaciente: string;
  dentista: {
    nome: string;
  };
  [key: string]: any;
};

type Filtro = {
  paciente: string;
  data: string;
  dentista: string;
};

const HomeConsulta: React.FC = () => {
  const navigation = useNavigation();
  const { data, isLoading, isSuccess } = useGetConsultasAuth();   
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
    
  const [state, setState] = useState({ open: false });
  const [dataFiltro, setDataFiltro] = useState<Consulta[]>([]);
  const [filtro, setFiltro] = useState<Filtro>({
    paciente: '',
    data: '',
    dentista: ''
  });
  const [isExtended, setIsExtended] = useState(true);
  useEffect(() => {
    if (isSuccess) {
      buscarConsulta();
    }
  }, [filtro, data]);

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;
    
  const handlerTema = () => {
    if (settings.theming === 'dark') {
      setSettings({ ...settings, theming: 'light' });
    } else {      
      setSettings({ ...settings, theming: 'dark' });
    }
  };

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  const buscarConsulta = () => {
    if (filtro.paciente !== '' || filtro.data !== '' || filtro.dentista !== '') {
      const filteredData = data.filter((consulta: Consulta) => {
        const consultaDate = new Date(consulta.dataConsulta);
        const filterDate = filtro.data ? formatDate(filtro.data) : null;

        const pacienteMatch = filtro.paciente
          ? consulta.paciente.nome.toLowerCase().includes(filtro.paciente.toLowerCase())
          : true;

        // const dataMatch = filtro.data
        //   ? filterDate && consultaDate.toDateString() === filterDate.toDateString()
        //   : true;

        // const dentistaMatch = filtro.dentista
        //   ? consulta.dentista.nome.toLowerCase().includes(filtro.dentista.toLowerCase())
        //   : true;

        return pacienteMatch ;
      });
      setDataFiltro(filteredData);
    } else {
      setDataFiltro(data);
    }
  };

  
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: theming.background }}>           
      <HeaderConsulta filtro={filtro} setFiltro={setFiltro} />
      
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator animating={true} color={theming.primary} size={60} />
        </View>
      ) : (
        <>   
                
          <FlatList
            data={dataFiltro.length === 0 ? data : dataFiltro}
            keyExtractor={(item) => item.id.toString()}
            onScroll={onScroll}
            renderItem={({ item }) => (
              <CardConsulta
                consulta={item}
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
  );
};

export default HomeConsulta;

const styles = StyleSheet.create({});
