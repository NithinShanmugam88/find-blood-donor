//SEPM BATCH 14 87,88,95
import React from 'react'
import "./Chats.css";
//import PersonIcon from '@material-ui/icons/Person';
import Chat from './Chat';

function Chats() {
    return (
        <div className = "chats">
            <Chat name = "Nithin"message ="Hi. I am in an emergency." 
            timestamp ="40 sec ago" 
            profilePic="https://avatars.githubusercontent.com/u/58203293?s=60&v=4"/>
            <Chat name = "Mahinder"message ="Hi, there" 
            timestamp ="40 sec ago" 
            profilePic="https://lh3.googleusercontent.com/a-/AOh14GhQDjEWrXLADfAFRMDeJ11wqTrG7-QdfM0aRMYV2Q=s72-p-k-rw-no"/>
            <Chat name = "Surya"message ="Hi. I am in an emergency." 
            timestamp ="40 sec ago"/>
            <Chat name = "Karthi"message ="Hi. I am in an emergency." 
            timestamp ="40 sec ago" 
            profilePic="personIcon"/>
        </div>
    )
}

export default Chats
