import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels';
import TaskComponent from '../pure/task';
import Form from '../pure/task';
import FormTask from '../pure/forms/formTask';

const TaskList = () => {
    const taskOne = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const taskTwo = new Task('Example', 'Default description', false, LEVELS.URGENTE);
    const taskThree = new Task('Example', 'Default description', false, LEVELS.MEDIO);

    const [tasks, setTasks] = useState([taskOne, taskTwo, taskThree]);

    function completeTask(task) {
        console.log('complete this task ', task);
        // creamos un index para saber el indice dentro del array tasks
        const index = tasks.indexOf(task);
        // con el spread cogemos todos los tasks
        const tempTask = [...tasks];
        // decimos que el completed del task que se este pulsando cambie al valor contrario
        tempTask[index].completed = !tempTask[index].completed;
        // actualizamos el estado de las tasks
        setTasks(tempTask);
        console.log('complete this task ', task);
    }
    function removeTask(task) {
        console.log('we are going to deleta', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }
    function addNewTask(newTask) {
        const tempTask = [...tasks]
        console.log(tempTask)
        tempTask.push(newTask)
        setTasks(tempTask);
       
    }
    return (
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>Your tasks: </h5>
                </div>
                <div className='card-body' >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Descrition</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tasks.map((task, index) => {
                                return (
                                        <TaskComponent 
                                            key={index} 
                                            props={task}
                                            complete={completeTask}
                                            remove={removeTask}
                                        ></TaskComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <FormTask
                add={addNewTask}
            ></FormTask>
        </div>
    );
}


export default TaskList
