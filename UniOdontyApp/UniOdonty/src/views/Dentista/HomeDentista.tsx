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

const HomeDentista = () => {
  const { mudarTheming, setSettings, settings, theming } = useContext(GlobalContext);
  const { data, isLoading } = useGetDentistasAuth();
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
      <HeaderDentista  />
      
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