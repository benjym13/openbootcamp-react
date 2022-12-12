import React, { useRef } from 'react'
import { ContactClass } from '../../../models/contact.class'

const FormContact = ({add}) => {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new ContactClass(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }
    return (
        <div>
            <form action="" onSubmit={addContact}>
                <input type="text" ref={nameRef} />
                <input type="text" ref={lastNameRef}/>
                <input type="text" ref={emailRef}/>
                <button type="submit">Add contact</button>
            </form>
        </div>
    )
}

export default FormContact
