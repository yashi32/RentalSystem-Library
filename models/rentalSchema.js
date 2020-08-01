const mongoose = require("mongoose");
const User = require('../models/userSchema')
const Book = require('../models/bookSchema')

const rentalSchema = new mongoose.Schema({
  User: {type: mongoose.Schema.Types.String, ref: 'User' },
  Book: {type: mongoose.Schema.Types.String, ref: 'Book'  },
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;