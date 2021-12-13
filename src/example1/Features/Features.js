import React from 'react'
import { NavLink, Route, Routes, Outlet,Navigate, useNavigate} from 'react-router-dom'
import Nav from '../../component/Nav/Nav'
import Features1 from './Features1/Features1'

const Features = () => {
    const navigate = useNavigate()
    const toHome=()=>{
        navigate('/', {state: 'From features page'})
    }
    return (
        <div>
            {/* <Navigate to='/'/> */}
            <Nav/>
            <h1>Features</h1> 
            {/* <button onClick={toHome}>HOME BTN</button> */}
            <NavLink to='feature1'>Reveal feature 1</NavLink>
            <Outlet/>

        </div>
    )
}

export default Features
