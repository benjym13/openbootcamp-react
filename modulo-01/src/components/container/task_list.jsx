import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels';
import TaskComponent from '../pure/task';

const TaskList = () => {
    const defaultTask = new Task('Example', 'Default description', 'true', LEVELS.NORMAL);
    return (
        <div>
            <h1>
                Your tasks: 
            </h1>
            <TaskComponent props={ defaultTask }></TaskComponent>
        </div>
    );
}


export default TaskList
