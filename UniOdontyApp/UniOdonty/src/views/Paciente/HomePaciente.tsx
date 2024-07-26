import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../globals/GlogalContext';
import HeaderPaciente from '../../components/Fragments/Header/HeaderPaciente';
import { ActivityIndicator, AnimatedFAB, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGetPacientesAuth } from '../../services/Query/QueryPaciente';
import CardPaciente from '../../components/CardPaciente';

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