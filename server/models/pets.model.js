const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetsSchema = new mongoose.Schema({
    petName: { 
        type: String,
        required: [true, "You must have an owner name"],
        minlength: [3, "Your pet name must be at least 3 characters long"],
        unique: [true, "Your Pet Name must be unique. Please try again."],
        uniqueCaseInsensitive: [true],
    },
    petType: { 
        type: String,
        required: [true, "You must have a pet type"],
        minlength: [3, "Your pet type must be at least 3 characters long"],
        sort: [true, "ascending"],
    },
    petDescription: { 
        type: String,
        required: [true, "You must have a pet description"],
        minlength: [3, "Your pet description must be at least 3 characters long"],
    },
    petSkills: { 
        type: String,
    },
    petSkills2: { 
        type: String,
    },
    petSkills3: { 
        type: String,
    },
    petPhotoUrl: { 
        type: String,
        required: [true, "You must have a pet photo"],
    }

}, {timestamps: true});

// THIS: collection names are all lowercase and plural based on this string "Pet"
PetsSchema.plugin(uniqueValidator, {message: 'Sorry, your pet name must be unique. Please try again.'});
module.exports = mongoose.model('Pet', PetsSchema);
