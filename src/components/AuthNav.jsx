import { Flex, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Flex>
        <ButtonGroup gap="4">
          <Button colorScheme="BlackAlpha 700" variant="link" size="m">
            <Link to="/register">Sign Up</Link>
          </Button>
          <Button colorScheme="BlackAlpha 700" variant="link" size="m">
            <Link to="/login">LogIn</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};
