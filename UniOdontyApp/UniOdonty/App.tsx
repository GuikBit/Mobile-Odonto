import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeAdm from './src/views/Adm/HomeAdm';
import HomeDashboard from './src/views/Dashboard/HomeDashboard';
import HomePaciente from './src/views/Paciente/HomePaciente';
import HomeDentista from './src/views/Dentista/HomeDentista';
import HomeConsulta from './src/views/Consulta/HomeConsulta';
import HomeLogin from './src/views/Login/HomeLogin';
import { Icon, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalContext, GlobalProvider } from './src/globals/GlogalContext';
import { AuthProvider } from './src/globals/AuthContext';
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';
import { theme } from './src/globals/Theming';
import HomeConfiguracao from './src/views/Configuracao/HomeConfiguracao';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { settings } = React.useContext(GlobalContext);

  return (
    <>
      <StatusBar backgroundColor={settings.theming === 'light' || settings.theming === 'auto' ? '#174F80' : '#171B21'} />
      <FlashMessage
        titleStyle={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginRight: 35, paddingTop: 2 }}
        textStyle={{ fontSize: 16, textAlign: 'center', fontWeight: '500', marginRight: 25 }}
        position="top"
        animated={true}
        duration={1800}
        floating={true}
      />
      <StackNavigator />      
    </>
  );
};

const MainApp: React.FC = () => {

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <GlobalProvider>              
              <App />
            </GlobalProvider>
          </AuthProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
};



function TabNavigator() {

  const { theming } = React.useContext(GlobalContext);

  return (
    <Tab.Navigator
      initialRouteName="Consulta"
      activeColor={theming.iconActive}
      inactiveColor={theming.iconInative} 
      shifting={false}
      barStyle={{backgroundColor: theming.backgroundTab}}
      activeIndicatorStyle={{backgroundColor: theming.activeIndicatorBackground}}
      sceneAnimationEnabled={false}
      sceneAnimationType={'opacity'}
      style={{backgroundColor: theming.background}}
    >
      <Tab.Screen 
        name="ADM"
        component={HomeAdm} 
        options={{
          tabBarIcon: ({color, focused }) => (
            <Icon
              source={focused ? 'home' : 'home-outline'} 
              size={26}
              color={ color }
            />
          ),
        }}        
      
      />
      <Tab.Screen 
        name="Dashboard" 
        component={HomeDashboard} 
        options={{
          tabBarIcon: ({ color, focused  }) => (
            <Icon 
              source={focused ? 'view-dashboard' : 'view-dashboard-outline'}
              size={26}
              color={ color }
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Consulta" 
        component={HomeConsulta} 
        options={{
          tabBarIcon: ({color, focused  }) => (
            <Icon 
              source={focused ? 'briefcase': 'briefcase-outline'}
              size={26}
              color={ color }
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Paciente" 
        component={HomePaciente}
        options={{          
          tabBarIcon: ({color, focused }) => (
            <Icon 
              source={focused ? 'account-multiple' : 'account-multiple-outline'}
              size={26}
              color={ color }
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Dentista" 
        component={HomeDentista} 
        options={{
          tabBarIcon: ({color, focused  }) => (
            <Icon 
              source={focused ? 'tooth': 'tooth-outline'}
              size={26}
              color={ color }
            />
          ),
        }} 
      />
      
      
    </Tab.Navigator>
  );
}

function StackNavigator(){

  //const { theming } = React.useContext(GlobalContext);

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={HomeLogin} options={{ headerShown: false }} />
      <Stack.Screen name="Config" component={HomeConfiguracao} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}



export default MainApp;
