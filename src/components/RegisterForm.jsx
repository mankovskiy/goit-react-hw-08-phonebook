import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('hello');
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      mt={36}
      w={290}
      ml="auto"
      mr="auto"
    >
      <FormLabel mb={10}>
        Username
        <Input type="text" name="name" size="sm" borderRadius="xl" />
      </FormLabel>
      <FormLabel mb={10}>
        Email
        <Input type="email" name="email" size="sm" borderRadius="xl" />
      </FormLabel>
      <FormLabel mb={10}>
        Password
        <Input type="password" name="password" size="sm" borderRadius="xl" />
      </FormLabel>

      <Button type="submit" size="sm">
        Register
      </Button>
    </FormControl>
  );
};
