// for dotenv mpodule
const dotenv = require('dotenv');
dotenv.config()

// for express module
const express = require('express');

// this is for path module
const path = require('path');

// call the express module
const app=express();

// this is method of dotenv
const port = process.env.PORT || '3000'

// use for view folder to access the file
const Path = path.join(__dirname,'view');

// imports files from the routes folder
const route = require('./routes/index');

// this is for route
app.use('/ind', route)

// to access subfiles from the view folder 
app.use(express.static('views'));

// to view path from the view folder
app.set('view engine','ejs');
app.set('views',Path);




// for listen to the server
app.listen(port, ()=>console.log('server running on ' + process.env.LOCAL_URL+ port));