// export const Login = () => {
//   <form autoComplete="off">
//     <label>
//       Email
//       <input type="email" name="email" />
//     </label>
//     <label>
//       Password
//       <input type="password" name="password" />
//     </label>
//     <button type="submit">Log In</button>
//   </form>;
// };
import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

export const Login = () => {
  return (
    <FormControl autoComplete="off" mt={10} w={320}>
      <FormLabel display="flex" mb={10} flexDirection="column">
        Email
        <Input type="email" name="email" size="sm" variant="filled" />
      </FormLabel>
      <FormLabel ldisplay="flex" mb={10} flexDirection="column">
        Password
        <Input type="password" name="password" size="sm" variant="filled" />
      </FormLabel>

      <Button type="submit" colorScheme="teal" size="sm">
        Register
      </Button>
    </FormControl>
  );
};
