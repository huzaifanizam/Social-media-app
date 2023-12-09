import React from 'react'
import { Link } from 'react-router-dom'

const home = (props) => {
  return (
    <div>
        <div>
            <h1>
                <Link to="/Login">Login</Link>
            </h1>
            <br />
            <h1>
                <Link to="/SignUp">SignUp</Link>
            </h1>
        </div>

        <br />
        <br />
        <br />

        <h1> { props.name ? `Welcome - ${props.name}` : "logIn Please"}</h1>
    </div>
  )
}

export default home