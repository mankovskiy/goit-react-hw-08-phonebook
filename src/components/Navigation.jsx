import { MenuDivider, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { ColorModeSwitcher } from './ColorModeSwitcher/ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const breakpointValue = useBreakpointValue({
    sm: true,
    md: false,
  });
  // console.log(breakpointValue);

  return (
    <nav>
      {breakpointValue ? (
        <Menu as="Flex">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghoast"
            // gap="4"
          />
          <ColorModeSwitcher />
          <MenuList>
            <MenuItem>{<Link to="/">Home page</Link>}</MenuItem>
            <MenuDivider />
            <MenuItem>
              {isLoggedIn && <Link to="/contacts">Contacts</Link>}
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <ButtonGroup gap="4">
          <Button colorScheme="BlackAlpha 700" variant="link" size="m">
            <Link to="/">Home page</Link>
          </Button>
          {isLoggedIn && (
            <Button colorScheme="BlackAlpha 700" variant="link" size="m">
              <Link to="/contacts">Contacts</Link>
            </Button>
          )}
          <ColorModeSwitcher />
        </ButtonGroup>
      )}
    </nav>
  );
};
