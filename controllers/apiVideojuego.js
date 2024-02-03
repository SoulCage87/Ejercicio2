import {db} from '../db/conn.js';

const getJuego = async (req, res) => {
 
    const sql = `SELECT a.*, b.nombre_genero AS genero, c.num_pasillo AS pasillo, c.num_estante AS estante
    FROM tbl_videjuegos a
    INNER JOIN tbl_genero b ON a.id_genero = b.id
    INNER JOIN tbl_pasillo c ON a.id_pasillo = c.id;`;
    const result = await db.query(sql);
    res.json(result);
};

const postJuego = async (req,res) => {

   const {nombre, desarrollador,id_genero,id_pasillo} = req.body;
   const params = [nombre,desarrollador,id_genero,id_pasillo];

   const sql = `INSERT INTO tbl_videjuegos
                (nombre,desarrollador,id_genero,id_pasillo)
                VALUES
                ($1, $2, $3, $4) returning *`;

   const result = await db.query(sql, params); 
   res.json(result);            

};

const putJuego = async (req,res) => {

const {nombre, desarrollador} = req.body;
const {id} = req.params;

const params = [
    nombre,
    desarrollador,
    id
];

const sql = `update tbl_videjuegos 
set
 nombre = $1, 
 desarrollador = $2
where id = $3 returning *`;

const result = await db.query(sql, params);
res.json(result);

};

const dltJuego = async (req,res) => {
    const params = [req.params.id];

    const sql = `DELETE FROM tbl_videjuegos WHERE id = $1 returning *`;
    const result = await db.query(sql,params);

    res.json(result);
};


export {getJuego, postJuego, putJuego, dltJuego};