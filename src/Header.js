/*
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
*/
//SEPM BATCH 14 87,88,95
///*
import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom';
//import logo2 from './images/logo2.svg';
import logo5 from './images/logo5.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header__logo" src={logo5} alt="blood donor logo">
        </img>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
export default Header;
//*/