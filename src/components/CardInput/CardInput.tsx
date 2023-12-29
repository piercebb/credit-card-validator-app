import React, { FormEvent, useState, useEffect } from 'react';
import {
  Button,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';

import './CardInput.css';
import { isValidLuhn } from '.';

export const CardInput = (): JSX.Element => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardState, setCardState] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (cardNumber === '') {
      setCardState(undefined);
    }
  }, [cardNumber]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCardState(undefined);
    if (cardNumber && isValidLuhn(cardNumber)) {
      setCardState(true);
    } else {
      setCardState(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 19) {
      return false;
    }
    setCardNumber(e.target.value);
  };

  return (
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
          onChange={handleInputChange}
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
  );
};
