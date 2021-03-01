import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PetForm from '../components/PetForm';
import PetList from '../components/PetList';

const Main = () => {
    const [ message, setMessage ] = useState("Loading...")
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=> {
                setMessage(res.data.message); 
                setPet(res.data) ;
                setLoaded(true);
            });  
    }, []);
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    };
    return (
        <div className="form-wrapper">
            <div>
                <h1>Pet</h1>
                <PetForm/>
            </div>
            <div id="results">
                <h2>List of Pets</h2>
                {loaded && <PetList pet={pet}/>}
            </div>
        </div>
    )
}
export default Main;