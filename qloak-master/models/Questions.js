const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const questionSchema = new Schema ({
      text: String,
      answer: String
})

module.exports = mongoose.model('questions', questionSchema);
