const express= require('express');
const db= require('./config/mongoose');
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/adminController')
const port=3000;
//app.use(bodyParser.urlencoded({ extended: true }));


const app=express();
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/library', apiRoutes);


app.listen(port,function(err)
{
    if(err)
    {
        console("ERROR: Server is not listening on the port", port);
        return;
    }
    console.log("Server is up & Successfully running on the port",port);
})