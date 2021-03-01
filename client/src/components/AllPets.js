import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import LikeButton from './LikeButton';

const AllPets = (prop) => {
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/pets/')
        .then((response) => {
            console.log(response.data);
            setAllPets(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    const deletePet = (petId) => {
        axios.delete("http://localhost:8000/api/pet/" + petId)
        .then ((res) => {
            const deletedPet = res.data;
            console.log(deletedPet);
            const filteredPetsArray = allPets.filter((pet) => pet._id !== petId);
            setAllPets(filteredPetsArray);
        })
        .catch ((err) => {
            console.log(err);
        });
    }
    return (
        <div className="all-shelter-pets">
            {/* <header>
                <h1>Pet Shelter - Adopt a Pet!</h1>
                <button className="myButton" onClick={() => navigate(`/pets/new/`)}>
                    Add a New Pet to be Adopted!
                </button>
            </header> */}
            <h2>These pets are looking for a good home.</h2>
            <ol className="all-pets">
            {
                allPets.map((pet, index) =>(
                    <li key={index}>
                        <span className="image-wrapper"><img onClick={() => navigate(`/pet/${pet._id}`)} src={ pet.petPhotoUrl } alt={ pet.petName } title={ pet.petName }/></span>
                        <div className="under-image">
                            <h4>{ `${pet.petName }`} - {`${pet.petType }`} </h4>
                            <div className="button-wrapper">
                                <button className="myButton secondary" onClick={() => navigate(`/pet/${pet._id}`)}>View Pet Details</button>
                                <button type="button" className="myButton" onClick={() => navigate(`/pet/${pet._id}/edit`)}>Edit Pet </button>
                                <button type="button" className="myButton" 
                                onClick={() => { if (window.confirm('Are you sure you wish to adopt this Pet?')) deletePet(pet._id) } } >Adopt This Pet</button>
                                {/* <LikeButton /> */}
                            </div>
                        </div>
                    </li>
                ))
            }
            </ol>
        </div>
    )
}

export default AllPets;