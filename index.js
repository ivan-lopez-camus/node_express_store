const express = require('express');
const routerApi = require('./routes');
const app = express();
const port=3000;


app.get('/', (req,res)=>{
    res.send('Hola mi server en express');
});

app.get('/app', (req,res)=>{
  res.send('Hola desde la ruta app');
});

routerApi(app);

app.listen(port, ()=>{
  console.log('El puerto se ha iniciado en el puerto '+port);
});

console.log('Mi app')
