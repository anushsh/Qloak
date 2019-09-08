var mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const User = require('../models/User');
const Questions = require('../models/Questions');
const sgMail = require('@sendgrid/mail');
const question_controller = require('../controllers/Question_Controller');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//CRUD
createUser = (req, res) => {
  const { name, admin } = req.body;
  let user = new User(
    {
      //name is actually email
      admin: admin,
      name: name,
    }
  );
  user.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json(user);
  });
}


getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.json({ success: false, error: err });
    return res.json(user);
  });
}

getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.json({ success: false, error: err });
    }
    console.log(users.name);
    return res.json(users);
  });
}

deleteUsers = (req, res) => {
  User.remove({}, (err, questions) => {
    if (err) {
      return res.json({ success: false, error: err });
    }
    return null;
  });
}

emailUsers = (req, res) => {

  Questions.find({ answer: { $ne: null } }, (err, questions) => {
    if (err) return res.json({ success: false, error: err });
    let classReport = '';
    questions.map(question => {
      classReport += "Q: " + question.text + "\n" + "A: " + question.answer + "\n\n";
    })
    console.log(classReport);
  })

  /*const msg = {
    to: ['anushrutshah@gmail.com'],
    from: 'maxdeng87@gmail.com',
    subject: 'Class Questions',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  console.log('msg sent');*/
}

module.exports = {
  createUser, getUser, getAllUsers, deleteUsers, emailUsers
}
