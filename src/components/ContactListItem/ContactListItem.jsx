// import { DeleteBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
// import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { Stack, Text, Button, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import 'react-toastify/dist/ReactToastify.css';

export function ContactListItem({ id, name, number }) {
  const [isBtnSpiner, setIsBtnSpiner] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setIsBtnSpiner(true);
  };

  // const btnSpiner = (
  //   <BeatLoader color="#787e7d" size={5} speedMultiplier={1} margin={3} />
  // );

  return (
    <Box
      borderBottom="1px"
      borderColor="#7b60d2"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack align="stretch">
        <Text fontSize="sm">Name: {name}</Text>
        <Text fontSize="sm">Number: {number}</Text>
        {/* <Divider w="280px" borderColor="teal.300" mt={0} /> */}
      </Stack>
      <Button
        isLoading={isBtnSpiner}
        display="flex"
        ml={-10}
        size="sm"
        color="btnColor"
        border="transparent"
        aria-label="Delete contact"
        variant="outline"
        onClick={handleDeleteContact}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
