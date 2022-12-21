import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* 
Creamos un schema donde decimos que tipo de campo es, si es requerido o no incluso el mensaje de error
*/
const schema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('email is required'),
        password: Yup.string()
            .required('password is required')

    }
)
const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password:''
    }
    return (    
        <div>
            <Formik
                initialValues={initialCredentials}
                validationSchema = {schema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                }}
            >
                {/* 
                Creeamosun función donde llamamos a ciertos props de Formik
                */}
                {({errors, touched, isSubmitting}) => 
                    (
                        <Form>
                            <label htmlFor="email">Mail</label>
                            <Field id="email" name="email" placeholder="example@mail.com" />
                            {/* {errors.email && touched.email ? (<span>{errors.email}</span>) : ''} */}
                            <ErrorMessage name='email'></ErrorMessage>
                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            />
                            {errors.password && touched.password ? (<span>{errors.password}</span>) : ''}
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<span>Login your credentials...</span>) : ''}
                        </Form>
                    )
                
                }   
            </Formik>
        </div>
    )
}

export default LoginFormik
