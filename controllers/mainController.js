const {Question} = require('../models/questionModel');
const Answer = require('../models/answerModel');

const getHomePage = async(req, res) => {
    let result=[];
    const allQuestions=await Question.find().populate('user_id').sort({createdAt: -1});
    const allAnswers = await Answer.find().populate('question_id');
    allQuestions.forEach(question => {
        let answerNum=0;
        let answersOfQuestion = allAnswers.filter(function(a){
            return a.question_id.id===question.id;
        });
        answerNum=answersOfQuestion.length;
        result.push({question, answerNum});
    })
    res.render('home', {result, pageTitle: 'Homepage'});
}

module.exports = { getHomePage }