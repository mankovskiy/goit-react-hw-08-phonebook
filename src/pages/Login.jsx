import { useDispatch } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Center,
} from '@chakra-ui/react';
import { login } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Center h="45vw">
      <FormControl
        as="form"
        onSubmit={handleLogin}
        autoComplete="off"
        mt={-20}
        w={320}
      >
        <FormLabel display="flex" mb={10} flexDirection="column">
          Email
          <Input type="email" name="email" size="sm" />
        </FormLabel>
        <FormLabel ldisplay="flex" mb={10} flexDirection="column">
          Password
          <Input type="password" name="password" size="sm" />
        </FormLabel>

        <Button type="submit" size="sm">
          LogIn
        </Button>
      </FormControl>
    </Center>
  );
};
