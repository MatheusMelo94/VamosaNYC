const mongoose = require('mongoose');

const ItinerarySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter itinerary name']
    },

    description: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    });


const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;