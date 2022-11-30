import React from 'react'
import { Contact } from '../../models/contact.class';
import State from './state'


const ContactComponent = ({ }) => {
    const defaultContact = new Contact('Benjamín', 'Martínez', 'b.martinezs@gmail.com', 'false');
    return (
        <div>
            <h2>{ defaultContact.name }</h2>
            <h3>{ defaultContact.lastname }</h3>
            <h3>{ defaultContact.email }</h3>
            <State contacto={defaultContact}/>
        </div>
    )
}

export default ContactComponent
