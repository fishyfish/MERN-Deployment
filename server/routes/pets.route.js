//import myt controllers
const PetsController = require('../controllers/pets.controller');

// create the valid routes
module.exports = (app) => {
    app.get('/api/pets', PetsController.getAll);
    app.post('/api/pets', PetsController.create);
    app.get('/api/pet/:id', PetsController.getOne);
    app.put('/api/pet/:id', PetsController.update);
    app.delete('/api/pet/:id', PetsController.delete);
}