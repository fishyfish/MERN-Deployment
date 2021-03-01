import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import { ESRCH } from 'constants';
// import { set } from 'mongoose';

const NewPet = (prop) => {
    const [ petName, setPetName] = useState('');
    const [ petType, setPetType ] = useState('');
    const [ petDescription, setPetDescription] = useState('');
    const [ petSkills, setPetSkills] = useState('');
    const [ petSkills2, setPetSkills2] = useState('');
    const [ petSkills3, setPetSkills3] = useState('');
    const [ petPhotoUrl, setPetPhotoUrl] = useState('');
    const [errs, setErrs] = useState({});

    const submitForm = (e) =>{
        e.preventDefault();
        // do something with axios
        console.log('submitting form');
        const newPet = {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            petSkills: petSkills,
            petSkills2: petSkills2,
            petSkills3: petSkills3,
            petPhotoUrl:petPhotoUrl
        };
        console.log(newPet);
        axios.post('http://localhost:8000/api/pets',
            newPet
        )
        .then((response) =>{
            if (response.data.errors){
                console.log(response.data.errors);
                setErrs(response.data.errors);
            } else {
            console.log(response.data);
            // navigate(`/pet/${response.data._id}`);
            navigate(`/`);
           
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h2 className="pet-header">Know a pet needing a home?</h2>
            <form onSubmit={submitForm}>
                <ol className="form-list">
                <li>
                    <label>Pet Photo Url</label>
                    <input type="text"
                        name="petPhotoUrl"
                        value={petPhotoUrl}
                        onChange = {(e) => setPetPhotoUrl(e.target.value)}
                        />
                        {
                            errs.petPhotoUrl ?
                            <span className="error-text">{errs.petPhotoUrl.message}</span>
                            :null
                        }
                </li>
                <li>
                    <label>Pet Name</label>
                    
                    <input type="text"
                        name="petName"
                        value={petName}
                        onChange = {(e) => setPetName(e.target.value)}
                        />
                        {
                            errs.petName ?
                            <span className="error-text">{errs.petName.message}</span>
                            :null
                        }
                </li>
                <li>
                    <label>Pet Type</label>
                    <input type="text"
                        name="petType"
                        value={petType}
                        onChange = {(e) => setPetType(e.target.value)}
                        />

                        {
                            errs.petType ?
                            <span className="error-text">{errs.petType.message}</span>
                            :null
                        }
                </li>
                <li>
                    <label>Pet Description</label>
                    <input type="text"
                        name="petDescription"
                        value={petDescription}
                        onChange = {(e) => setPetDescription(e.target.value)}
                        />
                        {
                            errs.petDescription ?
                            <span className="error-text">{errs.petDescription.message}</span>
                            :null
                        }
                </li>
                <li>
                    <label>Pet Skills 1:</label>
                    <input type="text"
                        name="petSkills"
                        value={petSkills}
                        onChange = {(e) => setPetSkills(e.target.value)}
                        />
                 </li>
                <li>
                        <label>Pet Skills 2:</label>
                        <input type="text"
                        name="petSkills2"
                        value={petSkills2}
                        onChange = {(e) => setPetSkills2(e.target.value)}
                        />
                     </li>
                    <li>
                        <label>Pet Skills 3:</label>
                        <input type="text"
                        name="petSkills3"
                        value={petSkills3}
                        onChange = {(e) => setPetSkills3(e.target.value)}
                        />
                </li>
               
                <li>
                    <button type="button" className="myButton secondary" onClick={() => navigate(`/`)}>Cancel</button>
                    <button type="submit" className="myButton">Add My Pet</button>
                </li>
                </ol>
            </form>
        </div>
    )
}

export default NewPet;