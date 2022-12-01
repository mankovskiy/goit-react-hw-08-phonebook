import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW="container.xxl" bg="grey.400">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
