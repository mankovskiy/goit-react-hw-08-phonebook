import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

export const theme = extendTheme({
  config,
  breakpoints,
  styles: {
    global: props => ({
      body: {
        bg: mode('#B794F4', '#322659')(props),
        color: mode('#322659', '#B794F4')(props),
      },
      colors: {
        btnColor: '#FFA793',
        appLine: '#444655',
        bcgContactList: '#F7F8FF',
      },
    }),
  },
});
