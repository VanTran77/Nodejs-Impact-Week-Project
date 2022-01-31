const mongoose = require('mongoose')
require('dotenv').config();

const dbURI = process.env.MongoURI
mongoose.connect(dbURI)
    .then (result => console.log("Connected to Mongodb Cloud"))
    .catch (err => console.log(err));