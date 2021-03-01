import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';
import AllPets from './components/AllPets';
import DeletePet from './components/DeletePet';
import Header from './views/Header';

function App() {
  const NotFound = () => {
    return (
      <div className="error"> Route Not Found</div>
    )
  };
  return (
    <div className="App">
      <div id="pet"></div>
      <Header />
      <Router> 
        <AllPets path="/"/>
        <NewPet path="/pets/new" /> 
        <OnePet path="/pet/:id" />
        <EditPet path="/pet/:petId/edit" />
        <NotFound default /> 
      </Router>
    </div>
  );
}
export default App;