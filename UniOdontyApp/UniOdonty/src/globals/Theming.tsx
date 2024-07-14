import { Dimensions, useWindowDimensions } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const ThemingLight = { 
    fabColorBack: '#2070b4',
    fabColorLabel: '#f2f8fd',

    primary: '#2070b4',
    secondary: '#24aae3',
    background: '#ECF2F9',
    success: '#76DB9B',
    error: '#D9342B',

    //tabNavigation
    iconActive: '#f2f8fd',
    iconInative: '#8fc2ea',
    backgroundTab: '#2070b4',
    activeIndicatorBackground: '#112740',

    searchBackg: '#f2f8fd',
    searcIcon: '#2070b4',

    inputBorderColor: '#2070b4',
    inputBorderSelectionColor: '#2070b4',
    inputLabelColor: '#2070b4',
    inputTextColor: '#232A33',
    inputIconColor: '#2070b4',
    inputError: '#a22c28',
}

export const ThemingDark = {

    fabColorBack: '#1a3e60',
    fabColorLabel: '#f2f8fd',

    primary: '#2070b4',
    secondary: '#24aae3',
    background: '#000',
    success: '#136C34',
    error: '#8C221C',

    //tabNavigation     
    iconActive: '#e4eefa',
    iconInative: '#535D69',
    backgroundTab: '#232A33',
    activeIndicatorBackground: '#2070b4',

    searchBackg: '#535D69',
    searcIcon: '#e4eefa',

    inputBorderColor: '#2070b4',
    inputBorderSelectionColor: '#2070b4',
    inputLabelColor: '#2070b4',
    inputTextColor: '#e4eefa',
    inputIconColor: '#2070b4',
    inputError: '#a22c28',
}

export const Constants ={
    fontSizeTitulo: 24,
    fontSizeSubTitulo: 18,
    fontSizeLabel: 16
}

export const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2070b4',
      secondary: '#24aae3',
    },
  };