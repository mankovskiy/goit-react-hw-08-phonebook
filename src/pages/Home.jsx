import { Box, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      // alignItems="center"
      margin="auto"
    >
      <Heading
        as="h1"
        bgGradient="linear(to-l, #3a3fdc, #dbee33)"
        bgClip="text"
        fontSize={{ sm: '4xl', md: '6xl' }}
        fontWeight="extrabold"
        mt={60}
      >
        PHONEBOOK
      </Heading>
    </Box>
  );
};
