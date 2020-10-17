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
})

dishRouter.get('/:dishId',(req,res,next) => {
    res.end('Will send details of the dish: '+req.params.dishId+' to you!');
});

dishRouter.post('/:dishId',(req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+req.params.dishId);
});

dishRouter.put('/:dishId',(req,res,next) => {
    res.write('Updatiing the dish: '+ req.params.dishId + ' \n')
    res.end('Will update the dish: '+req.body.name + ' with details: '+req.body.description);
});

dishRouter.delete('/:dishId',(req,res,next) => {
    res.end('Deleting dish: '+req.params.dishId);
});


module.exports = dishRouter;