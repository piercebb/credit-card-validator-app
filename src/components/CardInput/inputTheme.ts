import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontFamily: 'mono',
    color: 'teal',
    borderColor: 'teal',
    border: '3px solid',
    borderWidth: '1px',
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
