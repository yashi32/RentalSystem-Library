//require the library
const moongoose=require('mongoose');

//connect to database
moongoose.connect('mongodb://localhost/library_rental_system');

//acquire the connection

const db= moongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));

//up and running
db.once('open',function()
{
    console.log('Connected to database successfully');
})