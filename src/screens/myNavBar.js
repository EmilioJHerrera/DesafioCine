import React from 'react';
import {NavLink} from "react-router-dom";
  
const MyNavBar = () => {
  return (
    <nav className='navbar'>
    <div className='navbar_logo'>
    <NavLink
    className={'navbar_logo'}
     to="/">HOME</NavLink>
    </div>
    <ul>
    <li>
    <NavLink
    className={({ isActive }) =>
    isActive ? 'text_decoration_active' : 'text_decoration' }
    to="/seachByRaiting">
    Búsqueda por estrellas</NavLink>
    </li>
    {/* <li>
    <NavLink 
    className={({ isActive }) =>
    isActive ? 'text_decoration_active' : 'text_decoration' }
    to="">
    Más
    </NavLink></li> */}
    </ul>
    </nav>
  )
}

export default MyNavBar