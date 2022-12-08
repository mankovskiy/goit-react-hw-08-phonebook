import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#819cff',
        color: 'gray.600',
        lineHeight: 'tall',
      },
    },
  },
  colors: {
    // bcgColor: '#819cff',
    btnColor: '#FFA793',
    appLine: '#444655',
    bcgContactList: '#F7F8FF',
  },
});
