const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date : String,
    approved : Boolean,
    user : {
        type : mongoose.Schema.Types.ObjectId, //ObjectId é o ID q aparece no banco
        ref : 'User' //ele ta referenciando ao Model User
    },
    spot : {
        type : mongoose.Schema.Types.ObjectId, //ObjectId é o ID q aparece no banco
        ref : 'Spot' //ele ta referenciando ao Model Spot
    }
});

module.exports = mongoose.model('Booking', BookingSchema);