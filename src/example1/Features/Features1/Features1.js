import React from 'react'
import classes from './feature1.module.css'
import { NavLink } from 'react-router-dom'
const Features1 = () => {
    return (
        <div className={classes.container}>
            Thus ia a feature 1 component

            <NavLink to='../../'>Home</NavLink>
 
        </div>

    )
}

export default Features1
