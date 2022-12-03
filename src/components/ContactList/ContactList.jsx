import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { List } from './ContactList.styled';

import {
  selectContacts,
  selectFilter,
  selectError,
} from 'redux/contacts/selectors';
import { Text, ListItem, List } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filterValue = filter.toLowerCase().trim();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return error ? (
    <b>no network</b>
  ) : (
    <>
      {contacts.length === 0 && (
        <Text fontSize="lg">Contact list is empty</Text>
      )}
      <List>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <ContactListItem id={id} name={name} number={number} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
