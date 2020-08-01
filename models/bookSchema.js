const mongoose= require('mongoose');


const bookSchema =new mongoose.Schema({

    id: { type: String,  required: true },
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    author: { type: String, required:true},
    loan_status:{type:Boolean, default:false}

});


module.exports = mongoose.model('Book', bookSchema);