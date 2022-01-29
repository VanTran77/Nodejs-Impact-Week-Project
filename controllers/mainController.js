const {questionModel} = require('../models/questionModel')

const getHomePage = async(req, res) => {
    // console.log(question[0].user_id.email);
    // populate shows object user_id details
    questionModel.find().populate('user_id').sort({createdAt: -1})
        .then(result => 
            {
                // console.log(result.user_id.username);
                res.render('home', {result, pageTitle: 'Homepage'})
            })
        .catch(err => console.log(err))
}

module.exports = { getHomePage }