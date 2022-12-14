import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/operations';
import { Box, Input, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilterValue = e => {
    const value = e.target.value;

    dispatch(setFilterValue(value));
  };
  return (
    <Box w={{ md: 320 }}>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        borderRadius="xl"
        mb={6}
        type="text"
        placeholder="Search name"
        size="sm"
        variant="filled"
        onChange={handleSetFilterValue}
      />
    </Box>
  );
};
