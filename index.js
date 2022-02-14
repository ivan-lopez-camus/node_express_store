const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')
const app = express();
const port=3000;

app.use(express.json()); //permite recibir info json cuando se envia en postman

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));

app.get('/', (req,res)=>{
    res.send('Hola mi server en express');
});

app.get('/app', (req,res)=>{
  res.send('Hola desde la ruta app');
});

routerApi(app);

 // si se pone esta linea antes de app.use(routerApi) se bloquea el localhost3000
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('El puerto se ha iniciado en el puerto '+port);
});

