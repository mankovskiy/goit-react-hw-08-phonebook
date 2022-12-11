import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { addContact } from 'redux/contacts/operations';

import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { value } = e.target;
    e.target.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <Input
        borderRadius="xl"
        mb={10}
        size="sm"
        variant="filled"
        placeholder="Name"
        onChange={handleChangeInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <FormLabel>Number</FormLabel>
      <Input
        borderRadius="xl"
        size="sm"
        variant="filled"
        placeholder="Number"
        onChange={handleChangeInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />
      <Button
        justifyItems="center"
        mt={10}
        mb={10}
        display="flex"
        type="submit"
        size="sm"
      >
        add contact
      </Button>
    </FormControl>
  );
}

ContactForm.propTypes = {
  handleChangeInput: PropTypes.func,
};
