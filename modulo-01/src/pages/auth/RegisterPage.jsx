import React from 'react'
import RegisterFormik from '../../components/pure/forms/registerFormik'
// Material UI
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

const RegisterPage = () => {
  return (
    <div>
      <h1>User Register</h1>
      <RegisterFormik></RegisterFormik>
      <Typography variant='h5'>¿Ya tienes cuenta?</Typography>
      <Link variant='body2' href='/login'>Inicia Sesión</Link>
    </div>
  )
}

export default RegisterPage
