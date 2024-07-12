import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { ThemingDark, ThemingLight } from './Theming';
import { useColorScheme } from 'react-native';

interface Settings {
  theming: 'auto' | 'light' | 'dark';
  autenticaçãoBiometrica: boolean;
  manterUserConectado: boolean;
  myNotifSolic: boolean;
  myNotifAgdm: boolean;
  myNofitVendas: boolean;
  EqpNofitSolic: boolean;
  EqpNotifAgdm: boolean;
}

interface GlobalContextProps {
  theming: typeof ThemingLight | typeof ThemingDark;
  settings: Settings;
  setTheming: React.Dispatch<React.SetStateAction<typeof ThemingLight | typeof ThemingDark>>;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  mudarTheming: () => void;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theming, setTheming] = useState(ThemingLight);

  const [settings, setSettings] = useState<Settings>({
    theming: 'auto',
    autenticaçãoBiometrica: false,
    manterUserConectado: false,
    myNotifSolic: false,
    myNotifAgdm: false,
    myNofitVendas: false,
    EqpNofitSolic: false,
    EqpNotifAgdm: false,
  });

  const colorScheme = useColorScheme();

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

  return (
    <GlobalContext.Provider
      value={{
        theming,
        settings,
        setTheming,
        setSettings,
        mudarTheming,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
