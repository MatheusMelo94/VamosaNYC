const express = require('express');
const { specs, swaggerUi } = require('./documentation/swagger.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');


app.listen(PORT, ()=>{
    console.log(`Serving is running on port ${PORT}`);
})
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const itineraryRoute = require('./routes/itinerary.route.js');
const userRoute = require('./routes/user.route.js');

app.use('/api/itineraries',itineraryRoute);
app.use('/api/user', userRoute);

mongoose.connect('mongodb+srv://matheuscaique:Maninholoko09!@backenddb.s5ud8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => console.log('Connected!'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
