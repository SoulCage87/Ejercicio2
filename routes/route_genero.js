import express from 'express';
import { getGenero, postGenero, putGenero, dltGenero} from '../controllers/apiGenero.js'

const genero = express();

genero.get('', getGenero);
genero.post('', postGenero);
genero.put('/:id', putGenero);
genero.delete('/:id', dltGenero);
export {genero}

