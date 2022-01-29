const {questionModel} = require('../models/questionModel')
const userModel = require('../models/userModel')
const {handlerError} = require('../config/handlerErrors')

const addQuestion = async (req,res) => {
    if (req.method === 'GET') {
        res.render('addQuestion', {errors: null, pageTitle: 'Add question'})
    }
    if (req.method === 'POST') {
            id = res.locals.user.id;
            User = await userModel.findById(id)
            const newQuestion = new questionModel(req.body)
            newQuestion.user_id = User;
            // console.log(newQuestion.user_id);
            newQuestion.save()
                .then( () => res.redirect('/questions'))
                .catch( err => {
                  const errors = handlerError(err)
                  res.render('addQuestion', {errors, pageTitle: 'Add question'})})
                } 
}

const showOneQuestion = (req, res) => {
    questionModel.findById(req.params.id).populate('user_id')
    .then( result => {
        res.render('showOneQuestion', {result, pageTitle: 'Question See More'})})
    .catch( err => console.log(err))
}

const delQuestion = (req, res) => {
    questionModel.findByIdAndDelete(req.params.id)
        .then( () => res.redirect('/questions'))
        .catch( err => console.log(err))
}

const editQuestion = (req, res) => {
    if(req.method === 'GET'){
        questionModel.findById(req.params.id)
            .then(result => {
                // console.log(result)
                res.render('editQuestion', { result, errors: false, pageTitle: 'Edit question'})}
                )
            .catch(err => console.log(err))
        } 
    if (req.method ==='POST'){
    questionModel.findByIdAndUpdate(req.params.id, {runValidators: true})
        .then(result => {
            result.question = req.body.question
            result.description = req.body.description
            result.save() 
            .then((result) => 
                res.render('showOneQuestion', {result, pageTitle: 'See more'})) 
                .catch(err => {
                    const errors = handlerError(err)
                    questionModel.findById(req.params.id)
                    .then(result => {
                        res.render('editQuestion', {errors, result, pageTitle: 'Edit question'})})
                })
        })
    }
}

module.exports = {
    addQuestion,
    showOneQuestion,
    delQuestion,
    editQuestion,
}