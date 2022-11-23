import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import {
//   Flex,
//   Spacer,
//   Heading,
//   ButtonGroup,
//   Button,
//   Container,
// } from '@chakra-ui/react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Home } from 'pages/Home';
import { Layout } from './Layout';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
    //     <Container maxW="container.xl" bg="gray.200">
    // <Flex minWidth="max-content" alignItems="center" gap="2">
    //   <Box p="2">
    //     <Heading size="md">Home page</Heading>
    //   </Box>
    //   <Spacer />
    //   <ButtonGroup gap="2">
    //     <Button colorScheme="teal">Sign Up</Button>
    //     <Button colorScheme="teal">Log in</Button>
    //   </ButtonGroup>
    // </Flex>

    //       <Box textAlign="center">
    //         <Box p={20}>
    //           <Box as="h2">Phonebook</Box>
    //           <ContactForm />
    //         </Box>
    //         <Box p={20}>
    //           <h2>Contacts</h2>
    //           <Filter />
    //           {error && toast.warn(error)}
    //           <ContactList />
    //         </Box>
    //         <ToastContainer
    //           position="top-right"
    //           autoClose={1500}
    //           hideProgressBar={false}
    //           newestOnTop={false}
    //           closeOnClick
    //           rtl={false}
    //           pauseOnFocusLoss
    //           draggable
    //           pauseOnHover
    //           theme="light"
    //         />
    //       </Box>
    //     </Container>
  );
}
