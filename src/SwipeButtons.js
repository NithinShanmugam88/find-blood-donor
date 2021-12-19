import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SendIcon from '@material-ui/icons/Send';
import InfoIcon from '@material-ui/icons/Info';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className = "swipeButtons__refresh">
                <ReplayIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__left">
                <ArrowBackIosIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__send">
                <SendIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__right">
                <ArrowForwardIosIcon fontSize = "large" />
            </IconButton>
            {/*<Link  to = '././https://nithinshanmugamv.github.io/aboutus/sepm/aboutus.html'>*/}
                <a href = "https://nithinshanmugamv.github.io/aboutus/sepm/aboutus.html"> <IconButton className = "swipeButtons__info"><InfoIcon fontSize = "large"  /></IconButton></a>
               
            {/*</Link>*/}
        </div>
    )
}

export default SwipeButtons
