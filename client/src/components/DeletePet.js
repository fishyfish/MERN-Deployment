import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import AllPets from './AllPets';


const DeletePet = (petId) => {
    const [allPets, setAllPets] = useState([]);
    axios.delete("http://localhost:8000/api/pet/" + petId)
    .then ((res) => {
        const deletedPet = res.data;
        console.log(deletedPet);
        const filteredPetsArray = AllPets.filter((pet) => pet._id !== petId);
        setAllPets(filteredPetsArray);
    })
    .catch ((err) => {
        console.log(err);
    });

}

export default DeletePet;