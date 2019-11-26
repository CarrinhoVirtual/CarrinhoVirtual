const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // nome : String,
    email : String,
    // age : Number,
    // active : Boolean,
});
//estrutura do usuario, campos, tipos de campos

module.exports = mongoose.model('User', UserSchema);