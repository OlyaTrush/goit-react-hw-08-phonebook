
import { Item, List } from "./contacts.styled"
import { CardContact } from "components/CardContact/CardContact";
import {  useDispatch } from "react-redux";
import { selectVisibleFilter } from "redux/selectors";
import { contactReducer } from "redux/contactsSlice";


export const ContactForm = () => {

    const dispatch = useDispatch();


    const visibleContacts = selectVisibleFilter()

    const delContact = contactId => {
    dispatch(contactReducer(contactId))
  }
    return (
        <List>
            {visibleContacts.map(contact => <Item key={contact.id}><CardContact contact={ contact } delContact={delContact} /></Item>)}
        </List>
    )
}

