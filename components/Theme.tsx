import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark';

const colors = {
  light: {
    primary : '#191D4A',
    backGround : '#F5F7FA',
    surface : '#E3E8F1',
    textPrimary : '#0F1235',
    textSecondary : '#6B7280',
    accent : '#00D1FF',
    red : '#FF4D6D',
    emerald : '#2ECC71'
  },
  dark: {
    primary : '#191D4A',
    backGround : '#0B0D22',
    surface : '#1F223B',
    textPrimary : '#E5E7EB',
    textSecondary : '#A1ABC1',
    accent : '#4FBBFF',
    red : '#FF6B81',
    emerald : '#3EDC91'
  },
};

type ThemeContextType = {
  theme: typeof colors.light;
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: colors.light,
  mode: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme(); // 'light' or 'dark'
  const [mode, setMode] = useState<ThemeMode>(systemScheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = colors[mode];

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
