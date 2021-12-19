import React from 'react'
import "./Header.css"
import logo5 from './images/logo5.png';
import PersonIcon from '@material-ui/icons/Person';


function Header() {
    return (
        <div className='header'>
            <h2>I am header</h2>
            <PersonIcon fontSize = "large" className ="header__icon" />
        </div>
    )
}

export default Header
