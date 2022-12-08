import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels';
import TaskComponent from '../pure/task';

const TaskList = () => {
    const taskOne = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const taskTwo = new Task('Example', 'Default description', false, LEVELS.URGENTE);
    const taskThree = new Task('Example', 'Default description', false, LEVELS.MEDIO);

    const [tasks, setTasks] = useState([taskOne, taskTwo, taskThree]);
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
                                        ></TaskComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default TaskList
