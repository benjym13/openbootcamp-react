import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels'

const TaskComponent = ({props}) => {
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
            return  <i className='bi-toggle-on' style={{color: 'green'}}></i> ;
        } else {
            return  <i className='bi-toggle-off'  style={{color: 'grey'}}></i>;
        }
    }
    return (
        <tr>
            <th >{ props.name }</th>
            <td className='align-middle'>{ props.description }</td>
            <td className='align-middle'>
                {/* EXECUTA LA FUNCIÓN QUE RETORNAL EL BADGE */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { iconCompleted() }
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    props: PropTypes.instanceOf(Task)
}

export default TaskComponent;
