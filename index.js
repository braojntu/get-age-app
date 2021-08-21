//creates a basic web server that listens on the port 
//that is defined by the PORT environment variable.
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    console.log('Hello world received a request.');

    const target = process.env.TARGET || 'World';
    res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});