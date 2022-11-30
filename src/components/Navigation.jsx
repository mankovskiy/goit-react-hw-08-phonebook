import { Flex, ButtonGroup, Button } from '@chakra-ui/react';
// import { Box } from './Box/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        {/* <Box p="2"> */}
        {/* <Link to="/">Home page</Link> */}
        {/* </Box> */}
        {/* <Spacer /> */}
        <ButtonGroup gap="2">
          <Button colorScheme="teal" size="sm">
            <Link to="/">Home page</Link>
          </Button>
          {isLoggedIn && (
            <Button colorScheme="teal" size="sm">
              <Link to="/contacts">Contacts</Link>
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </nav>
  );
};
