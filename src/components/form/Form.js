import { Div, Label, Input, Button } from "./form.styled"
import { nanoid } from 'nanoid';
import { useDispatch, useSelector, } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors"; 
    
const nameInputId = nanoid();
const numberInputId = nanoid();
 

export const Form = () => {
    
    const dispatch = useDispatch();
    const selector = useSelector(getContacts);
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target.elements
        const contact = { id: nanoid(), name: form.name.value, number: form.number.value }
        const name = selector.find(item => item.name === contact.name);
        e.target.reset();

        if (name) {
            return alert(`${name.name} is already in contacts.`)
        } else {
            return dispatch(addContact(contact));
        }
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
