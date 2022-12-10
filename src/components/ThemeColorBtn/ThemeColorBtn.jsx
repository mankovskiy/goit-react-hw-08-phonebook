import { useColorMode, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
export const ThemeColorBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button borderRadius={70} onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};
