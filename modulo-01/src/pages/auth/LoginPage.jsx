import React from 'react'
import LoginFormik from '../../components/pure/forms/loginFormik';
import { useHistory } from 'react-router-dom';
// Material UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


const LoginPage = () => {

    const history = useHistory();

    const navigateToRegister = () => {
        history.push('/register');
    }

    return (
        <div>
            <h1>User Login</h1>
            <h5>Login Formik</h5>
            <LoginFormik></LoginFormik>
            <Typography variant='h5' align='center'>¿Estás registrado?</Typography>
            <Button variant='outlined' onClick={navigateToRegister}>Regristate aquí</Button>
        </div>
    )
}

export default LoginPage
