import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';
import { Form } from './UpdateForm.styled';
import { TextField, Button, Box } from '@mui/material';

export function UpdateForm({ currName, currNumber, id, modalClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(currName);
  const [number, setNumber] = useState(currNumber);
  const contacts = useSelector(selectContacts);
  const savedNamesList = contacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (savedNamesList.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(updateContact({ name, number, id }));
    form.reset();
    modalClose();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        name="name"
        type="text"
        required
        sx={{ mb: '15px' }}
        value={name}
        onChange={handleChange}
      />
      <TextField
        label="Number"
        variant="outlined"
        size="small"
        name="number"
        type="tel"
        required
        sx={{ mb: '15px' }}
        value={number}
        onChange={handleChange}
      />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Button variant="contained" type="submit" sx={{ mb: 2, width: '65%' }}>
          Update
        </Button>
        <Button
          variant="contained"
          type="button"
          sx={{ width: '65%' }}
          onClick={modalClose}
        >
          Сancel
        </Button>
      </Box>
    </Form>
  );
}
