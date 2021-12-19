import React, { useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Nithin Shanmugam",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Karthi",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Mahinder",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Ananth",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Gautham",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Dinesh",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        },
        {
            name: "Aravind Karti",
            url: "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            group: "B+ve",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+ nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                   <TinderCard className="swipe" 
                     key={person.name} 
                     preventSwipe={['up', 'down']}
                     onSwipe={(dir) => swiped(dir, person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}

                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                            <h4>{person.group}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
