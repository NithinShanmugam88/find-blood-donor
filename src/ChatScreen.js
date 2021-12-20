//SEPM BATCH 14 87,88,95
import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            message: 'Hi. I am in an emergency.'
        },
        {
            message: 'I am looking for a blood donor whose blood group is B Positive.'
        },
        {
            message: 'I found you as a match. Can you help me in this emergency situation'
        },
        {
            name: 'Nithin',
            image: 'https://avatars.githubusercontent.com/u/58203293?s=60&v=4',
            message: 'Can you tell me the name of the hospital you are in? '
        },
        {
            message: 'SIMS Hospital, Vadapalani Chennai'
        },
        {
            name: 'Nithin',
            image: "https://avatars.githubusercontent.com/u/58203293?s=60&v=4",
            message: 'Ok, I will be there in 30 mins.'
        }

    ])
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                Nithin Accepted your request on 10/08/2020
            </p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">
                            {message.message}
                        </p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">
                            {message.message}
                        </p>
                    </div>
                )
            )}
            <div>
                <form className="chatScreen__input" id="userInput">
                    <input value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="type a msg" type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton" id = "sub">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
} export default ChatScreen;
