import { Center, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Center h="45vw">
      <Text
        as="p"
        bgGradient="linear(to-l, #3a3fdc, #dbee33)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mt={-20}
      >
        PHONEBOOK
      </Text>
    </Center>
  );
};
