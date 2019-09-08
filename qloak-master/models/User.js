const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema ({
    admin: Boolean,
    name: String,
})

module.exports = mongoose.model('users', userSchema);
