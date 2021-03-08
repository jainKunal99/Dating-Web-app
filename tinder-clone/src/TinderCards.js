    import React , { useState, useEffect } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    //useEffect is a hook in react used when a component loads 
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            console.log(req.data);
            setPeople(req.data);
        }
        fetchData();

    }, [] );
    console.log(people);

    const swiped = (directivdon, nameToDelete) => {
        console.log("removing  :  " + nameToDelete);
        
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!  ");
    }

    return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => {
                return <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                                  
            })}
        </div>
   </div>
    );
}

export default TinderCards;


