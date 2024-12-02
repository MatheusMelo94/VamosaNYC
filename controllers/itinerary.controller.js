const Itinerary = require('../models/itinerary.model.js');


const getItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find({});
        res.status(200).json(itineraries);  // Return response here
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
};

const createItinerary = async (req, res) => {
    console.log('Request received: ', req.body);
    try {
        const itinerary = await Itinerary.create(req.body);
        res.status(201).json(itinerary);  // Resource created
    } catch (error) {
        console.log('Error creating itinerary!:', error);
         res.status(500).json({ message: error.message });
    }
};

const getItinerary = async (req, res) => {
    try {
        const { id } = req.params;  // Get id from the URL parameters
        const itinerary = await Itinerary.findById(id);
        if (!itinerary) {
            res.status(404).json('Itinerary not found!');
        }
        return res.status(200).json(itinerary);  // Correct status code for success
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteItinerary = async (req, res) => {
    try {
        const { id } = req.params;
        const itinerary = await Itinerary.findByIdAndDelete(id);
        if (!itinerary) {
            res.status(404).json("Itinerary not found!");  // Change status code to 404
        }
        return res.status(200).json(itinerary);  // Correct status code for success
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateItineary = async (req, res)=>{
    try {
        const {id} = req.params;
        const itinerary = await Itinerary.findByIdAndUpdate(id, req.body);
        if(!itinerary){
            res.status(404).json("Itinerary not found!");
        }

        res.status(200).json(itinerary);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getItineraries,
    createItinerary,
    getItinerary,
    deleteItinerary,
    updateItineary
};
