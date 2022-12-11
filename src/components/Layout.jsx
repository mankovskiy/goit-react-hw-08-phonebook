import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <Container ml="auto" mr="auto" maxW="container.xxl">
        <AppBar />

        <Divider />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
