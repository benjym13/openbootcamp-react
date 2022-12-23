import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(`we are in:`, location.pathname)
    return (
        <div>
        <h1>About</h1>
        </div>
    )
}

export default About
