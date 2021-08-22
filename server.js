//creates a basic web server that listens on the port 
//that is defined by the PORT environment variable.
'use strict';

const express = require('express');
const path = require('path');

// App
const app = express();
app.use(app.router);

// The below command prefixes current directory path to public
// Uncomment when public folder created and files moved to public
//app.use(express.static(path.join(__dirname, 'public')));

// Constants
const PORT = 8080;

//const HOST = '0.0.0.0';

// Read app files in the public folder. Ucomment when files moved to public folder
// ===============================================================================
//app.use("/styles", express.static(__dirname + '/public/stylesheets'));
//app.use("/scripts", express.static(__dirname + '/public/javascripts'));
//app.use("/images", express.static(__dirname + '/public/images'));

/*app.get('/', (req, res) => {
    res.send('Hello World');
});*/

//Serve entry html page of the application
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//Listen on specified port
app.listen(PORT, () => {
  console.log(`Bhaskara Express App server Running on: ${PORT}`)
})
