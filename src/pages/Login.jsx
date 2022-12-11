import { useDispatch } from 'react-redux';
import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react';
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
    <>
      <FormControl
        as="form"
        onSubmit={handleLogin}
        autoComplete="off"
        mt={36}
        w={290}
        ml="auto"
        mr="auto"
      >
        <FormLabel mb={10}>
          Email
          <Input type="email" name="email" size="sm" mt={2} borderRadius="xl" />
        </FormLabel>
        <FormLabel mb={10}>
          Password
          <Input
            type="password"
            name="password"
            size="sm"
            mt={2}
            borderRadius="xl"
          />
        </FormLabel>

        <Button type="submit" size="sm">
          LogIn
        </Button>
      </FormControl>
    </>
  );
};
