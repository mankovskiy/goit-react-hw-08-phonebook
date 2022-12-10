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
      <Text fontSize="xl" as="p" mr={5}>
        Welcome, {user.name}
      </Text>
      <Button
        colorScheme="BlackAlpha 700"
        onClick={handleLogOut}
        type="button"
        variant="link"
        size="m"
      >
        LogOut
      </Button>
    </Flex>
  );
};
