import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';
import LikeButton from './LikeButton';

const OnePet = (props) => {
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id) // works fine
            .then((res) => {
                console.log('This is so awesome' + res.data);
                setPet(res.data)
                setLoaded(true);
            })
            .catch(err=>console.log('something is errored out' + err))
    },[])
    return (
        <div className="form-wrapper">
                <h2 className="pet-header">Details about {pet.petName}</h2>
                <ol className="pet-description-list">
                    <li>
                        <span className="image-wrapper">
                            <img onClick={() => navigate(`/pet/${pet._id}`)} src={ pet.petPhotoUrl } alt={ pet.petName } title={ pet.petName }/>
                        </span>
                    </li>
                    <li className="newLine"><em>Pet Name:</em> {pet.petName}</li> 
                    <li className="newLine"><em>Pet Type:</em> {pet.petType}</li> 
                    <li className="newLine"><em>Pet Description:</em> {pet.petDescription}</li>
                    <li className="newLine"><em>Pet Skills 1:</em> {pet.petSkills}</li>
                    <li className="newLine"><em>Pet Skills 2:</em> {pet.petSkills2}</li>
                    <li className="newLine"><em>Pet Skills 3:</em> {pet.petSkills3}</li>
                    <li className="newLine"><em>ID:</em> {pet._id}</li>
                </ol>
                <div className="button-wrapper-plain">
                    <button className="myButton secondary" onClick={() => navigate(`/`)}>
                        Back to All Pets
                    </button> 
                    <Link className="myButton linkButton" to={"/pet/" + props.id + "/edit"}>
                        Edit
                    </Link> 
                    <LikeButton />
                </div>
        </div>
    )
}

export default OnePet;