import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box display="flex" gap={300} justifyContent="center" mt={20} pb="40vw">
      <Box w={320}>
        <ContactForm />
      </Box>
      <Box>
        <Filter />
        <Box
          backgroundColor="#EDF2F5"
          overflow="auto"
          w={320}
          h={320}
          minH="32px"
          p={[2, 2, 16, 2]}
          mt={6}
          borderRadius="xl"
        >
          <ContactList />
        </Box>
      </Box>
    </Box>
  );
};
