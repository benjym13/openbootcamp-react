import React from 'react'
import PropTypes from 'prop-types'
// Models
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels'
//SCSS
import '../styles/task.scss'

const TaskComponent = ({props, complete, remove}) => {
    /* 
    FUNCIÓN PARA IMPLEMENTAR ETIQUETAS
    HEMOS IMPLEMENTADO UN SWITCH PARA QUE RETONE UN HTML U TRO EN FUNCION DE LO QUE DEVUELVA props.level
    */
    function taskLevelBadge () {
        switch (props.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {props.level}
                        </span>
                    </h6>
                )
            case LEVELS.MEDIO:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {props.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENTE:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {props.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }
    /* 
    FUNCIÓN PARA RETORNAR ICONOS EN FUNCION DE SI LA TAREAS ESTÁ HECHA O NO
    */
    function iconCompleted() {
        if(props.completed) {
            return  <i className='bi-toggle-on task-action' style={{color: 'green'}} onClick={() => {complete(props)}}></i> ;
        } else {
            return  <i className='bi-toggle-off task-action'  style={{color: 'grey'}} onClick={() => {complete(props)}}></i>;
        }
    }
    /* Stylo en función de si el task está completado o no */
    return (
        <tr className={`fw-normal ${props.completed ? 'task-completed' : 'task-pending'}`}>
            <th >{ props.name }</th>
            <td className='align-middle'>{ props.description }</td>
            <td className='align-middle'>
                {/* EXECUTA LA FUNCIÓN QUE RETORNAL EL BADGE */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { iconCompleted() }
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => {remove(props)}}></i>
            </td>

        </tr>
    )
}

TaskComponent.propTypes = {
    props: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;
