import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  type ThemeConfig,
} from '@chakra-ui/react';

import { inputTheme } from './components/inputTheme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'teal' }),
  withDefaultSize({
    size: 'lg',
  }),
  {
    config,
  },
  {
    components: {
      Input: inputTheme,
    },
  }
);

export default theme;
