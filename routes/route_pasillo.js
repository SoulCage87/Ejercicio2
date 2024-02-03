import  express  from "express";
const pasillo = express();

import { getPasillo, postPasillo, putPasillo, dltPasillo } from "../controllers/apiPasillo.js";

pasillo.get('', getPasillo);
pasillo.post('', postPasillo);
pasillo.put('/:id', putPasillo);
pasillo.delete('/:id', dltPasillo);

export {pasillo};