// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/Impact-Week-Pre')
// .then (() => console.log('DB connected'))
// .catch( err => console.log(err))

const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://nodejscl:pass123321@nodejsmongo.a4lyw.mongodb.net/Impact-Week?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then (result => console.log("Connected to Mongodb Cloud"))
    .catch (err => console.log(err));