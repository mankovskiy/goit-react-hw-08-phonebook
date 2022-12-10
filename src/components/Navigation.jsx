import { Flex, ButtonGroup, Button } from '@chakra-ui/react';
// import { Box } from './Box/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { ColorModeSwitcher } from './ColorModeSwitcher/ColorModeSwitcher';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Flex as="nav" gap="2">
        <ButtonGroup gap="4">
          <Button colorScheme="BlackAlpha 700" variant="link" size="m">
            <Link to="/">Home page</Link>
          </Button>
          {isLoggedIn && (
            <Button colorScheme="BlackAlpha 700" variant="link" size="m">
              <Link to="/contacts">Contacts</Link>
            </Button>
          )}
          <ColorModeSwitcher />
        </ButtonGroup>
      </Flex>
    </>
  );
};
