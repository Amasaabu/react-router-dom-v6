import React from 'react'
import { useLocation } from 'react-router'
import Nav from '../../component/Nav/Nav'
import classes from './home.module.css'

const Home = () => {
    const location = useLocation()
    console.log(location.state);
    return (
        <div className={classes.container}>
            <Nav/>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home

