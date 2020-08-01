const mongoose= require('mongoose');

const userSchema =new mongoose.Schema({

    id: { type: Number,  required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cardNumber: { type: Number, required:true},
    

});


module.exports = mongoose.model('User', userSchema);