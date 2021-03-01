import React from 'react'
import axios from 'axios';
import DeletePet from './DeletePet';
const DeleteButton = (props) => {
    const { personId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <div>nothing</div>
        // <button onClick={DeletePet}>
        //     Adopt This Pet
        // </button>
        // <button type="button" 
        //     className="myButton" 
        //     onClick={() => { if (window.confirm('Are you sure you wish to adopt this Pet?')) DeletePet(pet._id) } } >
        //         Adopt This Pet</button>
        )
}
export default DeleteButton;