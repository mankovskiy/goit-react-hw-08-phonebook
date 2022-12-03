import { Flex } from '@chakra-ui/react';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Flex
        as="header"
        pt={5}
        pb={5}
        alignContent="center"
        justifyContent="space-between"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </>
  );
};
