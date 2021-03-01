import React, { useState } from 'react'
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';

const PetForm = () => {
    // petName
    // petType
    // petDescription
    // petSkills
    const [petName, setPetName] = useState(""); 
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState(""); 
    const [petSkills, setPetSkills] = useState("");

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new pet
        axios.post('http://localhost:8000/api/pet/', {
            petName,    
            petType,      
            petDescription,
            petSkills
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name</label><br/>
                <input type="text" onChange = {(e)=>setPetName(e.target.value)}/>
            </p>
            <p>
                <label>Pet Type</label><br/>
                <input type="text" onChange = {(e)=>setPetType(e.target.value)}/>
            </p>
            <p>
                {/* make this a drop down */}
                <label>Pet Description</label><br/>
                <input type="text" onChange = {(e)=>setPetDescription(e.target.value)}/>
            </p>
            <p>
                {/* make this a drop down */}
                <label>Pet Skills</label><br/>
                <input type="text" onChange = {(e)=>setPetSkills(e.target.value)}/>
            </p>
            <button onClick={() => navigate(`/`)}>Cancel New Pet</button>
            <button type="submit">Submit New Pet</button>
        </form>
    )
}
export default PetForm;
