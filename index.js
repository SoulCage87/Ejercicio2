import express from 'express';
import {videojuego} from './routes/route_videojuego.js'
import { genero } from './routes/route_genero.js';
import { pasillo } from './routes/route_pasillo.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/videojuego', videojuego)
app.use('/api/genero', genero)
app.use('/api/pasillo', pasillo);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});