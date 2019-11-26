const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String,
    company : String,
    price : Number,
    techs : [String],
    user : {
        type : mongoose.Schema.Types.ObjectId, //ObjectId é o ID q aparece no banco
        ref : 'User' //ele ta referenciando ao Model User
    }
});

module.exports = mongoose.model('Spot', SpotSchema);