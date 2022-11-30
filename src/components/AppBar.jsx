import { Flex } from '@chakra-ui/react';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Flex
      as="header"
      //   alignItems="center"
      //   gap="2"
      mt={5}
      justifyContent="space-between"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
