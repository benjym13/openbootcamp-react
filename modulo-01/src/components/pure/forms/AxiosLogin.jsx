import React from 'react'
import { login } from '../../../services/axiosCRUDService'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosLogin = () => {
    // hemos creado una función que lee los valores de Formik y ejecuta la function Login(con los parametros de la petición
    const authUser = (values) => {
        login(values.email,values.password)
        .then(response => {
            alert(JSON.stringify(response.data.token))
            //
            sessionStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
            alert('something was wrong')
        })
    }

    const initialCredentials = {
        email: '',
        password:''
    }

    const history = useHistory();

    const schema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('email is required'),
            password: Yup.string()
                .required('password is required')
    
        }

    )

    //hemos metido el formulario de Formik, y en el submit ejecutamos authUser pasandole los valores
    return (    
        <div>
            <Formik
                initialValues={initialCredentials}
                validationSchema = {schema}
                onSubmit={async (values) => {
                    authUser(values);
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

export default AxiosLogin
