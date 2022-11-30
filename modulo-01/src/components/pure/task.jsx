import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({props}) => {
    return (
        <div>
            <h2>
                Nombre :{ props.name }
            </h2>
            <h2>
                description :{ props.description }
            </h2>
            <h2>
                level :{ props.level }
            </h2>
            <h2>
                this task is : { props.completed ? 'Completed' : 'Pending' }
            </h2>
        </div>
    )
}

TaskComponent.propTypes = {
    props: PropTypes.instanceOf(Task)
}

export default TaskComponent;
