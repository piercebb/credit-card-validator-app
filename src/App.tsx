import { FormEvent, useState, useEffect } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Center,
  CloseButton,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';
import theme from './theme';
import './App.css';

export const isValidLuhn = (num: string): boolean => {
  let numbers = Array.from(num, Number);
  let checksum = numbers[numbers.length - 1];
  if (numbers.includes(NaN) || numbers.length === 0) {
    return false;
  }
  let sum = numbers
    .reverse()
    .slice(1)
    .map((num, i) => {
      let val = num;
      if (!(i % 2)) {
        val = num * 2;
        if (val > 9) {
          val = Number(String(val)[0]) + Number(String(val)[1]);
        }
      }
      return val;
    })
    .reduce((sum, val) => {
      return (sum += val);
    });
  return 10 - (sum % 10) === checksum;
};

function App() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardState, setCardState] = useState<boolean | undefined>(undefined);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCardState(undefined);
    if (cardNumber && isValidLuhn(cardNumber)) {
      setCardState(true);
    } else {
      setCardState(false);
    }
  };

  useEffect(() => {
    if (cardNumber === '') {
      setCardState(undefined);
    }
  }, [cardNumber]);

  return (
    <ChakraProvider theme={theme}>
      <Center className='App'>
        <Box p={20}>
          <Heading p={5}>Validate Credit Card</Heading>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLeftElement>
                {cardState === true ? (
                  <CheckCircleIcon color='green' />
                ) : cardState === undefined ? (
                  <EditIcon />
                ) : (
                  <NotAllowedIcon color='red' />
                )}
              </InputLeftElement>
              <Input
                data-testid='card-input'
                id='cardNumber'
                type='text'
                placeholder='card number'
                _placeholder={{ color: 'inherit' }}
                _hover={{ borderColor: 'teal.400' }}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                isInvalid={cardState === false}
                focusBorderColor='teal.900'
                errorBorderColor='red.300'
              />
              <InputRightElement>
                <CloseButton
                  pl='20px'
                  pr='10px'
                  onClick={() => {
                    setCardNumber('');
                    setCardState(undefined);
                  }}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              data-testid='validate-submit'
              type='submit'
              m={5}
              isDisabled={cardNumber === ''}
            >
              Validate
            </Button>
          </form>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
