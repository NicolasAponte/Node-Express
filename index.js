//En este ejercicio se inicia un servidor con ayuda de Express
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();//Decimos que la app va a usar Express Node Module
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'))

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
}); //Next es usado como middleware adicional

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
