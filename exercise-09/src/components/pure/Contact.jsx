import React from 'react'
import State from './state'
import {contact} from '../../styles/contact.scss'

const ContactComponent = ({data, remove, update}) => {
    function connectedStatus () {
        switch (data.status) {
            case false:       
                return(
                    <span className='icon-status icon-status--offline'>Ausente</span>
                )
            case true:
                return(
                    <span className='icon-status icon-status--online'>Activo</span>
                )
            default:
                break;
        }
    }
    
    return (
        <div className='contact--item'>
            <h2>{ data.name }</h2>
            <p>{ data.lastname }</p>
            <p>{ data.email }</p>
            <p onClick={() => {update(data)}}>{ connectedStatus() }</p>
            <i className="trash bi bi-trash3" onClick={() => {remove(data)}}></i>
        </div>
    )
}

export default ContactComponent
