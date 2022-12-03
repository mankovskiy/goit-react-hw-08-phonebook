import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <Container maxW="container.xxl">
        <AppBar />
      </Container>
      <Divider colorScheme="yellow" />
      <Container maxW="container.xxl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
