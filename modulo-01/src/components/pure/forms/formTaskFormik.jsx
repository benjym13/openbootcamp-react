import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//Models
import { LEVELS } from '../../../models/levels'
import { Task } from '../../../models/task.class';

const FormTaskFormik = ({add}) => {
    const initialValues = {
        title: '',
        description: '',
        level: ''
    }

    const schema = Yup.object().shape(
        {
            title: Yup.string()
                .required('añade un nombre a la tarea'),
            description: Yup.string()
                .required('añade una descriptción'),
            level: Yup.string()
                .required('task priority must be selected')
        }
    )
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1500));
                    const newTask =  new Task(values.title, values.description, false, values.level);
                    add(newTask);
                }}
            >
                {({errors, touched, isSubmitting}) => 
                    (
                        <Form>
                            <label htmlFor="title">Task Title</label>
                            <Field id="title" name="title" placeholder="Task title" />
                            {errors.title && touched.title ? (<span>{errors.title}</span>) : ''}
                            <label htmlFor="description">Task Description</label>
                            <Field id="description" name="description" placeholder="Task description" />
                            <Field
                                component="select"
                                id="level"
                                name="level"
                                multiple={false}
                            >
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.MEDIO}>Medio</option>
                                <option value={LEVELS.URGENTE}>Urgente</option>
                            </Field>
                            {errors.level && touched.level ? (<span>{errors.level}</span>) : ''}
                            <button type="submit">Submit</button>
                            { isSubmitting ? (<span>Adding new Task...</span> ) : ''}
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormTaskFormik
