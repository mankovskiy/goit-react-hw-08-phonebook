import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Flex alignItems="center">
      <Text fontSize="xl" color="yellow" as="p" mr={5}>
        Welcome, {user.name}
      </Text>
      <Button
        onClick={handleLogOut}
        type="button"
        colorScheme="transperense"
        size="sm"
        // variant="outline"
      >
        Logout
      </Button>
    </Flex>
  );
};
