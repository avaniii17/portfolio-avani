import { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeColors = {
  bg: string;
  bgSurface: string;
  bgCard: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  border: string;
  borderStrong: string;
  shadow: string;
  shadowCard: string;
  navBg: string;
};

export const lightColors: ThemeColors = {
  bg: '#F8F7FF',
  bgSurface: '#FFFFFF',
  bgCard: '#FFFFFF',
  text: '#1A1A2E',
  textMuted: '#6B6B8A',
  textSubtle: '#9999B3',
  accent1: '#FFB5C8',
  accent2: '#C9B8FF',
  accent3: '#B5EAD7',
  accent4: '#FFDAB9',
  accent5: '#BAE6FD',
  border: 'rgba(0,0,0,0.06)',
  borderStrong: 'rgba(0,0,0,0.12)',
  shadow: '0 2px 20px rgba(0,0,0,0.05)',
  shadowCard: '0 4px 30px rgba(0,0,0,0.07)',
  navBg: 'rgba(248,247,255,0.9)',
};

export const darkColors: ThemeColors = {
  bg: '#030303',
  bgSurface: '#090909',
  bgCard: '#0E0E0E',
  text: '#FFFFFF',
  textMuted: '#555566',
  textSubtle: '#333344',
  accent1: '#39FF14',
  accent2: '#FF10F0',
  accent3: '#00FFFF',
  accent4: '#FF8C00',
  accent5: '#BF5FFF',
  border: 'rgba(255,255,255,0.05)',
  borderStrong: 'rgba(255,255,255,0.10)',
  shadow: '0 4px 40px rgba(0,0,0,0.6)',
  shadowCard: '0 0 40px rgba(0,0,0,0.8)',
  navBg: 'rgba(3,3,3,0.92)',
};

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
  c: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {},
  c: lightColors,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggle: () => setIsDark((d) => !d),
        c: isDark ? darkColors : lightColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
