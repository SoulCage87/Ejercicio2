import express from 'express';

const videojuego = express();
import {getJuego,
    postJuego,
     putJuego,
      dltJuego} from '../controllers/apiVideojuego.js';

videojuego.get('',getJuego);
videojuego.post('', postJuego);
videojuego.put('/:id', putJuego);
videojuego.delete('/:id', dltJuego);

export {videojuego};