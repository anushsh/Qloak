var mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const Question = require('../models/Questions');

//CRUD
createQuestion = (req, res) => {
    const {text} = req.body;
    let question = new Question(
        {
          //initialize answer to null when question first created
            text: text,
            answer: null
        }
    );
    question.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json(question);
    });
}


getAllQuestions = (req, res) => {
    Question.find({}, (err, questions) => {
        if (err){
          return res.json({ success: false, error: err });
        }
        return res.json(questions);
    });
}

answerQuestion = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, {$set: {answer: req.body.answer}}, {new: true}, (err, question) => {
    if (err) return res.json({ success: false, error: err });
    return res.json(question);
  });
}

deleteQuestions = (req, res) => {
  Question.remove({}, (err, questions) => {
    if (err){
      return res.json({ success: false, error: err });
    }
    return null;
  });
}

module.exports = {
    createQuestion, getAllQuestions, answerQuestion, deleteQuestions
}
