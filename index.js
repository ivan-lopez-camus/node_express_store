const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const app = express();
const port=3000;

app.use(express.json()); //permite recibir info json cuando se envia en postman

app.get('/', (req,res)=>{
    res.send('Hola mi server en express');
});

app.get('/app', (req,res)=>{
  res.send('Hola desde la ruta app');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('El puerto se ha iniciado en el puerto '+port);
});

