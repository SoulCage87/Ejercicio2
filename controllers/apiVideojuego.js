import {db} from '../db/conn.js';

const getJuego = async (req, res) => {
 
    const sql = `SELECT * FROM tbl_videjuegos ORDER BY id`;
    const result = await db.query(sql);
    res.json(result);
};

const postJuego = async (req,res) => {

   const {nombre, desarrollador} = req.body;
   const params = [nombre,desarrollador];

   const sql = `INSERT INTO tbl_videjuegos
                (nombre,desarrollador)
                VALUES
                ($1, $2) returning *`;

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