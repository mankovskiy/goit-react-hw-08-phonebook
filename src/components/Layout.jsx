import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW="container.xxl" bg="grey.400">
      <AppBar />
      <Outlet />
    </Container>
  );
};
