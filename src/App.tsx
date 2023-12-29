import { Box, Center, Heading } from '@chakra-ui/react';

import { CardInput } from './components/CardInput/CardInput';
import './App.css';

function App() {
  return (
    <Center className='App' data-testid='app'>
      <Box p={20}>
        <Heading p={5}>Validate Credit Card</Heading>
        <CardInput />
      </Box>
    </Center>
  );
}

export default App;
