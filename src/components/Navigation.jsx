import { Flex, Spacer, ButtonGroup, Button } from '@chakra-ui/react';
import { Box } from './Box/Box';
import { Link } from 'react-router-dom';

export const Navigation = () => {
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
          <Button colorScheme="teal" size="sm">
            <Link to="/contacts">Contacts</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </nav>
  );
};

// export const Navigation = () => {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/tasks">Tasks</NavLink>
//       )}
//     </nav>
//   );
// };
