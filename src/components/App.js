
import { ContactForm } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";
import { Form } from "./form/Form";
import { Container } from "./app.styled";


export const App = () => {
  
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
         
        <h2>Contacts</h2>
        <Filter />
        <ContactForm />
      </Container>
        
    );
};
