const Pets = require('../models/pets.model');

module.exports = {
    getAll: (req, res) => {
        Pets.find()
        .sort({ petType: "ascending"})
        .then((allPets) =>{
            console.log(allPets);
            res.json(allPets);
        })
        .catch((err) =>{
            console.log('error in getAll: ' + err);
            res.json(err);
        })
},

create: (req,res) => {
    // create a pet in the db
    console.log(req.body);
    Pets.create(req.body)
    .then(( newPet) => {
        console.log(newPet);
        res.json(newPet);
    })
    .catch((err) =>{
        console.log('error in create: ' + err);
        res.json(err);
    })
},

getOne: (req,res) => {
    // get a single pet by ID
    console.log(req.params.id);
    Pets.findById(req.params.id)
    .then((onePet) => {
        console.log(onePet);
        res.json(onePet);
    })
    .catch((err) => {
        console.log('error in getOne: ' + err);
        res.json(err);
    })
},
update: (req,res) => {
    // get a single pet by ID
    console.log(req.params.id);
    console.log(req.body);
    Pets.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        context: 'query',
    })
    .then((updatedPet) => {
        console.log(updatedPet);
        res.json(updatedPet);
    })
    .catch((err) => {
        console.log('error in update: ' + err);
        res.json(err);
    })
},
delete: (req,res) => {
    // remove a single pet by ID
    console.log("Trying to remove this " + req.params.id);
    Pets.findByIdAndDelete(req.params.id, req.body,)
    .then((removedPet) => {
        console.log("Removed this pet " + removedPet);
        res.json(removedPet);
    })
    .catch((err) => {
        console.log('error in delete: ' + err);
        res.json(err);
    })
},

}