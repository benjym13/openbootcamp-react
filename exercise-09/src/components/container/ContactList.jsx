import React, { useState } from 'react'
import { ContactClass } from '../../models/contact.class';
import  ContactComponent  from '../pure/Contact'
import FormContact from '../pure/forms/formContact';

const ContactList = () => {
    const contactOne = new ContactClass('Benjamín', 'Martínez', 'b.martinezs@gmail.com', true);
    const contactTwo = new ContactClass('David', 'Martínez', 'b.martinezs@gmail.com', false);

    const [contacts, setContact] = useState([contactOne, contactTwo]);
    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        console.log(tempContact)
        tempContact.splice(index, 1);
        setContact(tempContact);
        console.log(tempContact)
    }

    function updateStatus(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].status = !tempContact[index].status;
        setContact(tempContact);
    }
    function addNewContact(newContact) {
        const tempContact = [...contacts];
        tempContact.push(newContact)
        setContact(tempContact);
    }
    return (
        <div>
            <h1>Lista de Contactos</h1>
            {
            contacts.map((info, index) => {
                return(
                <ContactComponent
                    data={info}
                    key={index}
                    remove={removeContact}
                    update={updateStatus}
                >
                </ContactComponent>
                )
            })
        }
        <FormContact
            add={addNewContact}
        ></FormContact>
        </div>
    )
}

export default ContactList
