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
    <Box
      display={{ md: 'flex' }}
      gap={150}
      justifyContent="center"
      mt={{ base: 6, md: 20 }}
      pb={16}
      ml="auto"
      mr="auto"
    >
      <Box w={{ md: 320 }}>
        <ContactForm />
      </Box>
      <Box>
        <Filter />
        <Box
          w={{ md: 320 }}
          backgroundColor="#EDF2F5"
          overflow="auto"
          h={320}
          // minH="32px"
          p={4}
          mt={6}
          borderRadius="xl"
        >
          <ContactList />
        </Box>
      </Box>
    </Box>
  );
};
