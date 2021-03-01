import React from 'react';
import { navigate, Router } from '@reach/router';
import axios from 'axios';

const Header = () => {
    return (
        <header>
            <h1>Pet Shelter</h1>
            <button className="myButton" onClick={() => navigate(`/`)}>
                Back to Home
            </button>
            <button id="addPet" className="myButton addPet" onClick={() => navigate(`/pets/new/`)}>
                Add a Pet to the Shelter
            </button>
            {/* { (window.location.pathname === '/pets/new/') ? '<div>oh nose</div>' : ''} */}
        </header>
    )
}
export default Header;