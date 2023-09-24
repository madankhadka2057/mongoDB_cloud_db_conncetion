const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,  // Use JavaScript data types (String, Number, etc.) without quotes
    email: String
});

module.exports = mongoose.model('User', userSchema);



