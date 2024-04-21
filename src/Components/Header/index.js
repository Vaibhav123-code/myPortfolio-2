import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import logo from "./logo-v.png"
import DrawerCom from './Drawer'
function Header() {
  return (
    <div className='navbar'>
        <div className='title-name'>
            <img src={logo} className='logo'/>
            <h2>Vaibhav.Agnihotri</h2>
        </div>
         <div className='links'>
         <NavLink to="/" >Home</NavLink>
         <NavLink to="/about" >About</NavLink>
         <NavLink to="/projects" >Projects</NavLink>
         <NavLink to="/Contact" >Contact</NavLink>
         </div>
         <div className='drawer'>
            <DrawerCom />
         </div>
    </div>
  )
}

export default Header