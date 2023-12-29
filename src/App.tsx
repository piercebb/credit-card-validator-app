import { Box, ChakraProvider, Center, Heading } from '@chakra-ui/react';

import { CardInput } from './components/CardInput/CardInput';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center className='App' data-testid='app'>
        <Box p={20}>
          <Heading p={5}>Validate Credit Card</Heading>
          <CardInput />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
