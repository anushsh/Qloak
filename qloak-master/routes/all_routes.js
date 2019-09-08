const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/User_Controller');
const quest_controller = require('../controllers/Question_Controller');

router.post('/api/user/create', user_controller.createUser);
router.get('/api/user/get/:id', user_controller.getUser);
router.get('/api/user/getall', user_controller.getAllUsers);
router.delete('/api/user/delete', user_controller.deleteUsers);
router.get('/api/user/email', user_controller.emailUsers);
router.post('/api/question/create', quest_controller.createQuestion);
router.get('/api/question/get', quest_controller.getAllQuestions);
router.put('/api/question/answer/:id', quest_controller.answerQuestion);
router.delete('/api/question/delete', quest_controller.deleteQuestions);

module.exports = router;
