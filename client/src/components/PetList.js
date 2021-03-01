import React from 'react'
import axios from 'axios';

const PetList = (props) => {
    return (
        <ol>
            {props.pet.map((pet, idx)=>{
                return <li key={idx}> 
                    <span className="newLine"><em>Pet Name:</em> {pet.petName}</span> 
                    <span className="newLine"><em>Pet Type:</em> {pet.petType}</span> 
                    <span className="newLine"><em>Pet Description:</em> {pet.petDescription}</span>
                    <span className="newLine"><em>Pet Skills:</em> {pet.petSkills}</span>
                    
                </li>
            })}
        </ol>
    )
}
export default PetList;

// pet information
// pet name
// pet type
// pet description
// pet skills
// 