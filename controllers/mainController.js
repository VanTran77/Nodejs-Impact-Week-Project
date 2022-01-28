const {questionModel} = require('../models/questionModel')

const getHomePage = (req, res) => {
    questionModel.find().sort({createdAt: -1})
        .then(result => res.render('home', {result, pageTitle: 'Homepage'})) 
        .catch(err => console.log(err))
}

module.exports = { getHomePage }