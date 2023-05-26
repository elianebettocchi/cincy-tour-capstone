const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const artsRouter = require('../backend/routes/arts')

app.use('/arts', artsRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,})
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully");
})
