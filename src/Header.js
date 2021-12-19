import React from 'react'
import "./Header.css"
import logo5 from './images/logo5.png';
//import PersonIcon from '@material-ui/icons/Person';
//import PersonIcon from '@mui/icons-material/'
//import PersonIcon from "@mui/icons-material/Person";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import Logo5 from "./images/logo5.png";
import ForumIcon from "@material-ui/icons/Forum";


function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize = "large" className='header__icon' />
            </IconButton>
            <img src={Logo5} className='header__logo'></img>
            <IconButton>
                <ForumIcon fontSize = "large" className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
