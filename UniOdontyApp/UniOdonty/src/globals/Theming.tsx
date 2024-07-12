import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const ThemingLight = { 

    primary: '#2070b4',
    secundary: '#24aae3',
    background: '#ECF2F9',

    //tabNavigation
    iconActive: '#f2f8fd',
    iconInative: '#8fc2ea',
    backgroundTab: '#2070b4',
    activeIndicatorBackground: '#112740'
}

export const ThemingDark = { 

    primary: '#2070b4',
    secundary: '#24aae3',
    background: '#000',

    //tabNavigation     
    iconActive: '#e4eefa',
    iconInative: '#535D69',
    backgroundTab: '#232A33',
    activeIndicatorBackground: '#2070b4'
}