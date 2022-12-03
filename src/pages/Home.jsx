import { Center, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Center h="45vw">
      <Heading
        as="h1"
        bgGradient="linear(to-l, #3a3fdc, #dbee33)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mt={-20}
      >
        PHONEBOOK
      </Heading>
    </Center>
  );
};
