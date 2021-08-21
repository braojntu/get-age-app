//creates a basic web server that listens on the port 
//that is defined by the PORT environment variable.

const http = require('http');
const server = http.createServer((req, res) => {
    console.log('New Connection')
    res.end('Hello This is Bhaskara HTTP Server')
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log('Listening'));