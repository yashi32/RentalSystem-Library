const express = require('express')
const Book = require('../models/bookSchema')
const User = require('../models/userSchema')
const Rental = require('../models/rentalSchema')

const router = express.Router()


//Create a book

router.post('/create-book',function(req,res)
{
        let book_details=req.body;
        if(book_details.id && book_details.isbn && book_details.title && book_details.author)
        {
            let book_id=Book.findById(book_details.id);
            if(book_id==null || book_id==undefined)
            {
                    book=Book.create({
                        id: book_details.id,
                        title:book_details.title,
                        isbn:book_details.isbn,
                        author:book_details.author
                    });

                    return res.status(200).json(
                        { message:"Created a book named"+book_details.title+"with id"+ book_details.id,
                          book:book}
                    );
            }
            else{
                return res.status(200).json(
                    { message: "The book with title"+ book_details.title +"and id"+ book_details.id+"already exist"}
                );

            }
        }
        else{
            return res.status(500).json(
                {message: "Either of the fields are missing, Please Check"});
        }
})

//Create a new User
router.post('/create-user',(req,res)=>{
    let card_user= User.findById(req.body.id);
    if(card_user)
    {
            return res.status(200).json(
                {
                    message:"User already exist"
                }
            )
    } 
    else{
            card_user=User.create({
                id:req.body.id,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                cardNumber:req.body.cardNumber
            });
            return res.status(200).json(
               { message: "New User added ",
                card_user:card_user}
            )
    }
})


//Rent a book
router.post('/rent-book',(req,res)=>{
    let bookId=req.query.bookId;
    let userId=req.query.userId;
    
})