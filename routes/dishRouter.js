const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/') //Declaramos el endpoint

.all((req,res,next) => {//Va a operar en todo el end point
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {//Se elimina el app y la dir porque por defecto se sabe que operará acá
    res.end('Will send all the dishes to you!');
})

.post((req,res,next) => {
    res.end('Will  add the dish: '+ req.body.name + ' with details: '+ req.body.description);
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

.delete((req,res,next) => {
    res.end('Deleting all the dishes to you!');
});


module.exports = dishRouter;