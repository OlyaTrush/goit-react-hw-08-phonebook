import { Div, Label, Input, Button } from "./form.styled";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector, } from "react-redux";
import { contactReducer } from "redux/contactsSlice";
import { selectContacts } from "redux/selectors"; 
import { useState } from "react";
    

export const Form = () => {
    
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');
    const { items } = useSelector(selectContacts);
  
    const dispatch = useDispatch();
  
    const nameInputId = nanoid();
    const numberInputId = nanoid();
  
    const isExistName = name => {
      return items.some(item => item.name === name);
    };
  
    const isExistNumber = phone => {
      return items.some(item => item.phone === phone);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      if (isExistName(name)) {
        alert(`${name} is already in name.`);
        return;
      }
      if (isExistNumber(phone)) {
        alert(`${phone} is already in number.`);
        return;
      }
      dispatch(contactReducer({ id: nanoid(), name, phone }));
      resetForm();
    };
  
    const resetForm = () => {
      setName('');
      setNumber('');
    };
  
    return (
        <Div>
            <form onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}>
                Name
                <Input
                id = {nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                
            />
            </Label>
            <Label htmlFor={numberInputId}>
                Number
                <Input
                id={numberInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </Label>
            <Button type="submit">Add contact</Button>
        </form>
        </Div>
    )
    
}
