//creates a basic app server that listens on the given port 
//that is defined by the PORT environment variable.
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// The below command prefixes current directory path to public
// Uncomment when public folder created and files moved to public
//app.use(express.static(path.join(__dirname, 'public')));


// Read multiple app files in the public folder. Ucomment when files moved to public folder
// ===============================================================================
//app.use("/styles", express.static(__dirname + '/public/stylesheets'));
//app.use("/scripts", express.static(__dirname + '/public/javascripts'));
//app.use("/images", express.static(__dirname + '/public/images'));

app.use(express.static(__dirname + '/index.html'));
app.use(express.static(__dirname + '/age.css'));
app.use(express.static(__dirname + '/age.js'));

//Serve entry html page of the application
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//Serve hello world
/*app.get('/', (req, res) => {
    res.send('Hello World');
});*/

//Listen on specified port
app.listen(port);
console.log(`Bhaskara Express App server Running on ${host}:${port}`);