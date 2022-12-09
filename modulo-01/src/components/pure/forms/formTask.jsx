import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels';
import { Task } from '../../../models/task.class';

const FormTask = ({add}) => {
    const nameRef = useRef();
    const descripRef = useRef()
    const levelRef = useRef(LEVELS.NORMAL)
    function addTask(e) {
        e.preventDefault();
        const newTask = new Task (
            nameRef.current.value, 
            descripRef.current.value, 
            false, 
            levelRef.current.value
        )
        add(newTask)
    }
    return (
        <form action="" onSubmit={addTask}>
            <label htmlFor="Title">Title</label>
            <input type="text" ref={nameRef}/>
            <label htmlFor="Description">Description</label>
            <input type="text" ref={descripRef}/>
            <label htmlFor="Description">Priority</label>
            <select name="" id="" defaultValue={LEVELS.NORMAL} ref={levelRef}>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.MEDIO}>Medio</option>
                <option value={LEVELS.URGENTE}>Urgente</option>
            </select>
            <button>submit</button>
        </form>
    )
}
FormTask.prototype = {
    add: PropTypes.func.isRequired
}
export default FormTask