import { Flex, Spacer, ButtonGroup, Button } from '@chakra-ui/react';
// import { Box } from './Box/Box';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Flex>
        {/* <Box p="2"> */}
        {/* <Link to="/">Home page</Link> */}
        {/* </Box> */}
        {/* <Spacer /> */}
        <ButtonGroup gap="3">
          <Button colorScheme="transperense" size="sm">
            <Link to="/register">Sign Up</Link>
          </Button>
          <Button colorScheme="transperense" size="sm">
            <Link to="/login">Log in</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};
