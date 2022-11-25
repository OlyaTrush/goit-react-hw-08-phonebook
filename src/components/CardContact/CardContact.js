import { Container, Button } from "./CardContact.styled"


export const CardContact = ({contact, delContact}) => {
    return (
        <Container>
            <div>{contact.name}: {contact.number}</div>
            <Button type="button" onClick={()=> delContact(contact.id)}>Delete</Button>
        </Container>
    )
}