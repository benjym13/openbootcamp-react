import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage} from 'formik';
import  * as Yup from 'yup';
//Models
import { user } from '../../../models/user.class'
import { ROLES } from '../../../models/roles';

const RegisterFormik = props => {
  

  const initialUser = {
    usermame: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }

  const schema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'demasiado corto')
        .max(12, 'demasiado largo')
        .required('es requerido'),
      email: Yup.string()
        .email('Invalid email format')
        .required('email is required'),
        role: Yup.string().oneOf([ROLES.ADMIN, ROLES.EDITOR, ROLES.USER], 'no has selecionado el user roler'),
      password: Yup.string()
        .required('password is required'),
      confirm: Yup.string()
        .when('password', {
          is: value => (value && value.length  > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Password must match'
          )
        }).required('las contraseñas deben ser iguales')

    }
  )

  const submit = (data)  => {
    console.log(data)
  }
  
  return (
    <div>
      <Formik
      initialValues={initialUser}
      validationSchema = {schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1500));
        alert(JSON.stringify(values, null, 2));
        localStorage.setItem('credentials', values);
      }}
      >
        {({errors, touched, isSubmitting}) => 
          (
            <Form>
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="username" />
              {errors.username && touched.username ? (<ErrorMessage name='username'></ErrorMessage>) : ''}
              <label htmlFor="email">Mail</label>
              <Field id="email" name="email" placeholder="example@mail.com" />
              {errors.email && touched.email ? (<ErrorMessage name='email'></ErrorMessage>) : ''}
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              <Field
                id="confirm"
                name="confirm"
                placeholder="confirm"
                type="password"
              />
              {errors.confirm && touched.confirm ? (<ErrorMessage name='confirm'></ErrorMessage>) : ''}
              <button type="submit">Submit</button>
              {isSubmitting ? (<span>Login your credentials...</span>) : ''}
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

RegisterFormik.propTypes = {

}

export default RegisterFormik
