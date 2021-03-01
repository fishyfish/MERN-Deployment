import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import { setServers } from 'dns';

const EditPet = (props) => {
        const {petId} = props;
        const [pet, setPet] = useState("");
        const [loaded, setLoaded] = useState([]);
        const [ petName, setPetName] = useState('');
        const [ petType, setPetType ] = useState('');
        const [ petDescription, setPetDescription] = useState('');
        const [ petSkills, setPetSkills] = useState('');
        const [ petSkills2, setPetSkills2] = useState('');
        const [ petSkills3, setPetSkills3] = useState('');
        const [ petPhotoUrl, setPetPhotoUrl] = useState('');
        const [errs, setErrs] = useState({});
        const { removeFromDom } = props;
    
        // run once no matter what. useEffect
        useEffect(() => {
            axios.get("http://localhost:8000/api/pet/" + petId) // works fine
                .then((res) => {
                    console.log('This is so awesome' + res.data);
                    setPet(res.data);
                    setLoaded(true);

                    const myPet =res.data;
                    console.log(myPet);
                    setPetName(myPet.petName);
                    setPetType(myPet.petType);
                    setPetDescription(myPet.petDescription);
                    setPetSkills(myPet.petSkills);
                    setPetSkills2(myPet.petSkills2);
                    setPetSkills3(myPet.petSkills3);
                    setPetPhotoUrl(myPet.petPhotoUrl)
                })
                .catch(err=>console.log('something is errored out' + err))
        }, []);

        const onSubmitHandler = (e) => {
            //e.preventDefault();
            axios.put('http://localhost:8000/api/pet/'  + petId, {
                petName: petName,
                petType: petType,
                petDescription: petDescription,
                petSkills: petSkills,
                petSkills2: petSkills2,
                petSkills3: petSkills3,
                petPhotoUrl:petPhotoUrl
            })   
            .then((res) => {
                if(res.data.errors){
                    console.log(res.data.errors)
                    setServers(res.data.errors)
                } else {
                    console.log(res.data);
                    navigate(`/pet/${res.data._id}`);
                }
            })
                
            .catch(err=>console.log(err))
        };

        return (
            <form onSubmit={onSubmitHandler}>
                <div className="form-list">
                <h2 className="pet-header">Edit {pet.petName}</h2>
                <ol className="edit-list" key={props.id}>
                <li>
                        <label>Pet Photo</label>
                        <input type="text" placeholder={pet.petPhotoUrl} defaultValue={pet.petPhotoUrl} onChange = {(e)=>setPetPhotoUrl(e.target.value)}/>
                        {
                            errs.petPhotoUrl ?
                            <span className="error-text">{errs.petPhotoUrl.message}</span>
                            :null
                        }
                    </li>
                    <li>
                        <label>Pet Name</label>
                        <input type="text" placeholder={pet.petName} defaultValue={pet.petName} onChange = {(e)=>setPetName(e.target.value)}/>
                        {
                            errs.petName ?
                            <span className="error-text">{errs.petName.message}</span>
                            :null
                        }
                    </li>
                    <li>
                        <label>Pet Type</label>
                        <input type="text" placeholder={pet.petType} defaultValue={pet.petType} onChange = {(e)=>setPetType(e.target.value)}/>
                        {
                            errs.petType ?
                            <span className="error-text">{errs.petType.message}</span>
                            :null
                        }
                    </li>
                    <li>
                        <label>Pet Description</label>
                        <input type="text" placeholder={pet.petDescription} defaultValue={pet.petDescription} onChange = {(e)=>setPetDescription(e.target.value)}/>
                        {
                            errs.petDescription ?
                            <span className="error-text">{errs.petDescription.message}</span>
                            :null
                        }
                    </li>
                    <li> 
                        <label>Pet Skills 1:</label>
                        <input type="text" placeholder={pet.petSkills} defaultValue={pet.petSkills} onChange = {(e)=>setPetSkills(e.target.value)}/>
                    </li>
                    <li> 
                        <label>Pet Skills 2:</label>
                        <input type="text" placeholder={pet.petSkills2} defaultValue={pet.petSkills2} onChange = {(e)=>setPetSkills2(e.target.value)}/>
                    </li>
                    <li> 
                        <label>Pet Skills 3:</label>
                        <input type="text" placeholder={pet.petSkills3} defaultValue={pet.petSkills3} onChange = {(e)=>setPetSkills3(e.target.value)}/>
                    </li>
    
                </ol>
                <div className="button-row">
                    <button type="button" className="myButton secondary"  onClick={() => navigate(`/`)}>
                        Back to All Pets
                    </button>
                    <button type="submit" className="myButton">Update Pet</button> 
                </div>
                </div>
            </form>
           
        )
    }

    export default EditPet;