import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { ThemingDark, ThemingLight } from './Theming';
import { useColorScheme, useWindowDimensions } from 'react-native';

interface Settings {
  theming: 'auto' | 'light' | 'dark';
  autenticaçãoBiometrica: boolean;
  configuracao: boolean,
  manterUserConectado: boolean;
  myNotifSolic: boolean;
  myNotifAgdm: boolean;
  myNofitVendas: boolean;
  EqpNofitSolic: boolean;
  EqpNotifAgdm: boolean;
}
interface FontSizes{
  fontSizeTitulo: number,
  fontSizeSubTitulo: number,
  fontSizeLabel: number,
  fontSizeSeachBar: number,
}

interface GlobalContextProps {
  theming: any;
  settings: Settings;
  fontsSize: FontSizes;
  setTheming: React.Dispatch<React.SetStateAction<typeof ThemingLight | typeof ThemingDark>>;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  mudarTheming: () => void;
  setFontsSize: React.Dispatch<React.SetStateAction<FontSizes>>;
  useScaledFontSize: (baseFontSize: number) => number;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  
  const [theming, setTheming] = useState({});

  const [fontsSize, setFontsSize] = useState({
    fontSizeTitulo: 24,
    fontSizeSubTitulo: 18,
    fontSizeLabel: 16,
    fontSizeSeachBar: 35,
  });

  const [settings, setSettings] = useState<Settings>({
    theming: 'auto',
    autenticaçãoBiometrica: false,
    manterUserConectado: false,
    configuracao: false,
    myNotifSolic: false,
    myNotifAgdm: false,
    myNofitVendas: false,
    EqpNofitSolic: false,
    EqpNotifAgdm: false,
  });

  

  useEffect(() => {
    mudarTheming();
  }, [settings.theming, colorScheme]);

  function mudarTheming() {
    if (settings.theming === 'auto') {
      if (colorScheme === 'light') {
        setTheming(ThemingLight);
      } else {
        setTheming(ThemingDark);
      }
    } else if (settings.theming === 'light') {
      setTheming(ThemingLight);
    } else {
      setTheming(ThemingDark);
    }
  }

  const useScaledFontSize = (baseFontSize: number) => {
    const { fontScale } = useWindowDimensions();
    return baseFontSize * fontScale;
  };

  return (
    <GlobalContext.Provider
      value={{
        theming,
        settings,
        fontsSize, 
        setFontsSize,
        setTheming,
        setSettings,
        mudarTheming,
        useScaledFontSize
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
